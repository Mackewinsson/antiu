"use client";

import { useAuth } from "@clerk/nextjs";
import { ReactElement } from "react";

export const SideBar = () => {
  const auth = useAuth();
  return (
    <>
      <SideBarWrapper>sidebar</SideBarWrapper>
      <MainContentWrapper>main</MainContentWrapper>
    </>
  );
};

import styled from "styled-components";

const SideBarWrapper = styled.div`
  width: 30%;
  background-color: lightgray;
`;

const MainContentWrapper = styled.div`
  width: 70%;
  background-color: lightblue;
`;
