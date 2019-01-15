const router = require("express").Router();
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
import pass from '../passes';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const transporter = nodemailer.createTransport({
  host: 'malilnickaau.nazwa.pl',
  auth: {
    user: 'schoolly@malilnickaau.nazwa.pl',
    pass: pass.email.pwd
  }
});

router.post("/", (req, res) => {
  res.send(req.body.q);
  const mailOptions = {
    from: 'Schoolly App<schoolly@malilnickaau.nazwa.pl>',
    to: 'dominik.ilnicki@gmail.com,maks.pelcer1@gmail.com,schoollypl@gmail.com',
    subject: 'Pytanie schoolly!',
    text: `pytanie:${req.body.q}, na kiedy: ${req.body.time}`
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router;
