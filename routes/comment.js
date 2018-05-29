var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var Comment = require('../models').comment;


router.get('/all', function(req, res) {
  Comment.findAll().then(function(comment) {
    res.send(comment);
  });
});

router.get('/thanks', function(req, res) {
  console.log(redirect);
})
router.post('/', function(req, res) {
  const output = `<p> You have a new comment </p>
                    <h3> Details </h3>
                      <ul>
                        <li> Name: ${req.body.name} </li>
                        <li> Email: ${req.body.email} </li>
                        <li> Comment: ${req.body.comment} </li>
                      </ul>`
  let transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'djr.properties@yahoo.com', // generated ethereal user
            pass: 'Bristolbristol2016' // generated ethereal password
        },
        tls: {
          rejectUnauthorized:false
        }

    });
    let mailOptions = {
        from: '"Nodemailer Contact" <djr.properties@yahoo.com>', // sender address
        to: 'djr.properties@yahoo.com', // list of receivers
        subject: 'New Comment', // Subject line
        text: 'Hello world?', // plain text body
        html: output
    };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    Comment.create(req.body)
  });

module.exports = router;
