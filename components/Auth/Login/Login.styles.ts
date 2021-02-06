import styled from 'styled-components';

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
`;

export const Logo = styled.img`
  max-width: 200px;
  margin: 0 auto;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  background-color: #ffe2e9;
  color: #dc0030;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 6px;
`;

export const Label = styled.label`
  display: block;
  font-size: 13px;
  line-height: 19px;
  color: rgb(0 0 0 / 50%);
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 24px;
  padding: 8px 16px;
  line-height: 30px;
  border: 2px solid #8d8d8d;
  border-top-color: #747474;
  background: #fff;
  color: #000;
  border-radius: 6px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;
