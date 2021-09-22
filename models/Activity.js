import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    name: {
        type: String
    },
    //id
    activityNumber: {
        type: Number
    }
    
});

const Activity = mongoose.model('Activity', ActivitySchema)

export default Activity