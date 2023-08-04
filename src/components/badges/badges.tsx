"use client";
import React from "react";
import { Badge as BadgeComponent } from "react-bootstrap";

type Props = {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light"
    | string;
  text: string;
};

const Badge = ({ variant, text }: Props) => {
  return <BadgeComponent bg={variant}>{text}</BadgeComponent>;
};

export { Badge };
