// Libs
import styled from "styled-components";

export const Container = styled.div`
  margin: 6px 0 50px;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const Title = styled.h1`
  color: #0a3264;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;

  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const BoxItems = styled.ul`
  display: flex;
  column-gap: 10px;
`;

export const Item = styled.li`
  list-style: none;

  a,
  p {
    display: inline;

    color: #0a3264;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  a {
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid;
    }
  }
`;
