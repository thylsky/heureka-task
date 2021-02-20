import styled from 'styled-components';

import { ColTypes } from 'components/UI/types';

type FormGroupProps = ColTypes;

export const FormGroup = styled.div<FormGroupProps>`
  padding-bottom: 32px;
  grid-column: span ${({ col }) => col?.xs || 12};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${({ col }) => col?.sm && `grid-column: span ${col.sm}`};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ col }) => col?.md && `grid-column: span ${col.md}`};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ col }) => col?.lg && `grid-column: span ${col.lg}`};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${({ col }) => col?.xl && `grid-column: span ${col.xl}`};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    ${({ col }) => col?.xxl && `grid-column: span ${col.xxl}`};
  }
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
