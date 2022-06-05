import { useState, useEffect } from 'react'; 

export default function Attendance() {
  const [value, setValue] = useState("")

const handleSubmit = (ev:any) =>{

console.log(value);
}

const handleChange = (event:any) => {
  event.preventDefault();
  setValue(value)
}
useEffect(()=>{
  setValue(value)
})


    return (
     <div>
        <input onChange={handleChange} />
      <p>{value}</p>
      <button onClick={handleSubmit}>
        click
      </button>
     </div>
    );
}
