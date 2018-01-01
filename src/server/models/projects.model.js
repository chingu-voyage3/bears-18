import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema({
    owner: {
        type: 'String',
        trim: true,
        required: true
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
        type: 'String',
        trim: true
    },
    dateAdded: {
        type: 'String',
        default: Date.now,
        required: true
    },
    projectActive: {
        type: 'boolean',
        default: false
    }
});

export default mongoose.model('Project', projectSchema);