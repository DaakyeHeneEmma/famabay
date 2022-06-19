import type { NextPage } from 'next';
import styles from  '../../../styles/Main.module.css'
import Head from 'next/head';
import Time from './time';
import RenderPage from './render-page';


const Main_Page:NextPage= (first,last) =>{
    console.log(first, last)
    return (
        <>
        <Head>
        <title>main</title>{' '} <br />
        <meta name="description" content="powered by famabay.inc" />
      </Head>
       <div className={styles.main_page_container}>
             <div className={styles.left_pane}>
             <Time />
             </div>
           <div className={styles.centre_pane}>
               ATTENDENCE SYSTEM
            </div> 
            <div>
          
            <RenderPage />
            </div>
       </div>
        </>
    )
}

export default Main_Page 