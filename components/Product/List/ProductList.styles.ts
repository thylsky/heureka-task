import styled from 'styled-components';

export const TitleSwitchWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 16px;
`;

export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.a`
  display: block;
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0 0 0 / 10%);
  height: 100%;
  padding: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 0;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;
  height: 200px;
  margin-bottom: 16px;
`;

export const ProductTitle = styled.div`
  font-weight: semi-bold;
  font-size: 24px;
  line-height: 32px;
`;

export const ProductPrice = styled.div`
  font-size: 19px;
  line-height: 24px;
  color: #444;
`;
