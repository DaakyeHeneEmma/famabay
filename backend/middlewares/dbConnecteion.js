const connection = () =>{
    const mongoose = require('mongoose')
    mongoose.Promise = global.Promise;
    return mongoose
}

module.exports = connection();