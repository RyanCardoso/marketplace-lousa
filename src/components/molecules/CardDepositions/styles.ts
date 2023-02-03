// Libs
import styled from "styled-components";

export const Container = styled.div`
  width: 279px;
  height: 348px;
  display: flex;
  flex-direction: column;

  gap: 16px;
  padding: 24px;
  margin: 0 16px;
  background-color: #ffffff;

  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s;

  @media (min-width: 769px) {
    &:hover {
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-10px);
    }
  }
`;

export const Message = styled.p`
  color: #404040;
`;

export const Author = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #054a85;
`;
