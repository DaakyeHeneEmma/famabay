import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Famabay</title>
        <meta name="description" content="powered by famabay.inc" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          
        </h1>

        <p className={styles.description}>
             Famabay{' '}
        </p>
       
      </main>

     
    </div>
  )
}

export default Home
