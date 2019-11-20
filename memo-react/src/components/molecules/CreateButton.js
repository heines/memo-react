import React from 'react';
import styled from 'styled-components';
import IconCreate from '../atoms/IconCreate';
import FlexBox from '../atoms/FlexBox';

const StyledFlexBox = styled(FlexBox)`
  display: inline-flex;
  padding: 1em;
  cursor: pointer;
  border-radius: 0.3em;
  &:hover {
    background: #CCC;
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
