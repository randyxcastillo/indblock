import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>INDBLOCK</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/180x180.png" />
        <link rel="icon" sizes="32x32" href="/32x32.png" />
        <link rel="icon" sizes="16x16" href="/16x16.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;