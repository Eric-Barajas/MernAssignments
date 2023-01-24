const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
    },
    lastName: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [2, '{PATH} must be at least {MINLENGTH} characters.']
    }
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);