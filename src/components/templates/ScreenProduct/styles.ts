import styled from "styled-components";

// Libs
export const Container = styled.div`
  width: 95%;
  max-width: 1440px;
  margin: 49px auto 0;

  @media (max-width: 768px) {
    width: 85%;
    margin-top: 18px;
  }
`;

export const BoxBtnMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: sticky;
    top: calc(100% - 84px);

    display: flex;
    align-items: center;
    height: 84px;

    z-index: 99;
    background-color: #fff;
  }
`;
