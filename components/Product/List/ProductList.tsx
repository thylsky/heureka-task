import React, { useEffect, useState } from 'react';
import { DocumentData, QuerySnapshot } from '@firebase/firestore-types';

import { listenToProducts, Product } from 'db/product';

const ProductList = () => {
  const [products, setProducts] = useState<DocumentData>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    return listenToProducts({
      next: (querySnapshot: QuerySnapshot) => {
        const updatedProducts = querySnapshot.docs.map(docSnapshot =>
          docSnapshot.data()
        );
        setProducts(updatedProducts);
      },
      error: () => setError('products-list-get-fail'),
    });
  }, [setProducts]);

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {products.map((product: Product, i: number) => (
        <div key={i}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductList;
