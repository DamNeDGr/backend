const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    ipAddress: { type: String, required: true}
});


// const User = mongoose.model('User', userSchema);


module.exports = mongoose.model('User', userSchema);

