import React, { InputHTMLAttributes } from 'react';
import { ColTypes } from 'components/UI/types';

import { FormGroup, Input, Label } from './Input.styles';

type Props = ColTypes & {
  label: string;
  options?: Array<string>;
};

const FormInput = (props: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <FormGroup col={props.col}>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input name={props.name} {...props} list={props.options && props.name} />
      {props.options && (
        <datalist id={props.name}>
          {props.options.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </datalist>
      )}
    </FormGroup>
  );
};

export default FormInput;
