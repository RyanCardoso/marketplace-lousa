// Libs
import styled from "styled-components";

export const Container = styled.section`
  padding: 33px 0 0;
  background-color: #f2f6fa;

  @media (max-width: 768px) {
    padding: 24px 0;
  }
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 1440px;

  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 28px;
    color: #404040;
  }

  > div {
    width: 95%;
    margin: 0 auto;

    .slick-list {
      padding-top: 32px !important;
      padding-bottom: 66px !important;
    }
  }

  @media (max-width: 768px) {
    h2 {
      width: 90%;
      min-width: 292px;
      font-size: 20px;
    }

    > div {
      .slick-slider {
        height: 444px;

        .slick-active {
          > div {
            > div {
              box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
              transform: translateY(-10px);
            }
          }
        }
      }
    }
  }
`;
