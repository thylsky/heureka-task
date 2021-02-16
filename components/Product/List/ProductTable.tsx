import React from 'react';
import { useRouter } from 'next/router';
import intl from 'react-intl-universal';

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

  const handleDeleteProduct = (product: Product) => {
    const response = confirm(
      intl.get('PRODUCT.DELETE_CONFIRM', { productName: product.title })
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
        intl.get('PRODUCT.DELETE') &&
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

    if (
      event.type === 'keydown' &&
      ['Backspace', 'Delete'].indexOf(
        (event as React.KeyboardEvent<HTMLTableRowElement>).key
      ) > -1
    ) {
      handleDeleteProduct(product);
    }
  };

  return (
    <Table>
      <THead>
        <Tr>
          <Th>{intl.get('PRODUCT.TITLE')}</Th>
          <Th>{intl.get('PRODUCT.PRICE')}</Th>
          <Th tablet>{intl.get('PRODUCT.DESCRIPTION')}</Th>
          <Th style={{ textAlign: 'center' }}>{intl.get('PRODUCT.DELETE')}</Th>
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
            <Td tablet>{product.description}</Td>
            <TdActions
              title={intl.get('PRODUCT.DELETE')}
              onClick={() => handleDeleteProduct(product)}
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
