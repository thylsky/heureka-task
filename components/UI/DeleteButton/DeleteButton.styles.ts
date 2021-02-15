import styled from 'styled-components';

export const Svg = styled.svg`
  cursor: pointer;
  transition: 0.2s fill;

  :hover {
    fill: ${({ theme }) => theme.colors.main};
  }
`;
