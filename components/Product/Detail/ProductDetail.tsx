import React from 'react';

import { Product } from 'db/product';

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  return <>{product.title}</>;
};

export default ProductDetail;
