import { useState } from "react";

 const PropPage = ({firstname,lastname }:any) =>{

    // firstname = firstname;
    //  lastname = lastname;
    return (
        <>
       <p style={{color:"white"}}>USER DETAILS</p>
       <hr />
       <hr />
       <p style={{color:"white"}}>Student Name {firstname}</p>
       {'   '}
       <p style={{color:"white"}}>Student Course {lastname}</p>
        </>
    )
}

export default PropPage