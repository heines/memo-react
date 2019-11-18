import React from 'react';
import styled from 'styled-components';
import COLOR from './COLOR';

const IconCheckBoxOutlineSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={props.className}>
    <path fillRule="evenodd" fill={COLOR.CAUTION} d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </svg>
)
const IconCheckBoxOutline = styled(IconCheckBoxOutlineSvg) `
  display: block;
`

export default IconCheckBoxOutline;
