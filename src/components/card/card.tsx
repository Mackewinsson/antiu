'use client';
import React from 'react';
import { Card as CardComponent } from 'react-bootstrap';

type Props = {
  src: string;
  className: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
};

const Card = ({ src, className, title, subtitle, content }: Props) => {
  return (
    <CardComponent className={className}>
      <CardComponent.Body>
        {/* <Card.Img {src}/> */}
        <CardComponent.Title>{title}</CardComponent.Title>
        {subtitle && (
          <CardComponent.Subtitle className='mb-2 text-muted'>
            {subtitle}
          </CardComponent.Subtitle>
        )}
        <div>{content}</div>
      </CardComponent.Body>
    </CardComponent>
  );
};

export { Card };
