import React, { TextareaHTMLAttributes } from 'react';
import { ColTypes } from 'components/UI/types';
import { FormGroup, TextArea, Label } from './TextArea.styles';

type Props = ColTypes & {
  label: string;
};

const FormTextArea = (
  props: Props & TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  return (
    <FormGroup>
      <Label htmlFor={props.name}>{props.label}</Label>
      <TextArea name={props.name} {...props} />
    </FormGroup>
  );
};

export default FormTextArea;
