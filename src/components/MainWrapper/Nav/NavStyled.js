import styled from 'styled-components';

export const ListStyled = styled.li`
  width: auto;
  padding: 20px;
  a {
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    position: relative

    &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: #00a2ff;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: .25s linear;
  }

  :hover {
    color: #00a2ff;
  }

  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }

  }
`;

export const UlStyled = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0 0 40px 0;
  padding: 0;
  justify-content: flex-end;
`;

export const ContainerStyled = styled.div`
  position: absolute;
  width: 100%;
`;
