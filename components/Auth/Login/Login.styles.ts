import styled from 'styled-components';
import Image from 'next/image';

import Button from 'components/UI/Button';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.main};
`;

export const Card = styled.div`
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  background: #fff;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 16px;
  padding: 24px 24px 40px;
`;

export const LogoWrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 24px;
  width: 100%;
  text-align: center;
`;

export const Logo = styled(Image)``;

export const SubmitButton = styled(Button)`
  width: 100%;
`;
