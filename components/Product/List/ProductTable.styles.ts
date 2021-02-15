import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  text-align: left;
  font-size: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const Tr = styled.tr`
  transition: 0.3s background;

  :hover {
    background: #fafafa;
  }
`;

export const Th = styled.th`
  color: rgb(0 0 0 / 85%);
  font-weight: bold;
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  padding: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px;
  }
`;

export const Td = styled.td`
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

export const TdActions = styled(Td)`
  text-align: center;

  :hover {
    svg {
      fill: ${({ theme }) => theme.colors.main};
    }
  }
`;
