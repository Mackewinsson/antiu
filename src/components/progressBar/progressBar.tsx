'use client';
import React from 'react';
import { ProgressBar as ProgressBarComponent } from 'react-bootstrap';

type Props = {
  variant?: 'success' | 'danger' | 'warning' | 'info';
  key?: number;
  min?: number;
  now?: number;
  max?: number;
  label?: string;
  visuallyHidden?: boolean;
  striped?: boolean;
  animated?: boolean;
  children?: React.ReactNode;
};

const ProgressBar = ({
  variant,
  key,
  min,
  now,
  max,
  label,
  visuallyHidden,
  striped,
  animated,
  children,
}: Props) => {
  return (
    <ProgressBarComponent
      variant={variant}
      key={key}
      min={min}
      now={now}
      max={max}
      label={label}
      visuallyHidden={visuallyHidden}
      striped={striped}
      animated={animated}
    >
      {children}
    </ProgressBarComponent>
  );
};

export { ProgressBar };
