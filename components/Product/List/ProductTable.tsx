import React from 'react';
import styled from 'styled-components';

import { Product } from 'db/product';
import { formatAmount } from 'utils';

type Props = {
  products: Product[];
  onRowClick: (input: Product) => void;
};

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  text-align: left;
  font-size: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;

const THead = styled.thead``;

const TBody = styled.tbody``;

const Tr = styled.tr`
  transition: 0.3s background;

  :hover {
    background: #fafafa;
  }
`;

const Th = styled.th`
  color: rgb(0 0 0 / 85%);
  font-weight: bold;
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  padding: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px;
  }
`;

const Td = styled.td`
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.3s;
  padding: 8px;
  max-width: 30vw;
  white-space: nowrap;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px;
  }
`;

const ProductTable = ({ products, onRowClick }: Props) => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>Product name</Th>
          <Th>Price</Th>
          <Th>Description</Th>
        </Tr>
      </THead>
      <TBody>
        {products.map((product, i: number) => (
          <Tr key={i} onClick={() => onRowClick(product)}>
            <Td>{product.title}</Td>
            <Td>{formatAmount(product.price.value, product.price.currency)}</Td>
            <Td>{product.description}</Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
};

export default ProductTable;
