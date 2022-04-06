import '../styles/globals.scss'
import '../styles/reset.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import Auth from '../components/Auth';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>
        <Auth></Auth>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
};

export default App
