import React, { ReactNode } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import logo from '../../../public/logo.png'
import Image from 'next/image'
import Footer from './footer'


type Props = {
  children: ReactNode;
  title?:string;
}; 

const Layout = ({
    children,
  title = 'famabay layout',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.layout}>
      <header>
            <Image
            alt='logo'
            src={logo}
            width={100}
            height={100}
             /> 
        
          <ol>
               <li> <Link href="/"><a>Home</a></Link> </li>
              <li> <Link href="/about"><a>About</a></Link> </li>
              <li> <Link href="/contact"><a>Contact</a></Link> </li>
          </ol>
      </header><br /><br /><br />
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;