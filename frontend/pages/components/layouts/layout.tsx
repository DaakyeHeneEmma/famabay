import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css'

type Props = {
  children: ReactNode;
  title?: string;
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
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              {/* <img src="/logo.png" /> */}
            </a>
          </Link>
          <ol>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ol>
        </div>
      </header><br />
      {children}
    </div>
  </>
);

export default Layout;