import React, {Fragment} from "react";
import Wave from '../../Wave/Wave.js';
import {
  InstagramStyled,
  LinkedInStyled,
  TwitterStyled,
  FooterStyled,
  CtaStyled,
  AnchorStyled
} from './FooterStyled';
const Footer = () =>
  (
    <Fragment>
      <Wave background/>
      <CtaStyled>Want to work with us?
        <button>Let's talk!</button>
      </CtaStyled>
      <FooterStyled>
        <AnchorStyled href="#">
          <InstagramStyled />
        </AnchorStyled>
        <AnchorStyled href="#">
          <LinkedInStyled />
        </AnchorStyled>
        <AnchorStyled href="#">
          <TwitterStyled />
        </AnchorStyled>
      </FooterStyled>
    </Fragment>
  );

export default Footer
