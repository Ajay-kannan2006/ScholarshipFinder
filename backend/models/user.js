const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_name: String,
    email: String,
    password: String,
    gender: {
        type: String,
        enum: ['male', 'female', 'trans'],
    },
    studies: {
        type: String,
        enum: ['below 10th', 'below 12th', 'B.E', 'B.Tech', 'B.com', 'M.E'],
    },
    caste: {
        type: String,
        enum: ['BC', 'MBC', 'OC', 'SC/ST'],
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;