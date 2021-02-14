import styled from 'styled-components';

type SwitchButtonProps = {
  checked: boolean;
};

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 40px;
  }
`;

export const SwitchButton = styled.span<SwitchButtonProps>`
  display: inline-block;
  cursor: ${({ checked }) => (checked ? 'default' : 'pointer')};
  font-size: 12px;
  line-height: 30px;
  padding: 0 8px;
  position: relative;
  transition: 0.2s border-color, 0.2s color;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ checked, theme }) =>
    checked ? theme.colors.main : '#d4d4d4'};
  color: ${({ checked, theme }) => (checked ? theme.colors.main : '#444')};

  &:first-child {
    border-right-width: 0;

    ${({ checked }) =>
      checked &&
      `
      border-right-width: 1px;
    `}
  }

  &:last-child {
    border-left-width: 0;

    ${({ checked }) =>
      checked &&
      `
        border-left-width: 1px;
    `}
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.main};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
    line-height: 38px;
    padding: 0 16px;
  }
`;
