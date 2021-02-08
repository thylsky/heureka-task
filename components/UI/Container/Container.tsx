import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1800px;
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 16px 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px 64px;
  }
`;

export default Container;
