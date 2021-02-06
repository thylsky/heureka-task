import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.header`
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

const HomeLink = styled(Link)``;

const Logo = styled.img`
  height: 40px;
`;

const LoginLink = styled.a`
  transition: 0.2s color;
  :hover {
    color: ${({ theme }) => theme.main};
  }
`;

const Header = () => (
  <Wrapper>
    <HomeLink href="/" passHref>
      <a>
        <Logo src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
      </a>
    </HomeLink>
    <Link href="/login" passHref>
      <LoginLink title="Login">Login</LoginLink>
    </Link>
  </Wrapper>
);

export default Header;
