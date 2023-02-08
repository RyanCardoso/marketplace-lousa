// Libs
import styled from "styled-components";

export const Container = styled.section`
  padding-bottom: 97px;

  @media (max-width: 768px) {
    padding-bottom: 9px;
  }
`;

export const Title = styled.h2`
  color: #0a3264;
  font-size: 20px;
`;

export const BoxProducts = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 22px;
  margin-top: 32px;
  padding-bottom: 32px;

  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #0a3264;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 24px;
  }
`;
