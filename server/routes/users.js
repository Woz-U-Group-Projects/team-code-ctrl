const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

router.post('/login', function(req, res, next) {

  User.findOne({username: req.body.username}, function(err, user) {
    if(user) {
      bcrypt.compare(req.body.password, user.password, function() {
        res.send({loggedIn: true});
      }); 
    } else {
      console.error('oops');
    }
  });
});

/* GET route that retrieves a list of users */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if(err) return next(err);
    res.json(user);
  });
});


router.post('/register', function(req, res, next){

  let password = bcrypt.hashSync(req.body.password, 10);

  let user = new User(
    {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      username: req.body.username,
      password: password
    }
  )

  user.save(function(err) {
    if(err) {
      return next(err);
    }
    res.send('User Registered Successfully');
  })

});

module.exports = router;
