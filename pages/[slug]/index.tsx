import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ProductDetail from 'components/Product/Detail';

import { getProductBySlug, Product } from 'db/product';

const Home: NextPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<Product | undefined | void>();

  useEffect(() => {
    if (query.slug !== undefined && !product) {
      getProductBySlug(query.slug as string).then(data => setProduct(data));
    }
  }, [product, query.slug, setProduct]);

  if (!product) return <>Loading</>;

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductDetail product={product} />
    </>
  );
};

export default Home;
