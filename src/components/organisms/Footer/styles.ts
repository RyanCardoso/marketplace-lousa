// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #000;
`;

export const Wrapper = styled.ul`
  width: 95%;
  max-width: 1440px;

  display: flex;
  justify-content: space-between;

  gap: 30px;
  margin: 0 auto;
  padding: 75px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 70px;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;

  gap: 6px;
  color: #fff;
  list-style: none;
`;

export const Logo = styled.h2`
  font-size: 36px;
`;

export const Title = styled.h4`
  font-size: 19px;
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  font-size: 15px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;

  span {
    display: block;
    margin-top: 6px;
  }
`;
