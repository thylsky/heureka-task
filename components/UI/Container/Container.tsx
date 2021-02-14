import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1800px;
  padding: 16px 8px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 16px 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 32px 64px;
  }
`;

export default Container;
