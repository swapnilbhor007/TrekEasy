const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Reviews
let Reviews = new Schema({
    id: {
        type: Number
    },
    eventId: {
        type: Number
    },
    userId: {
        type: Number
    },
    name: {
        type: String
    },
    comment: {
        type: String
    },
    rating: {
        type: Number
    }
}, {
    collection: 'Reviews'
});

module.exports = mongoose.model('Reviews', Reviews);