import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Form from './form'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Famabay</title>
        <meta name="description" content="powered by famabay.inc" />
      </Head>

      <main>
        <h1 className={styles.title}> </h1>
           <p >Famabay{' '}</p>
           <Form />
      </main>

     
    </div>
  )
}

export default Home
