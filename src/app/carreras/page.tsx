"use client";
import { Card } from "@/components/card/card";
import React from "react";

export default function Home() {
  const handleClick = () => {
    alert("Clicked");
  };

  return (
    <>
      <h1>Pricing Plans</h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <Card
        className="card-plans"
        title="Starter"
        subtitle="$0 /Monthly"
        content="
        15 website
        50GB Disk Space
        50 Email
        50GB Bandwidth
        10 Subdomains
        Unlimited Support
        "
      />
      <Card
        className="card-plans"
        title="Personal"
        subtitle="$29 /Monthly"
        content=""
      />
      <Card
        className="card-plans"
        title="Ultimate"
        subtitle="$49 /Monthly"
        content=""
      />
    </>
  );
}
