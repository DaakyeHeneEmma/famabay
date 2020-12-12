const mongoose = require('mongoose');

const peopleShema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    ownership : {
        type : Boolean
    }
});

module.exports = mongoose.model('peoples', peopleShema)