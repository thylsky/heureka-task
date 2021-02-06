import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Header from 'components/UI/Header';
import ProductList from 'components/Product/List';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Heureka Testing Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ProductList />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
