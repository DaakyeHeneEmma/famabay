import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Navbar from './components/layouts/navbar'
import Layouts from './components/layouts/layout'

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
      </main>
    </div> 
  )
}

export default Home



// import type { ReactElement } from 'react'
// import Layout from './components/layouts/layout'

// export default function Page() {
//   return {
//     /** Your content */
//   }
// }


// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     // <Layout>
//     {page}
//     // </Layout>
//   )
// }
