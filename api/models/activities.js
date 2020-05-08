const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Treks
let activities = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    imageURL: {
        type: String
    },
    description:{
        type: String
    },
    essentials:{
        type: [String]
    }
}, {
    collection: 'Activities'
});

module.exports = mongoose.model('Activities', activities);