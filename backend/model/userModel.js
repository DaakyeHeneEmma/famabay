const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const UserDB = new Schema({
    name : String,
    age:Number,
    course:String,
    password:String
})

//hashing the password before saving the data
UserDB.pre('save', (next)=>{
    this.password = bcrypt.hashSync(this.password, 10)
    console.log('password hashed');
    next();
})

const UserSchema = mongoose.model('UserSchema', UserDB)
module.exports = UserSchema;