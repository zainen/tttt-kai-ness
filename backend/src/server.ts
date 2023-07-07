import express from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import 'dotenv/config'

const PORT = process.env.PORT || 5000

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass:  process.env.GMAIL_PASS
  }
})


transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post('/post', (req, res) => {

  const email = req.body.email
  const message = req.body.message
  const content = `From: ${req.body.name} \nEmail: ${email} \nMessage Inquiry: \n\t${message}`

  const mail = {
    from: req.body.email,
    to: 'zainen.test@gmail.com',
    subject: 'Incoming Kai Care & Wellness Inquiry',
    message: 'Message',
    text: content,

  }
  transporter.sendMail(mail, (err, _) => {
    if (err) {
      res.json({
        status: "fail",
      })
    } else {
      res.json({
        status: "success"
      })
    }
  })
})

app.listen(PORT, () => console.info(`server listening on ${PORT}`))