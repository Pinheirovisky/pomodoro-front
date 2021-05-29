import React from 'react';

interface Props {
  children: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ onClick, children, className }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
