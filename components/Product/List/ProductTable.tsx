import React from 'react';
import { useRouter } from 'next/router';

import DeleteButton from 'components/UI/DeleteButton';

import { deleteProduct, Product } from 'db/product';
import { formatAmount } from 'utils';

import {
  Table,
  THead,
  Tr,
  Th,
  TBody,
  Td,
  TdActions,
} from './ProductTable.styles';

type Props = {
  products: Product[];
};

const ProductTable = ({ products }: Props) => {
  const { push } = useRouter();

  const handleDeleteButton = (product: Product) => {
    const response = confirm(
      `Are you sure you want to delete ${product.title}`
    );
    if (response === true) deleteProduct(product.id!);
  };

  const onRowClick = (
    event:
      | React.MouseEvent<HTMLTableRowElement, MouseEvent>
      | React.KeyboardEvent<HTMLTableRowElement>,
    product: Product
  ) => {
    if (
      (event.target as HTMLSpanElement | HTMLTableCellElement).title !==
        'Delete' &&
      event.type === 'click' &&
      (event.target as SVGPathElement).tagName !== 'path'
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
    <Table>
      <THead>
        <Tr>
          <Th>Product name</Th>
          <Th>Price</Th>
          <Th>Description</Th>
          <Th style={{ textAlign: 'center' }}>Delete</Th>
        </Tr>
      </THead>
      <TBody>
        {products.map((product, i: number) => (
          <Tr
            key={i}
            onClick={e => onRowClick(e, product)}
            onKeyDown={e => onRowClick(e, product)}
            role="link"
            tabIndex={i}
          >
            <Td>{product.title}</Td>
            <Td>{formatAmount(product.price.value, product.price.currency)}</Td>
            <Td>{product.description}</Td>
            <TdActions
              title="Delete"
              onClick={() => handleDeleteButton(product)}
              style={{ textAlign: 'center' }}
            >
              <DeleteButton height={24} width={24} />
            </TdActions>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
};

export default ProductTable;
