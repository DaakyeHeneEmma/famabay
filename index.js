
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url = 'mongodb://localhost/classLists'

const PORT = process.env.PORT || 2000;
// app.use(express.json)

const db = mongoose.connection
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});
db.on('open',()=>{
    console.log('mongoose server connected');
})
.on('error', (err)=>{
    console.log('error coming from database', err);
})


 
app.get('/routes', require('./routes/people'));

app.listen(PORT, ()=>{
    console.table([
        {path: `http://127.0.0.1`, port: `${PORT}`,index: 01}
    ])
})