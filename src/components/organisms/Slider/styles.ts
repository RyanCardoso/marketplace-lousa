// Libs
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* overflow: hidden; */
`;

// Primary
export const Dots = styled.div`
  bottom: 25px;

  .slick-active {
    border-bottom: solid 1px;
  }
`;

// Secondary
export const AppendDots = styled.div`
  position: static;
  margin-top: 10px;

  ul {
    display: flex;
    gap: 20px;

    .slick-active {
      opacity: 1;
    }

    li {
      width: 155px;
      height: 155px;
      
      margin: 0;
      
      opacity: 0.5;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    }
  }
`;

export const DotsImg = styled.figure`
  margin: 0;
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
