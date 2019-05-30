const express = require('express');
const router = express.Router();
const Album = require('../models/albumModel');

router.post('/', function(req, res, next) {
  let album = new Album (
    {
      albumName: req.body.albumName,
      numberOfTracks: req.body.tracks,
      userId: req.body.userId
    }
  )

  album.save(function(err) {
    if(err) {
      return next(err);
    }
    res.status(201).json({message: 'Album created'});
  })

});

router.get('/', function(req, res, next) {
  Album.find({}).then(function (albums) {
    res.send(albums);
  });
});

router.put('/:id', function(req, res, next) {
  res.send('Edit an album');
});

router.get('/:id', function(req, res, next) {
  res.send('Get an album');
});

router.delete('/:id', function(req, res, next) {
  res.send('Delete an album');
});

module.exports = router;
