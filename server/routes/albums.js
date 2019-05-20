const express = require('express');
const router = express.Router();
const Album = require('../models/albumModel');

router.post('/create', function(req, res, next) {


  let album = new Album (
    {
      albumName:  req.body.name,
      numberOfTracks: req.body.tracks,
      user: req.body.user
    }
  )

  album.save(function(err) {
    if(err) {
      return next(err)
    }
    res.send('Album created');
  })


});

router.get('/', function(req, res, next) {

  Album.find({})
  .populate('user', 'username -_id')
    .exec(function(err, albums) {
      res.send(albums)
    });

});

module.exports = router;

