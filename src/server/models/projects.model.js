import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema({
    client: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    projectName: {
        type: 'String',
        trim: true,
        required: true
    },
    projectDesc: {
        type: 'String',
        trim: true,
        required: true
    },
    skillsRequired: {
        type: ['String']
    },
    developer: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    dateAdded: {
        type: 'String',
        default: Date.now,
        required: true
    },
    projectStatus: {
        type: 'String',
        enum: ['OPEN', 'IN PROGRESS', 'IDLE', 'DONE', 'CANCELED']
    }
});

export default mongoose.model('Project', projectSchema);