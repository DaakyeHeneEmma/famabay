import { NextPage } from 'next'
import Head from 'next/head'


import styles from '../styles/Home.module.css'

const Form: NextPage = (result) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Form</title>
        <meta name="description" content="powered by famabay.inc" />
      </Head>
      <form onSubmit={registerUser}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" autoComplete="name" required />
      <br />
      <br />
      <label htmlFor="age">Age</label>
      <input id="age" type="text" autoComplete="age" required />
      <br />
      <br />
      <label htmlFor="course">Course</label>
      <input id="course" type="text" autoComplete="course" required />
      <br />
      <br />
      <button type="submit">Register</button>
    </form>

    
    
    </div>
  )
}

const registerUser = async (event:any) => {
  event.preventDefault()

  const data = await fetch('api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: event.target.name.value,
      age: event.target.age.value,
      course: event.target.course.value
    }),
  })

  const result = await data.json()
  console.log(result);
  

  

}

export default Form
