const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    gallonRequested: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalAmountDue: {
        type: Number,
        required: true
    }
})

module.exports = Quote = mongoose.model('quote', QuoteSchema)