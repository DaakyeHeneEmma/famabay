import { useState } from "react";

function AllUsers(){
    const [content, SetContent] = useState([])
    const contentData = async () =>{
     const res = await fetch("api/data")
     const newData = await res.json()
     console.log(newData);
     
     SetContent(newData)
    }
     return(
         <div>
              <button onClick={contentData}>
     Get Content:{content.map((e:any)=>e.name)}
 </button>
         </div>
     )
     
 }

 export default AllUsers;