const express = require('express')
const assert = require('assert')
const classLists = require('../model/classLists.model')

const students = express();

before('getting new students', ()=>{

    it('registering new student', done => {
      const newStudent = new classLists({
          name : "Briget Opoku",
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
 

describe('read test', ()=>{
    let students;
    beforeEach('create student', (done)=>{
        students = classLists.find({
            name : "Eyinam peace"
        });
        students.save().then(()=>{
            done();
        })
    it('reading the student', (done)=>{
        classLists.find({
            name : "Eyinam peace"
        }).then((pupil)=>{
            assert(students._id.toString() === pupil[0]._id.toString());
            done();
        })
    })
    })
})


module.exports = students;
