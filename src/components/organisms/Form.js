import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import IconCheckBox from '../atoms/IconCheckBox';
import IconCheckBoxOutline from '../atoms/IconCheckBoxOutline';
import FlexBox from '../atoms/FlexBox';
import COLOR from '../_const/COLOR';

const StyledFrom = styled.form`
  width: 50vw;
  height: 30vw;
  min-width: 150px;
  min-height: 150px;
  padding: 1em;
  background: #fff;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: calc(100% - 2em);
  }
  textarea {
    height: calc(100% - 5em);
    width: 100%;
    padding: .5em;
    box-sizing: border-box;
    font-size: 1.5em;
    border-radius: .2em;
    border: 1px solid #CCC;
  }
  input[type="checkbox"] {
    display: none;
  }
  label {
    width: 6em;
    display: flex;
    align-items: center;
    padding: 0.25em 0.5em;
    margin-left: auto;
    margin-right: 0;
    cursor: pointer;
    border-radius: 5%;
  }
`;

const StyledButton = styled(FlexBox)`
  display: inline;
  align-items: center;
  padding: 0.3em 1em;
  margin: 1em 0.5em 1em 0;
  cursor: pointer;
  border-radius: 0.3em;
  border: 1px solid #CCC;
  transition: background .2s, border .2s;
  &:hover {
    background: #CCC;
    border: 1px solid transparent;
    color: #FFF;
  }
`;

const Form = (props) => {
  return (
    <StyledFrom
      onSubmit={props.handleAdd}
    >
      <FlexBox>
        <StyledButton
          onClick={props.handleShowModal}
        >Close</StyledButton>
        <label
          htmlFor="high"
        ><input
          name="priority"
          type="checkbox"
          value="high"
          id="high"
          onClick={props.handlePriority}
        />{
          (() => {
            if(props.priority) {
              return <IconCheckBox />
            } else {
              return <IconCheckBoxOutline />
            }
          })()
        }優先度高</label>
      </FlexBox>
      <textarea
        name="memo"
        placeholder="memo"
        priority="high"
      ></textarea>
      <Button>submit</Button>
    </StyledFrom>
  )
};

export default Form;
