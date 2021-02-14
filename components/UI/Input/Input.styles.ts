import styled from 'styled-components';

export const FormGroup = styled.div`
  padding-bottom: 32px;
`;

export const Label = styled.label`
  display: block;
  font-size: 13px;
  line-height: 19px;
  color: rgb(0 0 0 / 50%);
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  line-height: 30px;
  color: #000;
  border-radius: 6px;
  line-height: 1.5715;
  background-color: #fafafa;
  background-image: none;
  border: 1px solid ${({ theme }) => theme.colors.main};
  font-size: 16px;
  line-height: 23px;
  transition: 0.2s box-shadow;

  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.colors.main} 0px 0px 6px;
    background-color: #ffffff;
  }

  :focus {
    outline: none;
  }
`;
