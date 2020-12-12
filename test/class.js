const express = require('express')
const assert = require('assert')
const classLists = require('../model/classLists.model')

const students = express();

before('getting new students', ()=>{

    it('registering new student', done => {
      const newStudent = new classLists({
          name : "Briget Opoku Ware",
          class : "A2 JHS 2",
          age : 16,
          staff : false
      })
      newStudent.save().then(()=>{
          assert(!newStudent.isNew);
      })
      done();
    })
})




module.exports = students;
