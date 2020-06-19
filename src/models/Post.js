const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const findOrCreate = require('mongoose-find-or-create')

const PostSchema = mongoose.Schema({
    discordId: {
        type: String,
        required: true
    },
    playerId: {
        type: String,
        required: false,
        unique: true,
        sparse: true,
    },
    expirationDate: {
        type: Date,
        default: Date.now()
    },
    trialUsed: {
        type: Boolean,
        default: false
    }
});

PostSchema.plugin(uniqueValidator)
PostSchema.plugin(findOrCreate)


module.exports = mongoose.model('Post', PostSchema)