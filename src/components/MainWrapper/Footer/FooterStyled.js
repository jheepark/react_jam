import styled from 'styled-components';
import instagram from '../../../assets/instagram.svg';
import linkedin from '../../../assets/linkedin.svg';
import twitter from '../../../assets/twitter.svg';

export const InstagramStyled = styled.div`
  background-image: url(${instagram});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 40px;
  width: 40px;
  @media(min-width: 500px) {
    height: 30px;
    width: 30px;
  }
`;

export const LinkedInStyled = styled.div`
  background-image: url(${linkedin});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 40px;
  width: 40px;
  @media(min-width: 500px) {
    height: 30px;
    width: 30px;
  }
`;

export const CtaStyled = styled.div`
  background-color: #2A323D;
  text-align: center;
  color: white;
  font-size: 24px;
  letter-spacing: 1.2px;
  font-family: 'Fjalla One', sans-serif;
  padding: 20px 0 80px;

  button {
    display: block;
    margin: 20px auto 0;
    background-color: #00a2ff;
    border: none;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    font-family: 'Noto Sans', sans-serif;
    letter-spacing: 1.2px;
    border-radius: 25px;
    width: 165px;
    height: 50px;
    box-shadow: 10px 16px 40px 0 rgba(63,116,181,0.46);
    :hover {
      background-color: #0095ff;
    }
  }
`;

export const TwitterStyled = styled.div`
  background-image: url(${twitter});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 40px;
  width: 40px;
  @media(min-width: 500px) {
    height: 30px;
    width: 30px;
  }
`;

export const FooterStyled = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 30% 40px;
  background-color: #2A323D;

  @media(min-width: 500px) {
    padding: 0 40% 40px;
  }
`;
