const mongoose = require('mongoose');

const PricingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    
    gallonRequested: {
        type: String,
        required: true
    },
    deliveryAddress1: {
        type: String,
        required: true
    },
    deliveryAddress2: {
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
    },
    date: {
        type: Date,
        required: true
    },
    dateNow: {
        type: Date,
        default: Date.now
    }
})

module.exports = Quote = mongoose.model('pricing', PricingSchema)