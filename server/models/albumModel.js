const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require ('./userModel');


let AlbumSchema = new Schema({
  albumName: {type: String, required: true},
  numberOfTracks: {type: Number, required: true},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Album', AlbumSchema);
