const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Schedules

let Todo = new Schema({
    time: { type: String },
    activity: { type: String }
})

let Day = new Schema({
    id: { type: Number },
    todo: { type: [Todo] }
})

let Schedules = new Schema({
    id: { type: Number },
    inclusions: [string],
    exclusions: [string],
    schedule: { type: [Day]  }
}, {
    collection: 'Schedules'
});

module.exports = mongoose.model('Schedules', Schedules);