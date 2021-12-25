require('dotenv').config();

const nodemailer = require('nodemailer');

// Step 1
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    type: 'login',
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Step 2
let mailOptions = {
  from: 'slarsen3023@gmail.com',
  to: 'slarsen-3@att.net',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

// Step 3
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurs', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// Remover less secure apps from gmail account for testing
