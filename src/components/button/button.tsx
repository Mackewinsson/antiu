'use client';
import React from 'react';
import { Button as ButtonComponent } from 'react-bootstrap';

type Props = {
  type: 'button' | 'submit';
  variant: string;
  className?: string;
  text: string;
  // onClick: () => void;
  size?: 'sm' | 'lg';
  active?: boolean;
  disabled?: boolean;
};

export const Button = ({
  type,
  variant,
  className,
  text,
  // onClick,
  size,
  active,
  disabled = false,
}: Props) => {
  return (
    <ButtonComponent
      type={type}
      variant={variant}
      className={className ? `btn-component ${className}` : 'btn-component'}
      // onClick={onClick}
      size={size}
      active={active}
      disabled={disabled}
    >
      {text}
    </ButtonComponent>
  );
};
