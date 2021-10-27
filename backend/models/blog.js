const mongoose = require('mongoose');
const validator = require('validator');
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Each article must have a title']
    },
    img_banner: String,
    slung: {
        type: String,
        required: [true, 'Provide the slung and try again'],
    },
    author: {
        type: String,
        required: true,
        default: 'bot'
    },
    content: {
        type: String,
        required: [true, 'The body of an article can not be empty!']
    },
    comments: [
        { 
            email: {
                type: String,
                validate:[validator.isEmail, 'Please enter a valid email address']
            },
            name: {
                type: String,
                required: [true, "We need to know who the comment belongs to"]
            },
            body: {
                type: String,
                required: [true, "The body of the comment can not be empty"]
            }, 
            commented_at: {
                type: Date,
                default: Date.now
            }
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
