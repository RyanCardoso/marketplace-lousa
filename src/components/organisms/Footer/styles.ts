// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Wrapper = styled.ul`
  width: 95%;
  max-width: 1440px;

  display: flex;
  justify-content: space-between;

  gap: 30px;
  margin: 0 auto;
  padding: 24px 0;

  @media (max-width: 768px) {
    width: 85%;
    flex-direction: column;
    gap: 32px;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;

  gap: 6px;
  list-style: none;

  > a {
    img {
      width: 105.64px;
    }
  }
`;

export const Title = styled.h4`
  color: #004178;
  font-size: 19px;
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  color: #404040;
  font-size: 15px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #404040;

  span {
    display: block;
    margin-top: 6px;
  }
`;

export const Figure = styled.figure`
  display: flex;
  gap: 16px;
`;
