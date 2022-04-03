import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/layouts/layout'
import Main_Page from './components/main-page/main'


function MyApp({ Component, pageProps }: AppProps) {
  let title = 'Famabay'
  if (title='main') return <Main_Page />
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
 }

export default MyApp 


// import type { ReactElement, ReactNode } from 'react'
// import type { NextPage } from 'next'
// import type { AppProps } from 'next/app'
// import { CacheProvider } from '@emotion/react'

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode
// }

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }

// export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? ((page) => page)

//   return getLayout(
//   <CacheProvider>
//  <Component {...pageProps} />
//   </CacheProvider>
//  )
// }