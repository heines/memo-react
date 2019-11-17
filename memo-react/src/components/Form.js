import React from 'react';
import styled from 'styled-components';

const Form = (props) => {
  return (
    <div>
      <form
        onSubmit={props.handleAdd}
      >
        <textarea
          name="memo"
          placeholder="memo"
        ></textarea>
        <button>submit</button>
      </form>
    </div>
  )
};

export default Form;
