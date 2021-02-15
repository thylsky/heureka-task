import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { QuerySnapshot } from '@firebase/firestore-types';

import Container from 'components/UI/Container';
import Title from 'components/UI/Title/';
import Switch from 'components/UI/Switch';

import { listenToProducts, Product } from 'db/product';

import ProductCard from './ProductCard';
import ProductTable from './ProductTable';
import { ProductCardWrapper, TitleSwitchWrapper } from './ProductList.styles';

const SWITCH_OPTIONS = [
  { value: 'table', label: 'Table' },
  { value: 'grid', label: 'Grid' },
];

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>();
  const [displayMode, setDisplayMode] = useState<string>('table');
  const { push } = useRouter();

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

  const onRowClick = (item: Product) => {
    push('/[id]', `/${item.id}`);
  };

  return (
    <Container>
      <TitleSwitchWrapper>
        <Title>List of Products</Title>
        <Switch
          options={SWITCH_OPTIONS}
          onButtonClick={setDisplayMode}
          checked={displayMode}
        />
      </TitleSwitchWrapper>
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {displayMode === 'table' && (
        <ProductTable products={products} onRowClick={onRowClick} />
      )}

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
