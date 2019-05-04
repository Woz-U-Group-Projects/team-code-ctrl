var express = require('express');
var router = express.Router();


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
router.get('/users', function(req, res, next) {
  res.send('hello from the users function');
});

module.exports = router;
