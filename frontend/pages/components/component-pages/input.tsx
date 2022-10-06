import Head from "next/head"
import { useState, useEffect } from "react"
// import data from "../../api/content"
// import styles from '../../../styles/General.module.css'

const UserInput = ({name,course}:any) =>{
    return (
       <>
       <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="famabay" content="powered by famabay.inc" />
      </Head>
        <form action="/api/posts" method="post">
        <label htmlFor="name">Name:</label>
        <input
            typeof="text"
            name="name"
            id="name"
            placeholder={"Your Name"}
            autoComplete="name" required />
    

        <label htmlFor="course">Course:</label>
      <input 
            placeholder={"Course name"}
            name="course"
            id="course"
            type="text" 
            autoComplete="course" required />

        <button type="submit">Check Details</button>
        </form>
     </>
    )
}

export default UserInput 


