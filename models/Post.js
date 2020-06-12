const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PostSchema = mongoose.Schema({
    discordId: {
        type: String,
        required: true
    },
    playerId: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

PostSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Post', PostSchema)