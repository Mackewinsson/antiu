"use client";
export default function claseslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainWrapper>
        <SideBarWrapper>sidebar</SideBarWrapper>
        <MainContentWrapper>{children}</MainContentWrapper>
      </MainWrapper>
    </>
  );
}

import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const SideBarWrapper = styled.div`
  width: 30%;
  /* height: 100%; */
  background-color: lightgray;
`;

const MainContentWrapper = styled.div`
  width: 70%;
  /* height: 100%; */
  background-color: lightblue;
`;
