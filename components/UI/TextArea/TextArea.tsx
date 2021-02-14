import React, { TextareaHTMLAttributes } from 'react';
import { FormGroup, TextArea, Label } from './TextArea.styles';

type Props = {
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
