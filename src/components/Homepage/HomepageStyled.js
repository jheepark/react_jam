import styled from 'styled-components';
import background from '../../assets/background.jpg';

export const TitleStyled = styled.h1`
  font-family: 'Fjalla One', sans-serif;
  font-size: 3rem;
  text-align: left;
  color: black;
  margin: 0;
  display: inline-block;
  span {
    color: #00d2ff;
  }
`;

export const ContentStyled = styled.div`
  width: 100%;
  margin: 40px 0 0;
  display: inline-block;

  p {
    letter-spacing: 1.1px;
    line-height: 1.5;
    font-family: 'Noto Sans', sans-serif;
    color: black;
  }

  @media (min-width: 426px) {
    width: 75%;
  }

  @media (min-width: 635px) {
    width: 50%;
  }
`;

export const PageStyled = styled.div`
  background-image: url(${background});
  background-size: cover;
  padding-top: 40px;
  background-position: 0;

  @media (min-width: 321px) {
    background-position: 0;
  }
`;


export const ContainerStyled = styled.div`
  padding: 0 40px;
`;

export const WaveContainerStyled = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;

  div {
    display: block;
    position: relative;
    height: 40px;
    background: black;

    :before {
      content: "";
      display: block;
      position: absolute;
      border-radius: 100%;
      width: 100%;
      height: 300px;
      background-color: white;
      right: -25%;
      top: 20px
    }

    :after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 100%;
      width: 100%;
      height: 300px;
      background-color: black;
      left: -25%;
      top: -240px;
    }
  }
`;
