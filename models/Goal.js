import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    name: {
        type: String
    },
    goalNumber: {
        type: Number
    }
});

const Goal = mongoose.model('Goal', GoalSchema)

export default Goal