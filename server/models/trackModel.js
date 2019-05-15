const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TrackSchema = new Schema({
//   albumId: {type: Number, required: true},
//   trackId: {type: Number, required: true},
  title: {type: String, required: true},
});

module.exports = mongoose.model('Album', AlbumSchema);
