"use client";
import { Card } from "@/components/card";
import { cursos } from "./cursos.mock";
import { Container, CursosWrapper, LigatureLine } from "./styles/styles";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function CarrerasDetails({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const carrera = params.id;
  return (
    <Container>
      <h1>{params.id}</h1>
      <h2>Roadmap</h2>
      <CursosWrapper>
        <ProgressBar now={60} variant="success" label={`60%`} />
        {cursos.map((curso) => (
          <>
            <Card
              key={curso.id}
              title={curso.course}
              text={curso.description}
              button={
                <Button
                  onClick={() =>
                    router.push(`/carreras/${carrera}/${curso.id}`)
                  }
                  text="Ir a la curso"
                  variant={!curso.available ? "secondary" : "primary"}
                  type="button"
                  disabled={!curso.available}
                />
              }
            />
            <LigatureLine />
          </>
        ))}
      </CursosWrapper>
    </Container>
  );
}
