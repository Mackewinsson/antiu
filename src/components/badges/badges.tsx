'use client';
import React from 'react';
import { Badge as BadgeComponent } from 'react-bootstrap';

type Props = {
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  text: string;
};

const Badge = ({ variant, text }: Props) => {
  return <BadgeComponent variant={variant}>{text}</BadgeComponent>;
};

export { Badge };
