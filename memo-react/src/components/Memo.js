import React from 'react';
import styled from 'styled-components';

const StyledMemo = styled.div`
  width: 20vw;
  height: 20vw;
  padding: 1em;
  background: #e1f0fa;
  overflow-x: auto;
`;

const Memo = (props) => {
  const todo = props.todo;
  const todoMemos = todo.map((memo) => (
    <StyledMemo>{memo.memo}</StyledMemo>
  ));
  return (
    <div>
      {todoMemos}
    </div>
  )
};

export default Memo;
