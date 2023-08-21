import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const CursosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 80px;
`;

export const LigatureLine = styled.hr`
  transform: rotate(90deg);
  color: lightcoral;
  z-index: -10;
`;
