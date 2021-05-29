import React from 'react';

// styles
import Wrapper from './button.styles';

interface Props {
  children: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ onClick, children, className }: Props) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      {children}
    </Wrapper>
  );
};

export default Button;
