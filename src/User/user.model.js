var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,

    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema);