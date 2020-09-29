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

  const msg = {
    to: 'sami@phot0x.com',
    from: 'Be You by MQ | Mariam Qureshi',
    subject: 'Sending with Twilio SendGrid is Fun',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);


  res.send(process.env.SENDGRID_API_KEY);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
