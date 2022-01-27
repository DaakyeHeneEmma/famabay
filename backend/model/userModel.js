const mongoose = require('mongoose')

//initializing the schema object
const Schema = mongoose.Schema;

//model for saving user data
const UserDB = new Schema({
    name : String,
    age:Number,
    course:String,
    password:String
})


//exporting user model
const UserSchema = mongoose.model('UserSchema', UserDB)
module.exports = UserSchema;