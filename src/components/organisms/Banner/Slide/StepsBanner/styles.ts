// Libs
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #3a74ff;
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 1240px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 13px;
  }
`;

export const Description = styled.div`
  width: 175px;
  color: #ffffff;

  h2 {
    font-size: 20px;
    font-weight: 500;
  }

  h1 {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    width: auto;

    h1 {
      font-size: 14px;
    }

    h2 {
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
    }
  }
`;

export const BoxSteps = styled.div`
  display: flex;

  /* Arrows */
  img:nth-child(2n) {
    margin: 20px 10px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img:nth-child(2n) {
      display: none;
    }
  }
`;

export const Steps = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;

    img {
      position: absolute;
      top: 0;
      right: -70px;

      width: 68px;
      height: auto;
    }

    :first-child {
      h3 {
        max-width: 93px;
      }
    }

    :last-child {
      img {
        top: 30%;
      }
    }

    :nth-child(3) {
      img {
        right: -150px;
      }
    }
  }
`;

export const StepDescription = styled.div<{ width?: string }>`
  ${({ width }) => css`
    display: flex;
    align-items: center;
    gap: 10px;

    h2 {
      font-size: 80px;
      color: #ffb395;
    }

    h3 {
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;

      max-width: ${width || "185px"};
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 35px;
      }

      h3 {
        font-size: 12px;
        max-width: 139px;
      }
    }
  `}
`;
