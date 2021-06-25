import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"/>
          <link rel="icon" href="/favicon-16x16.png" />
        </Head>
        <body className={'font-primary text-base'}>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument