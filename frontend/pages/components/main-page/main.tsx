import type { NextPage } from 'next';
import styles from  '../../../styles/Main.module.css'
import Head from 'next/head';


const Main_Page:NextPage= () =>{
    return (
        <>
        <Head>
        <title>main</title>{' '} <br />
        <meta name="description" content="powered by famabay.inc" />
      </Head>
       <div className={styles.main_page_container}>
            <div className={styles.left_pane}></div>
            <div className={styles.centre_pane}></div>
            <div className={styles.right_pane}></div>
            
       </div>
        </>
    )
}

export default Main_Page 