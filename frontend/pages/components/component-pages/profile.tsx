
 const PropPage = ({firstname,lastname }:any) =>{
let style = {
    color:"white",
    "fontWeight":"bold",
     "fontSize":"18px",
     "padding": "-20px",
     
}
    // firstname = firstname;
    //  lastname = lastname;
    return (
        <>
       <div style={style}>USER DETAILS
       <div style={style}>Student Name: {firstname}</div>
       {'   '}
       <div style={style}>Student Course: {lastname}</div>
       </div>
        </>
    )
}

export default PropPage