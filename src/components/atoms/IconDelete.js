import React from 'react';
import styled from 'styled-components';

const IconDeleteSvg = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={props.className}>
    <path fillRule="evenodd" fill="#999" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
  </svg>
)
const IconDelete = styled(IconDeleteSvg) `
  display: block;
`

export default IconDelete;