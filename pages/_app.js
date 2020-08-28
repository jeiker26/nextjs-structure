import Head from 'next/head';
import PropTypes from 'prop-types';
import { Footer } from '../components/Footer';
import '../styles/globals.scss';
import '../styles/tailwind.scss';

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

export default MyApp;
