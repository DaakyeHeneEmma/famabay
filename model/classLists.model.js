
const mongoose = require('mongoose')

const classSchema = mongoose.Schema({
    name : String,
    class: String,
    age : Number,
    staff : Boolean
})

const classLists = mongoose.model('classlists', classSchema)

module.exports = classLists