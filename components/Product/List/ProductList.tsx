import React, { useEffect, useState } from 'react';
import { QuerySnapshot } from '@firebase/firestore-types';
import intl from 'react-intl-universal';

import Container from 'components/UI/Container';
import ErrorMessage from 'components/UI/ErrorMessage';
import Title from 'components/UI/Title/';
import Switch from 'components/UI/Switch';

import { listenToProducts, Product } from 'db/product';

import ProductCard from './ProductCard';
import ProductTable from './ProductTable';
import { ProductCardWrapper, TitleSwitchWrapper } from './ProductList.styles';

const SWITCH_OPTIONS = [
  { value: 'table', label: intl.get('TABLE') },
  { value: 'grid', label: intl.get('GRID') },
];

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>();
  const [displayMode, setDisplayMode] = useState<string>('table');

  useEffect(() => {
    return listenToProducts({
      next: (querySnapshot: QuerySnapshot) => {
        const updatedProducts = querySnapshot.docs.map(docSnapshot => ({
          id: docSnapshot.id,
          ...docSnapshot.data(),
        }));
        setProducts(updatedProducts as Product[]);
      },
      error: () => setError('products-list-get-fail'),
    });
  }, [setProducts]);

  return (
    <Container>
      <TitleSwitchWrapper>
        <Title>{intl.get('LIST_OF_PRODUCTS')}</Title>
        <Switch
          options={SWITCH_OPTIONS}
          onButtonClick={setDisplayMode}
          checked={displayMode}
        />
      </TitleSwitchWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {displayMode === 'table' && <ProductTable products={products} />}

      {displayMode === 'grid' && (
        <ProductCardWrapper>
          {products.map((product, i: number) => (
            <ProductCard key={i} product={product} />
          ))}
        </ProductCardWrapper>
      )}
    </Container>
  );
};

export default ProductList;
