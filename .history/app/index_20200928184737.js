const express = require('express')
const app = express()
const port = 5000
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

app.use(express.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});



app.get('/app', (req, res) => {
  res.send('Hello World!')
})

app.post('/app/send/email', (req, res) => {
  console.log(req);
  if(req.headers.hasOwnProperty('authorization') && req.headers.authorization === 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'){
    if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('email') && req.body.hasOwnProperty('subject') && req.body.hasOwnProperty('message')){
      try {
        console.log(req.body);
        // To client
        const msg = {
          to: req.body.email,
          from: 'contact@mariamqureshi.com',
          subject: 'Be You by MQ | Mariam Qureshi - Contact Form',
          html: `
            <h2><strong>${req.body.name},</strong></h2>
            <p>I have received your message and would like to thank you for writing to me. If your inquiry is urgent, please use the telephone number listed below to get in touch. Otherwise, I will reply by email as soon as possible.</p> 
            <p>Talk to you soon,</p>
            <p><strong>Be You by MQ | Mariam Qureshi</strong></p>
            <p style="line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;">Mobile: 613.218.0587<br/>Email: contact@mariamqureshi.com<br/>Website: http://mariamqureshi.com</p>
          `,
        };
        // sgMail.send(msg);
  
        // To Mariam
        const msgToMQ = {
          to: 'contact@mariamqureshi.com',
          from: 'contact@mariamqureshi.com',
          subject: 'Contact form submission - Be You by MQ | Mariam Qureshi',
          html: `
            <strong>${req.body.name} just tried to reach you!</strong>
            <br/>
            <p>Contacts email: ${req.body.email}</p>
            <p>Contacts subject: ${req.body.subject}</p>
            <p>Contacts message: ${req.body.message}</p>
          `,
        };
  
        // sgMail.send(msgToMQ);
  
        res.json({
          sucess: true,
          message: 'Message successfully delivered!'
        });
      
      }catch(e){
        console.log(e);
        res.json({
          sucess: false,
          message: 'Message not delivered!'
        });
      }
    }else {
      return res.sendStatus(401);
    }
  }else {
    return res.sendStatus(401);
  }
})

app.listen(port, () => {
  console.log(`MQ back-end app listening at http://localhost:${port}`)
})
