"use client";

import * as React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Container, Navbar, Nav } from "react-bootstrap";

const pages = ["Carreras"];

export const NavComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link href={"/"}>antiU</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {pages.map((page) => (
              <Nav.Link key={page}>
                <Link href={"/carreras"}>Carreras</Link>
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <UserButton afterSignOutUrl="/" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
