import { useState, useEffect } from 'react'; 

export default function Attendance() {
  const [value, setValue] = useState("")
  const [state, newState] = useState(value)

const handleSubmit = (ev:any) =>{
  let state = value
// console.log(value)
newState(state)
}

const handleChange = (event:any) => {
setValue(event.target.value)
}


    return (
     <div>
       <p style={{color:"white"}}>my name is {state}</p>
        <input onChange={handleChange} />
     
      <button onClick={handleSubmit}>
        click
      </button>
     </div>
    );
}
