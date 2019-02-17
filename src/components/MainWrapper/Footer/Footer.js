import React, {Fragment} from "react";
import Wave from '../../Wave/Wave.js';
import { InstagramStyled, LinkedInStyled, TwitterStyled, FooterStyled, CtaStyled } from './FooterStyled';
const Footer = () =>
  (
    <Fragment>
      <Wave background/>
      <CtaStyled>Want to work with us?
        <button>Let's talk!</button>
      </CtaStyled>
      <FooterStyled>
        <InstagramStyled />
        <LinkedInStyled />
        <TwitterStyled />
      </FooterStyled>
    </Fragment>
  );

export default Footer
