const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{

        Type: String
    }


});

module.exports = mongoose.model('Users', userSchema);