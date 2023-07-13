import express, {Request} from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors'
import 'dotenv/config'
import { EmailParams } from './types';

const PORT = process.env.PORT || 5000

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass:  process.env.GMAIL_PASS
  }
})


transporter.verify((error, _success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.options('/send-email', (req, res) => {
  res.status(204).json({})
})

app.post('/send-email', async (req: Omit<Request,'body'> & { body: EmailParams }, res) => {

  const email = req.body.email
  const message = req.body.message
  const content = `From: ${req.body.name} \nEmail: ${email} \nPhone Number: ${req.body.phone} \nMessage Inquiry: \n\t${message}`

  const mail = {
    from: req.body.email,
    to: 'zainen.test@gmail.com',
    subject: 'Incoming Kai Care & Wellness Inquiry',
    message: 'Message',
    text: content,

  }
  await transporter.sendMail(mail, (err, _) => {
    if (err) {
      res.status(400).json({
        body: 'failed to send'
      })
    } else {
      res.status(200).json({
        body: 'sent'
      })
    }
  })
})

app.listen(PORT, () => console.info(`server listening on ${PORT}`))