import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { QuerySnapshot } from '@firebase/firestore-types';

import Container from 'components/UI/Container';
import Title from 'components/UI/Title/';
import Switch from 'components/UI/Switch';

import { deleteProduct, listenToProducts, Product } from 'db/product';

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

  const onRowClick = (
    event:
      | React.MouseEvent<HTMLTableRowElement, MouseEvent>
      | React.KeyboardEvent<HTMLTableRowElement>,
    product: Product
  ) => {
    if (
      (event.target as HTMLSpanElement | HTMLTableCellElement).title !==
        'Delete' &&
      event.type === 'click'
    ) {
      push('/[id]', `/${product.id}`);
    }

    // Controlled by Keyboard
    if (
      (event.type === 'keydown' &&
        (event as React.KeyboardEvent<HTMLTableRowElement>).key) === 'Enter'
    ) {
      push('/[id]', `/${product.id}`);
    }
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
        <ProductTable
          products={products}
          onRowClick={onRowClick}
          deleteProduct={deleteProduct}
        />
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
