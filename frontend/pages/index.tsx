import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing_Page from './components/landing-page'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>main</title>{' '} <br />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="famabay" content="powered by famabay.inc" />
      </Head>
      <main>
        <div className='mainPage'>
        <Landing_Page />
        </div>
      </main>
    </div> 
  )
}

export default Home