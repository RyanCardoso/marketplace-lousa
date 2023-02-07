// Libs
import styled from "styled-components";

export const BoxCard = styled.div``;

export const Card = styled.div`
  width: 555px;
  height: 50vw;
  max-height: 555px;

  /* overflow: hidden; */
  background-color: #ddd;

  video {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const BoxThumbnail = styled.div`
  margin-top: 20px;

  .slick-track {
    margin-left: 0;
  }

  .slick-current {
    figure {
      opacity: 1;
    }
  }
`;

export const Thumbnail = styled.figure`
  width: 130px !important;
  height: 130px !important;

  cursor: pointer;

  opacity: 0.5;
  background-color: #d9d9d9;
  margin-right: 26px;

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;
