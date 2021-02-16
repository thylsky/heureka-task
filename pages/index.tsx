import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import intl from 'react-intl-universal';

import ProductList from 'components/Product/List';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{intl.get('LIST_OF_PRODUCTS')} | Heureka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductList />
    </>
  );
};

export default Home;
