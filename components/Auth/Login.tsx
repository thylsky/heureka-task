import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.main};
`;

const Card = styled.div`
  min-height: 500px;
  width: 350px;
  border-radius: 20px;
  background: #fff;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 16px;
  padding: 24px 24px 40px;
`;

const LogoWrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 24px;
  width: 100%;
`;

const Logo = styled.img`
  max-width: 200px;
  margin: 0 auto;
`;

const Login = () => {
  return (
    <Wrapper>
      <Card>
        <LogoWrapper>
          <Link href="/" passHref>
            <a title="Home">
              <Logo src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
            </a>
          </Link>
        </LogoWrapper>
      </Card>
    </Wrapper>
  );
};

export default Login;
