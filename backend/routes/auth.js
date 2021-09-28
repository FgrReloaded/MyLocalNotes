const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_TOKEN = "Hello Just checking"

router.post('/createuser',[
    body('username', 'This Username is already in use').isLength({min: 3}),
    body('name', 'Enter a valid Name').isLength({min:3}),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must contain 8 characters').isLength({min:8}),
], async (req, res) => {
  // if error occurs give bad request with error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check for already existed user with given email
    try {
    let user = await User.findOne({email: req.body.email});
    if (user){
      return res.status(400).json({error: "This email has already existed. Try Login"})
    }

    // code for securing password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    //  create a new user
    user = await User.create({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
      // .then(user => res.json(user)).catch(err=> {console.log(err)
      //   res.json({error: 'enter real', message: err.message})})
      const data={
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_TOKEN)

      // res.json(user)
      res.json({authToken})
      // catch the error and send bad request with message.
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error Occurs") 
    }
})
module.exports = router