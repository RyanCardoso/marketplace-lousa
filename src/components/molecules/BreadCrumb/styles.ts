// Libs
import styled from "styled-components";

export const Container = styled.div`
  margin: 6px 0 50px;
`;

export const Title = styled.div`
  font-size: 63px;
  font-weight: 600;

  margin-bottom: 10px;
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

    font-style: italic;
    color: #000;
  }

  a {
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid;
    }
  }
`;
