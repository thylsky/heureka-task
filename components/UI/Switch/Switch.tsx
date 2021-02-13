import React, { Dispatch, SetStateAction } from 'react';
import { SwitchButton, Wrapper } from './Switch.styles';

type Props = {
  options: Array<{
    value: string;
    label: string;
  }>;
  onButtonClick: Dispatch<SetStateAction<string>>;
  checked: string;
};

const Switch = ({ options, onButtonClick, checked }: Props) => {
  return (
    <Wrapper>
      {options.map((item, i) => {
        return (
          <SwitchButton
            checked={item.value === checked}
            onClick={() => onButtonClick(item.value)}
            key={i}
          >
            {item.label}
          </SwitchButton>
        );
      })}
    </Wrapper>
  );
};

export default Switch;
