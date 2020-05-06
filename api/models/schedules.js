const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Schedules

let Schedule = new Schema({
    time: { type: String },
    activity: { type: String }
})

let Schedules = new Schema({
    id: {
        type: Number
    },
    schedule: {
        type: [Schedule]
    }
}, {
    collection: 'Schedules'
});

module.exports = mongoose.model('Schedules', Schedules);