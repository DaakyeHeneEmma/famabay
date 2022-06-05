import type { NextPage } from 'next';
import styles from  '../../../styles/Main.module.css'
import Head from 'next/head';
import Attendance from './input'


const Main_Page:NextPage= () =>{
    return (
        <>
        <Head>
        <title>main</title>{' '} <br />
        <meta name="description" content="powered by famabay.inc" />
      </Head>
       <div className={styles.main_page_container}>
             <div className={styles.left_pane}>
          
             </div>
           <div className={styles.centre_pane}>
               ATTENDENCE SYSTEM
            </div>  
            <div>
            <hr />
            <Attendance />
            </div>
       </div>
        </>
    )
}

export default Main_Page 