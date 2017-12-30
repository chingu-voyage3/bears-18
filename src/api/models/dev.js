const mongoose = require('mongoose');
const config = require('./../config');

mongoose.Promise = global.Promise;

mongoose.connect(config.DATABASE, {
    useMongoClient: true,
});

const LocationSchema = new mongoose.Schema({    
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

const DevSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        trim: true,
    },
    image: {
            type: 'String',
            trim: true
        },
    skills: {
        type: Array,
        required: true
    },
    location: LocationSchema,
    created_at: {
        type: Date,
        default: Date.now
    }
});

var Dev = mongoose.model('dev', DevSchema);

module.exports = Dev;