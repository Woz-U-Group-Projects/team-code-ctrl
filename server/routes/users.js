const express = require('express');
const router = express.Router();
const User = require('../models/userModel');


router.get('/login', function(req, res, next) {
  res.json([
    {
      id: 1,
      email: 'joe@blow.com'
    },
    {
      id: 2,
      email: 'idiot@aol.com'
    }
  ]);
});

/* GET route that retrieves a list of users */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if(err) return next(err);
    res.send(user);
  });
});

router.post('/register', function(req, res, next){
  let user = new User(
    {
      email: req.body.email,
      username: req.body.username
    }
  );
  user.save(function(err) {
    if(err) {
      return next(err);
    }
    res.send('User Registered Successfully');
  })
});

module.exports = router;
