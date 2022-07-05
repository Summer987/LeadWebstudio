import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";
import {Header} from "../src/components/Header";
import Container from "../src/components/Container";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Lead</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
