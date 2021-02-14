import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import ProductList from 'components/Product/List';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>List of Products | Heureka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductList />
    </>
  );
};

export default Home;
