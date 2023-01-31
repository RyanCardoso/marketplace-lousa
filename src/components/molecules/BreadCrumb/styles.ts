// Libs
import styled from "styled-components";

export const Container = styled.ul`
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
