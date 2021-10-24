const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Each article must have a title']
    },
    slung: {
        type: String,
        required: [true, 'Provide the slung and try again'],
    },
    author: {
        type: String,
        required: false //optional
    },
    body: {
        type: String,
        required: [true, 'The body of an article can not be empty!']
    },
    comments: [
        { 
            body: String, 
            commented_at: Date
        }
    ],
    published_at: { 
        type: Date, 
        default: Date.now 
    },
    article_status: {
        type: String, 
        default: 'published'
    }
});

module.exports = mongoose.model('Blog', blogSchema);
