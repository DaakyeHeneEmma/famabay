import type { NextPage } from 'next';
import styles from '../../../styles/Home.module.css'


const Landing_Page:NextPage= () =>{
    return (
        <>
       <div className={styles.landing_page_container}>
            <div className={styles.landing_page_title}>
             Become More
            </div>
            <div className={styles.landing_page_keyword}>
             `Here I am sharing 40 best motivational and 
             inspirational quotes from the web that has motivated 
             me to become a developer. These quotes are very inspiring 
             and I felt these will motivate other programmers too and help 
             to avoid common pitfalls in development and hence I thought 
             sharing these quotes with everybody.None of these quotes are
              mine and please forgive if I have missed to mention the 
              right source.`
            </div>
       </div>
        </>
    )
}

export default Landing_Page 