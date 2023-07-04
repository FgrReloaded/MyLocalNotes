const mongoose = require('mongoose');
const { Schema } = mongoose;

// let date = new Date();

const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
    },
    date: {
        type: Date
    }
});
mongoose.models = {}
module.exports = mongoose.model('notes', NotesSchema)