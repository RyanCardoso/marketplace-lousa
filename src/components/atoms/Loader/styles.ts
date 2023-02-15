// Libs
import styled, { keyframes } from "styled-components";

const Anim = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #0a3264;
  width: 20px;
  height: 20px;
  animation: ${Anim} 2s linear infinite;
`;
