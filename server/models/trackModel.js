const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Album = require('./albumModel');

let TrackSchema = new Schema({
    title: { type: String, required: true },
    album: Album
});

module.exports = mongoose.model('Album', AlbumSchema);