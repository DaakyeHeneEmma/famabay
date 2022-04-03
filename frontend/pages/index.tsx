import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Homepage from './components/homepage'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>main</title>{' '} <br />
        <meta name="description" content="powered by famabay.inc" />
      </Head>
      <main>style
      </main>
    </div> 
  )
}

export default Home
