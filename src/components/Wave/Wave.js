import React from "react";
import { WaveStyled, SvgStyled } from './WaveStyled';

class Wave extends React.Component {
  render() {
    return (
      <WaveStyled>
        <SvgStyled viewBox="0 0 500 150" preserveAspectRatio="none" background={this.props.background}>
          <path d="M-1.09,103.13 C135.20,149.50 271.50,-25.16 502.55,106.08 L506.19,-2.45 L-1.09,-1.47 Z"/>
        </SvgStyled>
      </WaveStyled>
    )
  }
}

export default Wave
