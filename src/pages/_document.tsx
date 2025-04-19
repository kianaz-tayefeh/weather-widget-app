import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='description' content='Weather widget app showing current weather' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
