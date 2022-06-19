import { format } from "path"
import { useState, useEffect,useMemo, useRef } from "react"
let date = new Date()

export default function Time() {
    // let month = date.getMonth() +1
    // let year = date.getFullYear()
    // let Hour = date.getHours()
    // let Min = date.getMinutes()
    // let Sec = date.getSeconds()
    // let day = date.getDate()
   
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
        }
      </p>
      <p>
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
