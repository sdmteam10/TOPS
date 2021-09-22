import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    name: {
        type: String
    },
    goalNumber: {
        type: Number
    },
    goalActivities: {
        type: Array
    }
});

const Goal = mongoose.model('Goal', GoalSchema)

export default Goal