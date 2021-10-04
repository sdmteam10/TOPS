import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    name: {
        type: String
    },
    //id
    activityNumber: {
        type: Number
    },
    //very high or high
    contribution: {
        type: String
    }
    
});

const Activity = mongoose.model('Activity', ActivitySchema)

export default Activity