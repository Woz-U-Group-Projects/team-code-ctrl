const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const withAuth = require('../middleware');
const secret = 'gracie';


router.post('/login', function(req, res, next) {

  const { username, password } = req.body;

  User.findOne({username}, function(err, user) {
    if( err ) {
      console.error(err);
      res.status(500)
      .json({
        error: 'Internal monkey business, please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect username or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if(err) {
          res.status(500)
            .json({
              error: 'Internal monkey business, try again'
            });
        } else if (!same) {
          res.status(401)
          .json({ error: 'Incorrect username or password'});
        } else {
          //Issue token
          const payload = { username };
          const token = jwt.sign(payload,secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
          .sendStatus(200);
        }
      });
    }
  });
});


router.post('/register', function(req, res, next){

  const { fname, lname, email, username, password } = req.body;

  const user = new User({ fname, lname, email, username, password });

  user.save(function(err) {
    if(err) {
      res.status(500)
      .send("Error registering new user. Please try again.");
    } else {
      res.status(200).send("New user registered");
    }
  });
});

router.get('/dashboard', withAuth, function(req, res, next) {
  res.send('The dashboard');
});


module.exports = router;
