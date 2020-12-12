
const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.Promise = global.Promise;

//connections
const url = 'mongodb://localhost:27017/classLists'
const PORT = process.env.PORT || 2000;


// testing before pass
before('making connection to db before test', (done)=>{
    const db = mongoose.connection
    mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});
    db.once('open',()=>{
        done();
        // console.log('mongoose server connected');
    })
    .on('error', (err)=>{
        console.log('error coming from database', err);
    })
})



//routes
 
// app.get('/routes', require('./class'));

app.listen(PORT, ()=>{
    console.table([
        {path: `http://127.0.0.1`, port: `${PORT}`,index: 01}
    ])
})