"use client";
import React from "react";
import { Spinner as SpinnerComponent } from "react-bootstrap";

type Props = {
  animation: "border" | "grow";
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  role?: string;
  className?: string;
  size?: "sm";
  as?: React.ElementType;
  text?: string;
};

const Spinner = ({
  animation,
  variant,
  role,
  className,
  size,
  as,
  text,
}: Props) => {
  return (
    <SpinnerComponent
      animation={animation}
      variant={variant}
      role={role}
      className={className}
      size={size}
      as={as}
    >
      {text}
    </SpinnerComponent>
  );
};

export { Spinner };
