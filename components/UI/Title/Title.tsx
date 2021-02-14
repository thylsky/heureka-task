import styled from 'styled-components';

const Title = styled.h1`
  display: block;
  font-size: 1.5em;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2em;
  }
`;

export default Title;
