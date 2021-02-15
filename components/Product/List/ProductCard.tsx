import React from 'react';
import Link from 'next/link';

import { Product } from 'db/product';
import { formatAmount } from 'utils';

import {
  Card,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from './ProductList.styles';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link href="/[id]" as={`/${product.id}`} passHref>
      <Card>
        <ProductImage src={product.image.url} alt={product.image.alt} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>
          {formatAmount(product.price.value, product.price.currency)}
        </ProductPrice>
      </Card>
    </Link>
  );
};

export default ProductCard;
