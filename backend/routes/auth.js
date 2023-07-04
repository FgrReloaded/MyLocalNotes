const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "fgrreloadedprogrammer@gmail.com",
    pass: "ndzxvamnxlkdoezo"
  }
});

const JWT_TOKEN = "THIS IS INOTEBOOK APP"
//ROUTE 1: Create a new user
router.post('/createuser', [
  body('name', 'Enter a valid Name').isLength({ min: 3 }),
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password must contain 8 characters').isLength({ min: 8 }),
], async (req, res) => {
  // if error occurs give bad request with error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // check for already existed user with given email
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "This email has already existed. Try Login" })
    }
    res.json(req.body)

    // code for securing password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    //  create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })
    
    // .then(user => res.json(user)).catch(err=> {console.log(err)
    //   res.json({error: 'enter real', message: err.message})})
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_TOKEN)

    res.json({ authToken })
    // catch the error and send bad request with message.
  } catch (error) {
    console.error(error.message);
    res.status(500).send({err: error.message})
  }
})


//ROUTE 2: Authenticate Existing a user
router.post('/login', [
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Please enter correct password').exists(),
], async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false;
      return res.status(400).json({ error: "Email or password you enter is incorrect." })
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ error: "Email or password you enter is incorrect." })
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_TOKEN)
    success = true;
    // res.json(user)
    res.json({ success, authToken })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured")
  }

})


// ROUTE 3: To show data of user logged in.
router.post('/userdata', fetchuser, async (req, res) => {

  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured")
  }
})

// ROUTE 4: To manage forgot password and send email to user with random digit generated in frontend

router.post('/forgotpassword', async (req, res) => {
  const { email, token } = req.body;

  try {
    let user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(400).json({ success: false, msg: "Email you enter is incorrect." })
    }


    const mailOptions = {
      from: 'fgrreloadedprogrammer@gmail.com',
      to: email,
      subject: 'Reset Password Process for MyLocalNotes Web App',
      text: `Please enter the below code to reset your password 
Code: ${token}`
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(400).json({ success: false, msg: "Email you enter is incorrect." })
      }
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ success: true, msg: "Email sent successfully." })
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured")
  }
})

// ROUTE 5: To manage reset password 
router.post('/resetpassword', [body('password', 'Password must contain 8 characters').isLength({ min: 8 })], async (req, res) => {
  const { email, password } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, msg: "Password must contain 8 characters" });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, msg: "Email you enter is incorrect." })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);
    user.password = secPass;
    await user.save();
    return res.status(200).json({ success: true, msg: "Password reset successfully." })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured")
  }

})

module.exports = router
