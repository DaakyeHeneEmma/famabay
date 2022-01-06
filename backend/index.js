
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const express = require('express')
const uri = 'mongodb://localhost:33017/usercollection'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const dbConnect = mongoose.connect(uri, {
  useNewUrlParser:true,
  useUnifiedTopology:true
})

dbConnect.then(()=>{
  app.listen(5000, ()=>{console.log("listening at port 5000")})
}).catch(err=>console.log(`db not connected ${err.message}`))


app.use('/api', require('./routes/route'))