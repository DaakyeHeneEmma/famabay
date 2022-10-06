
import { useState, useEffect } from "react"
let date = new Date()

export default function Time():any {
 
   
let [timer, setTimer] = useState(new Date())

useEffect(() => {
    setInterval(() =>setTimer(new Date()),1000);
  });

    return (
     <>
      <div style={{color:"white"}}>
      <p>
        {' '}
        {
            timer.toLocaleString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })
        } -|-
         {' '}
        {
            timer.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        }
      </p>
      </div>
     </>
    );
}
