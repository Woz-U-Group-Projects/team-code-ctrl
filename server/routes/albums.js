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

router.patch('/edit/:id', function(req, res, next) {
  Album.findOne({_id: req.params.id}).then(function( album) {
    album.albumName = req.body.albumName;
    album.numberOfTracks = req.body.numberOfTracks;
    album.save(function(err) {
      if(err) {
        return next(err).status(500).json('No good');
      }
      res.status(201).json({message: 'Album updated'});
    });
  });
});

router.get('/:id', function(req, res, next) {
  res.send('Get an album');
});

router.delete('/:id', function(req, res, next) {
  res.send('Delete an album');
});

module.exports = router;
