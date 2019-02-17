import styled from 'styled-components';

export const WaveStyled = styled.div`
  height: 150px;
  overflow: hidden;
`;

export const SvgStyled = styled.svg`
  height: 100%;
  width: 100%;
  transform: rotate(180deg);
  path {
    stroke: none;
    fill: ${props => props.background ? "#2A323D" : "white"};
  }
`;
