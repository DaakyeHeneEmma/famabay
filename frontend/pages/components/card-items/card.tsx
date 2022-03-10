import React, { ReactNode } from 'react';
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import useSwr from 'swr'
import { createContext, useContext } from "react";
import Card_Index from '../card-items/index';

const fetcher = (url:any) => fetch(url).then((res) => res.json())


const Store = createContext('');

export const useStore = () => useContext(Store);

type Props = {
  title?:string;
}; 

const Card = ({
  title = 'famabay cards',
}: Props): JSX.Element =>{

  const { data, error } = useSwr('/api/hello', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>
  return(
    <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Famabay Items</p>
   <div className={styles.card_item_m2}>
   <Card_Index />
     </div>
          
   
    
   </>
  )
} 
  

export default Card;