const express = require('express')
const app = express()
const port = 5000
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());

app.get('/app', (req, res) => {
  res.send('Hello World!')
})

app.post('/app/send/email', (req, res) => {
  console.log(req.body);

  if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('email') && req.body.hasOwnProperty('subject') && req.body.hasOwnProperty('message')){
    try {
      const msg = {
        to: req.body.email,
        from: 'contact@mariamqureshi.com',
        subject: 'Be You by MQ | Mariam Qureshi - Contact Form',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      // sgMail.send(msg);

      res.json({
        sucess: true,
        message: 'Message successfully delivered!'
      });
    
    }catch(e){
      console.log(e);
    }
  }else {
    return res.send(400);
  }


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
