const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserDB = new Schema({
    name : String,
    age:Number,
    course:String
})

const UserSchema = mongoose.model('UserSchema', UserDB)
module.exports = UserSchema;