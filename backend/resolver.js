const students = require('./database/students')
const school = require('./database/school')
const course = require('./database/courses')


const resolver= {
    Query: {
        student: ()=> students,
        // school:()=>school,
        // course:()=>course
    },
};


module.exports = resolver;