import React, { InputHTMLAttributes } from 'react';
import { FormGroup, Input, Label } from './Input.styles';

type Props = {
  label: string;
};

const FormInput = (props: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <FormGroup>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input name={props.name} {...props} />
    </FormGroup>
  );
};

export default FormInput;
