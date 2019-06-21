const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    fullname:{
        type: String
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)