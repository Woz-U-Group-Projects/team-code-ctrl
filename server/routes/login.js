const express = require('express');
const router = express.Router();


/* This will be the login user function. */
router.get('/', function(req, res, next) {
  res.send('hello from the login function');
});

module.exports = router;
