import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
       {/* <Head> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="famabay" content="powered by famabay.inc" />
      {/* </Head> */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
