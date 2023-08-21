"use client";
import { Button } from "@/components/button";
import React from "react";
import { Card } from "@/components/card";

import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import { Wrapper } from "./styles/styles";

export default function Carreras() {
  const router = useRouter();

  const carreras = [
    {
      id: "front-end-dev",
      title: "Front end dev",
      description: "Frontend Carrer description lorem",
    },
  ];

  return (
    <Container>
      <Wrapper>
        {carreras.map((carrera) => (
          <Card
            key={carrera.id}
            title={carrera.title}
            text={carrera.description}
            button={
              <Button
                onClick={() => router.push("/carreras/front-end-dev")}
                text="Ir a la carrera"
                variant="primary"
                type="button"
              />
            }
          />
        ))}
      </Wrapper>
    </Container>
  );
}
