import React from 'react';
import styled from 'styled-components';
import IconCreate from '../atoms/IconCreate';
import FlexBox from '../atoms/FlexBox';
import COLOR from '../_const/COLOR';

const StyledFlexBox = styled(FlexBox)`
  display: inline-flex;
  align-items: center;
  padding: 1em;
  margin: 0.5em 1em;
  cursor: pointer;
  border-radius: 0.3em;
  border: 1px solid ${COLOR.CREATE};
  transition: background .2s, border .2s;
  &:hover {
    background: ${COLOR.CREATEBG};
    border: 1px solid transparent;
  }
`;

const CreateButton = (props) => {
  return (
    <StyledFlexBox onClick={props.handleShowModal}>
      <IconCreate />
      Create
    </StyledFlexBox>
  );
}

export default CreateButton;
