"use client";
import React from "react";
import { Card as CardComponent } from "react-bootstrap";

type Props = {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  text?: string;
  button?: React.ReactNode;
};

export const Card = ({
  title,
  subtitle,
  children,
  imageUrl,
  text,
  button,
}: Props) => {
  return (
    <CardComponent style={{ width: "18rem" }}>
      {imageUrl && <CardComponent.Img variant="top" src={imageUrl} />}
      <CardComponent.Body>
        <CardComponent.Title>{title}</CardComponent.Title>
        {subtitle && (
          <CardComponent.Subtitle className="mb-2 text-muted">
            {subtitle}
          </CardComponent.Subtitle>
        )}
        <CardComponent.Text>{text}</CardComponent.Text>
        <div>{children}</div>
        {!!button && button}
      </CardComponent.Body>
    </CardComponent>
  );
};
