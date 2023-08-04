"use client";
import React from "react";
import { Card as CardComponent } from "react-bootstrap";

type Props = {
  imageUrl?: string;
  className: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
};

export const Card = ({
  className,
  title,
  subtitle,
  content,
  imageUrl,
}: Props) => {
  return (
    <CardComponent className={className}>
      {imageUrl && <CardComponent.Img variant="top" src={imageUrl} />}
      <CardComponent.Body>
        <CardComponent.Title>{title}</CardComponent.Title>
        {subtitle && (
          <CardComponent.Subtitle className="mb-2 text-muted">
            {subtitle}
          </CardComponent.Subtitle>
        )}
        <div>{content}</div>
      </CardComponent.Body>
    </CardComponent>
  );
};
