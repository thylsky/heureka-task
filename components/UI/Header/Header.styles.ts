import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  place-items: center start;
  border-bottom: 2px solid rgb(243 244 246);
  padding: 8px 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr auto auto;
    padding: 24px 64px;
    gap: 32px;
  }
`;

export const AddNewButton = styled.a`
  position: absolute;
  display: grid;
  place-items: center;
  right: 12px;
  bottom: 12px;
  height: 40px;
  width: 40px;
  background: ${({ theme }) => theme.colors.main};
  border-radius: 50%;
  line-height: 20px;

  svg {
    fill: white;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    right: 24px;
    bottom: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: static;
  }
`;

export const LogoutButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.2s color;
  :hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;
