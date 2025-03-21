const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now
    }
});


// Export the model
module.exports = mongoose.model('Post', PostSchema);
