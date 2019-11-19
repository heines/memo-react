import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import IconCheckBox from './IconCheckBox';
import IconCheckBoxOutline from './IconCheckBoxOutline';

const StyledFrom = styled.form`
  width: 20vw;
  height: 20vw;
  min-width: 150px;
  min-height: 150px;
  padding: 1em;
  margin-left: 1em;
  margin-bottom: 1em;
  background: #eee;
  box-sizing: border-box;
  textarea {
    height: calc(100% - 5em);
    width: 100%;
    box-sizing: border-box;
  }
  input[type="checkbox"] {
    display: none;
  }
  label {
    width: 6em;
    display: flex;
    padding: 0.25em 0.5em;
    margin-left: auto;
    margin-right: 0;
    cursor: pointer;
    border-radius: 5%;
  }
`;

const Form = (props) => {
  return (
    <StyledFrom
      onSubmit={props.handleAdd}
    >
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
