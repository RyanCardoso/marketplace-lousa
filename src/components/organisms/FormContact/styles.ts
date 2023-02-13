// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  max-width: 850px;
  margin: 0 auto 56px;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const Title = styled.h4`
  color: #0a3264;
  font-size: 20px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 41px;
  margin-top: 35px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;

  column-gap: 29px;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 24px;
  }
`;
