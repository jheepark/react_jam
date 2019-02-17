import styled from 'styled-components';
import weirdo from '../../assets/weirdo.jpg';
import astronomy from '../../assets/astronomy.jpg';

export const BlogMainStyled = styled.div`
  padding: 100px 0 50px;
`;

export const TopWrapperStyled = styled.div`
  max-width: 740px;
  margin: auto;
  padding: 0 20px;
`;

export const TitleStyled = styled.h1`
  font-family: 'Fjalla One', sans-serif;
  font-size: 2rem;
  text-align: left;
  color: black;
  margin: 0;
  display: inline-block;
  span {
    color: #00d2ff;
  }
`;

export const ProfileImageStyled = styled.div`
  display: flex;
  border-radius: 50px;
  background-image: ${props => props.img ? `url(${props.img})` : `url(${weirdo})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  margin-right: 16px;
`;

export const ContentStyled = styled.section`
  max-width: 740px;
  padding: 0 20px;
  margin: 48px auto 0;
  color: #808285;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
`;

export const DetailsSectionStyled = styled.div`
  display: flex;
  margin: 24px 0;
  h1 {
    margin: 0;
    color: #3e3f3e;
    font-size: 22px;
  }
  p {
    margin: 5px 0;
    font-size: 12px;
    color: #808285;
  }
`;

export const HeroStyled = styled.div`
  background-image: ${props => props.hero ? `url(${props.hero})` : `url(${astronomy})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 280px;
  width: 100%;
`;
