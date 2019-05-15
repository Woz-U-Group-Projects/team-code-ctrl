const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AlbumSchema = new Schema({
  // albumId: {type: Number, required: true},
  // trackId: {type: Number, required: true},
  albumName: {type: String, required: true},
  artist: {type: String, required: true},
  numberOfTracks: {type: Number, required: true},
});

module.exports = mongoose.model('Album', AlbumSchema);
