// Styles
import styled from "styled-components";

export const Container = styled.div`
  a {
    text-decoration: underline;
    color: #404040;
  }
`;

export const Figure = styled.figure`
  position: relative;
  width: 310px;
  height: 310px;

  overflow: hidden;
  background-color: rgb(245, 245, 245);

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
  
  button:last-child {
    position: absolute;
    width: 224px;
    height: 52px;
    left: 50%;
    bottom: 10px;

    opacity: 0;
    transform: translateX(-50%);
    transition: bottom cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
      opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s;
  }

  &:hover {
    button:last-child {
      bottom: 30px;

      opacity: 1;
    }
  }
`;

export const Title = styled.h4`
  color: #004178;
  font-weight: 700;
  font-size: 20px;

  margin-top: 18px;
`;
