import React, { useEffect, useState } from 'react';
import { QuerySnapshot } from '@firebase/firestore-types';

import { listenToProducts, Product } from 'db/product';
import Container from 'components/UI/Container';

import ProductCard from './ProductCard';
import { Wrapper } from './ProductList.styles';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    return listenToProducts({
      next: (querySnapshot: QuerySnapshot) => {
        const updatedProducts = querySnapshot.docs.map(docSnapshot =>
          docSnapshot.data()
        );
        setProducts(updatedProducts as Product[]);
      },
      error: () => setError('products-list-get-fail'),
    });
  }, [setProducts]);

  return (
    <Container>
      <Wrapper>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {products.map((product, i: number) => (
          <ProductCard key={i} product={product} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ProductList;
