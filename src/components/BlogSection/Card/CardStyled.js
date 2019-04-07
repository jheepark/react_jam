import styled from 'styled-components';
import { Link } from 'react-router-dom';
import weirdo from '../../../assets/weirdo.jpg';
import headerImage from '../../../assets/default.jpg';

export const LinkStyled = styled(Link)`
  margin-top: 10px;
  width: 30%;
  text-decoration: none;
  min-width: 300px;

  @media(min-width: 850px) {
    font-size: 12px;
  }
`;

export const CardContainerStyled = styled.div`
  box-shadow: rgba(60,64,67,.3) 0 1px 2px 0, rgba(60,64,67,.15) 0 1px 3px 1px;
  background: white;
  position: relative;
  border-radius: 8px;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const FooterStyled = styled.div`
  padding: 10px;
  font-size: 10px;
  border-top: 1px solid #CCC;
  color: #808285;

  @media(min-width: 850px) {
    padding: 20px;
    font-size: 12px;
  }
`;

export const HeaderStyled = styled.div`
  border-radius: 8px 8px 0 0;
  background-image: ${props => props.headerImg ? `url(${props.headerImg})` : `url(${headerImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 150px;
  width: 100%;

  @media(min-width: 850px) {
    height: 200px;
  }
`;

export const ProfileImageStyled = styled.div`
  border-radius: 50px;
  background-image: ${props => props.img ? `url(${props.img})` : `url(${weirdo})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 120px;
  left: 10px;

  @media(min-width: 850px) {
    top: 170px;
    left: 20px;
  }
`;

export const TagStyled = styled.div`
  background-color: #00d2ff;
  position: absolute;
  padding: 8px 12px;
  border-radius: 20px;
  top: 10px;
  right: 10px;
  color: white;
  text-transform: uppercase;
  font-size: 12px;

  @media(min-width: 850px) {
    top: 20px;
    right: 20px;
  }
`;

export const ContentStyled = styled.div`
  padding: 10px;
  color: #808285;
  p {
    font-size: 12px;
  }
  h1 {
    color: #3e3f3e;
    font-size: 20px;
  }
  @media(min-width: 850px) {
    padding: 20px;
    height: 80px;
    
    h1 {
      margin-top: 20px
    }

    p {
      font-size: 14px;
    }
  }
`;

export const ReadMoreStyled = styled.div`
  margin-top: 10px
  a {
    color: #00d2ff;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    :hover {
      color: #00a2ff;
    }
  }

  @media(min-width: 850px) {
    margin-top: 20px
    a {
      font-size: 14px;
    }
  }
`;
