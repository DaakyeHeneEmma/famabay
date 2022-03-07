import React, { ReactNode } from 'react';
import Head from 'next/head'
// import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
// import Image from 'next/image'
// import useSWR from 'swr'
 

// const fetcher = () => fetch('api/hello').then(()=> console.log(fetcher));

export async function getServerSideProps(){ 
  const data = await fetch('api/hello')
  const res = await data.json();
  return {
    props: {
      res
    }
  }
}
console.log('finished');



type Props = {
  title?:string;
}; 

const Card = ({
  title = 'famabay cards',
}: Props): JSX.Element =>{
  // const { data, error } = useSWR('/api/people', fetcher)


  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  return(
    <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.card}>
    <p>some text</p>
      {/* fetch data */}
    <ul>
      {res.map((el:any)=>{ 
        <p>{el.name}</p>
      })
      }
    </ul> 

    </div>
    
   </>
  )
} 
  

export default Card;