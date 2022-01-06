const {gql} = require('apollo-server')

const typeDef = gql`
  type Query{
    student: [Student]
  }

  type Student{
    name:String
    age:Int
    course:[Course]
    level:String
    school:[School]
  }

  type School{
    name:String
    location:String
    grade:gradeSchool
  }

  enum gradeSchool{
      A
      B
      C
  }

  type Course{
    coreSub:String
    elective:String
    others:String
  }
`

module.exports = typeDef;