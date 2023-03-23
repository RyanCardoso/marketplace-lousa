// Libs
import styled, { css } from "styled-components";

interface ArrosStyleType {
  left?: string;
  right?: string;
}

export const Container = styled.div`
  width: 100%;

  .variant-tertiary {
    .slick-track {
      display: flex;
      gap: 52px;
    }

    .slick-disabled {
      display: none !important;
    }

    .slick-list {
      padding: 32px 0 3px 3px;
    }

    @media (max-width: 798px) {
      .slick-track {
        gap: 0;
      }

      .slick-list {
        padding: 32px 0 3px 0px;
      }
    }
  }
`;

// Primary
export const DotsNumber = styled.div`
  color: #ffffff;
  bottom: 25px;

  li {
    width: auto;
    margin: 0 10px;
  }

  .slick-active {
    border-bottom: solid 1px;
  }

  @media (max-width: 768px) {
    color: #033573;
    bottom: 5px;
  }
`;

// Secondary
export const SampleNextArrow = styled.div<ArrosStyleType>`
  ${({ right }) => css`
    width: 48px;
    height: 48px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    right: ${right || "-24px"};

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
  `}
`;

export const SamplePrevArrow = styled(SampleNextArrow)<ArrosStyleType>`
  ${({ left }) => css`
    left: ${left || "-24px"};

    img {
      transform: scale(-1);
    }

    @media (max-width: 785px) {
      left: calc(50% - 45px);
    }
  `}
`;

// Terciary
export const RoundDots = styled.div`
  bottom: -50px;

  ul {
    li {
      margin: 0;

      button {
        &::before {
          color: #033573;
          font-size: 8px;
          opacity: 1;
        }
      }
    }

    .slick-active {
      button {
        &::before {
          color: #033573;
          font-size: 12px;
          opacity: 1;
        }
      }
    }
  }
`;
