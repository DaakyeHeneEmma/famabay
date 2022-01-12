
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const express = require('express')
require('dotenv').config();
const uri = 'mongodb://localhost:33017/usercollection'
const PORT = process.env.PORT


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const dbConnect = mongoose.connect(uri, {
  useNewUrlParser:true,
  useUnifiedTopology:true
})

dbConnect.then(()=>{
  app.listen(PORT, ()=>{console.log(`listening at port ${PORT}`)})
}).catch(err=>console.log(`db not connected ${err.message}`))


app.use('/api', require('./routes/route'))