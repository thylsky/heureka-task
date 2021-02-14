import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  color: #fff;
  border: none;
  box-shadow: rgb(0 0 0 / 30%) 0px 3px 10px;
  border-radius: 6px;
  padding: 12px;
  font-weight: bold;
  transition: 0.2s background-color;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.semiDarkMain};
  }

  :focus {
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.semiDarkMain};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.darkMain};
  }

  :disabled,
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: default;
    box-shadow: none;
  }
`;

export default Button;
