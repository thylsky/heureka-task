import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import ProductAdd from 'components/Product/Add';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>New Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductAdd />
    </>
  );
};

export default Home;
