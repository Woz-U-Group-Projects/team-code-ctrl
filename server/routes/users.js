const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

router.post('/login', function(req, res, next) {

  User.findOne({username: req.body.username}, function(err, user) {
    bcrypt.compare(req.body.password, user.password, function(err, bres) {
      if(bres){
        res.send({redirect: bres});
      } else {
        res.send({redirect: bres});
      }
    });
  });

<<<<<<< HEAD
});
=======
// router.get('/login', function(req, res, next) {
//   res.json([
//     {
//       id: 1,
//       email: "joe@blow.com"
//     },
//     {
//       id: 2,
//       email: "idiot@aol.com"
//     }
//   ]);
// });
>>>>>>> 9978d48d0dcd355c6bad0d1b745008a2b1890fe4

/* GET route that retrieves a list of users */
router.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        if (err) return next(err);
        res.json(user);
    });
});

<<<<<<< HEAD

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

=======
router.post('/register', function(req, res, next) {
    let user = new User({
        email: req.body.email,
        username: req.body.username
    });
    user.save(function(err) {
        if (err) {
            return next(err);
        }
        res.send('User Registered Successfully');
    })
>>>>>>> 9978d48d0dcd355c6bad0d1b745008a2b1890fe4
});

module.exports = router;