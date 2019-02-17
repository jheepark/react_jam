import React from "react";
import { ListStyled, UlStyled, ContainerStyled } from './NavStyled';
const Nav = () =>
  (
    <ContainerStyled>
      <UlStyled>
        <ListStyled>
          <a href="/">Home</a>
        </ListStyled>
        <ListStyled>
          <a href="/">Blog</a>
        </ListStyled>
        <ListStyled>
          <a href="/api">API</a>
        </ListStyled>
        <ListStyled>
          <a href="api/docs/">API Docs</a>
        </ListStyled>
      </UlStyled>
    </ContainerStyled>
  );

export default Nav
