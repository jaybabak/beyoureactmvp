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

app.get('/app/send/email', (req, res) => {
  console.log(req.body);

  if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('email') && req.body.hasOwnProperty('subject') && req.body.hasOwnProperty('message')){
    try {
      const msg = {
        to: 'sami@phot0x.com',
        from: 'contact@mariamqureshi.com',
        subject: 'Be You by MQ | Mariam Qureshi - Contact Form',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      // sgMail.send(msg);
    
    }catch(e){
      console.log(e);
    }
  }




  res.send(process.env.SENDGRID_API_KEY);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
