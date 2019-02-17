import styled from 'styled-components';

export const ListStyled = styled.li`
  width: auto;
  padding: 20px;
  a {
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    :hover, :active {
      color: #00a2ff;
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
