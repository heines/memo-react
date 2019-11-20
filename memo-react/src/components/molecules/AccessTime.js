import React from 'react';
import styled from 'styled-components';
import TextInline from '../atoms/TextInline';
import IconAccessTime from '../atoms/IconAccessTime';

const StyledTextInline = styled(TextInline)`
  position: absolute;
  right: 1em;
  bottom: 0.5em;
  display: inline-flex;
  align-items: center;
`;

const AccessTime = (props) => {
  return (
    <StyledTextInline>
      <IconAccessTime />
      {props.children}
    </StyledTextInline>
  )
}

export default AccessTime;
