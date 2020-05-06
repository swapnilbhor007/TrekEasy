const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Treks
let Treks = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    location: {
        type: String
    },
    level: {
        type: String
    },
    imageURL: {
        type: String
    },
    rating: {
        type: Number
    },
    price: {
        type: Number
    },
    description:{
        type: String
    },
    attractions:{
        type: [String]
    },
    eventDate:{
        type: Date
    },
    activities: {
        type: [String]
    }
}, {
    collection: 'Events'
});

module.exports = mongoose.model('Treks', Treks);