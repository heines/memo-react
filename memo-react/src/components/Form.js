import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledFrom = styled.form`
  width: 20vw;
  height: 20vw;
  padding: 1em;
  margin-left: 1em;
  margin-bottom: 1em;
  background: #eee;
  textarea {
    height: calc(100% - 5em);
    width: 100%;
    box-sizing: border-box;
  }
  input[type="checkbox"] {
    display: none;
  }
  label {
    display: block;
    padding: 0.25em 0.5em;
    margin-left: auto;
    margin-right: 0;
    cursor: pointer;
  }
  input[type="checkbox"]:checked + label{
    background: #fae1e3;
  }
`;

const Form = (props) => {
  return (
    <StyledFrom
      onSubmit={props.handleAdd}
    >
      <input
        name="priority"
        type="checkbox"
        value="high"
        id="high"
      />
      <label
        for="high"
      >優先度高</label>
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
