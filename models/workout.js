const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        required: true
      },
    name: {
        type: String,
        required: true
      },
    duration: {
        type: Number,
        required: true
      },
    weight: {
        type: Number,
        required: false
      },
    reps: {
        type: Number,
        required: false
      },
    sets: {
        type: Number,
        required: false
      },
    day: {
        type: Date,
        default: Date.now()
    }
});

const Workout = mongoose.model('workout', WorkoutSchema);


module.exports = Workout;