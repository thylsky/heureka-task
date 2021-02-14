import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  place-items: center start;
  border-bottom: 2px solid rgb(243 244 246);
  padding: 8px 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 24px 64px;
  }
`;

export const HomeLink = styled(Link)``;

export const Logo = styled(Image)``;

export const LogoutButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.2s color;
  :hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;
