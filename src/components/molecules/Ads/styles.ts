// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: #f2f6fa;
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 1440px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 50px;
  padding: 16px 0;
  margin: 0 auto;

  h4 {
    color: #404040;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 85%;

    flex-direction: column;
    align-items: center;

    gap: 16px;
    padding: 24px 0;

    h4 {
      width: 85%;
      text-align: center;
    }
  }
`;
