const express = require('express');
const { assert } = require('assert');
const peopleShema = require('../model/people.model')

const app = express();

app.use(express.json)
app.use(express.urlencoded({'content' : true}))

describe('stores data', ()=>{

        it('storing the data', (done)=>{
            const user = new peopleShema({
                name: "express tuts",
                age : 34,
                ownership : true
            })
            user.save().then(()=>{
                assert(!user.isNew);l
            });
            done();
        })
})


module.exports = app;