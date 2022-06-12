import { useState, useEffect } from 'react'; 
import RenderPage from './render-page';

export default function Attendance({first,last}:any) {

  first = first;
  last = last;

  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const [namestate, setNameState] = useState(name)
  const [coursestate, setCourseState] = useState(course)

  let db:any;
  db = [] || {name,course}
  db.push(namestate, coursestate) || []
  console.log(db);
  


  //handle and save database connetion here 
const handleSubmit = (ev:any) =>{
  let namestate = name
  let coursestate = course
  setNameState(namestate)
  setCourseState(coursestate)
  if(db[0]=="" || db[1]==""){
    return "null"
  }
}


const handleCourse =(event:any) =>{
  setCourse(event.target.value)
}

const handleName = (event:any) => {
  setName(event.target.value)
}


    return (
     <>
       <p style={{color:"white"}}>my name is {first}</p>
       <p style={{color:"white"}}>my course is {last}</p>
 
      
    
        <input onChange={handleName} />
        <input onChange={handleCourse} />
     
      <button onClick={handleSubmit}>
        click
      </button>
      <p style={{color:"white"}}>{db}</p>
     </>
    );
}
