// Libs
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
        0px 2px 2px rgba(0, 0, 0, 0.24);
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

// Terciary
export const SampleNextArrow = styled.div`
  width: 48px;
  height: 48px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  right: -24px;

  background-color: #033573;

  z-index: 99;

  &:hover {
    background-color: #033573;
  }

  &::before {
    content: "";
  }

  @media (max-width: 785px) {
    width: 32px;
    height: 32px;
    top: calc(100% - 16px);
    right: calc(50% - 45px);

    img {
      width: 18.62px;
    }
  }
`;

export const SamplePrevArrow = styled(SampleNextArrow)`
  left: -24px;

  img {
    transform: scale(-1);
  }

  @media (max-width: 785px) {
    left: calc(50% - 45px);
  }
`;
