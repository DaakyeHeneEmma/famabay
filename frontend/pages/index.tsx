import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import logo from "../public/logo.png"
import Homepage from './components/homepage'
// import Layouts from './components/layouts/layout'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Famabay</title>{' '} <br />
        <meta name="description" content="powered by famabay.inc" />
      </Head>

      <main>
        <h1 className={styles.title}> </h1>
          <hr />
        <Homepage />
        
      </main>
    </div> 
  )
}

export default Home
