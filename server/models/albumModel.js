const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const User = require('./userModel');


let AlbumSchema = new Schema({
    albumName: { type: String, required: true },
    numberOfTracks: { type: Number, required: true },
    userId: {type: String}
});

module.exports = mongoose.model('Album', AlbumSchema);
