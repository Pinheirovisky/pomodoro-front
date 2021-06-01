import React from 'react';

// styles
import Wrapper from './button.styles';

interface Props {
  children: string;
  onClick?: () => void;
  className?: string;
  working?: boolean;
}

const Button: React.FC<Props> = ({
  onClick,
  children,
  className,
  working,
}: Props) => {
  return (
    <Wrapper working={working} onClick={onClick} className={className}>
      {children}
    </Wrapper>
  );
};

export default Button;
