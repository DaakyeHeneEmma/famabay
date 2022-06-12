import { useState } from "react"
import PropPage from "./propPage"

const RenderPage = ({firstname, lastname}:any) =>{

//manage the state
    let [FirstName, setFirstName] = useState('')
    let [LastName, setLastName] = useState('')
    let [firstupdate, setFirstUpdate] = useState('')
    let [secondupdate, setSecondUpdate] = useState('')

    //to be stored in database
    firstname = firstupdate
    lastname = secondupdate

    //handle first input
    const handleFirstName=(event:any)=>{
        event.preventDefault();
   setFirstName(event.target.value);
}

     //handle second input
    const handleLastName=(event:any)=>{
        event.preventDefault();
        setLastName(event.target.value);
    }

    //handles the click event
    const handleClick = (event:any) =>{
        firstupdate = FirstName
        secondupdate = LastName
    setFirstUpdate(firstupdate)
    setSecondUpdate(secondupdate)
    // console.log(firstname, lastname);
}



    return (
        <>
   Name      <input onChange={handleFirstName} />
   <hr />
   Course<input onChange={handleLastName} />
   <hr />
   <button onClick={handleClick}>Click</button>
   <hr />
   <hr />
   <hr />
   <PropPage firstname={firstupdate} lastname={secondupdate}/>
        </>
    )
}

export default RenderPage 