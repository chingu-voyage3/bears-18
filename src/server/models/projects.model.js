import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema({
    owner: {
        type: Schema.ObjectId,
        ref: 'Owner'
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
        ref: 'Dev'
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