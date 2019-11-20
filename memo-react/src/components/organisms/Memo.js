import React from 'react';
import styled from 'styled-components';
import Pad from '../atoms/Pad';
import Corner from '../atoms/Corner';
import AccessTime from '../molecules/AccessTime';

const StyledMemo = styled.div`
  width: 20vw;
  height: 20vw;
  min-width: 150px;
  min-height: 150px;
  position: relative;
  padding: 1em;
  margin-left: ${ props => props.marginLeft };
  margin-bottom: ${ props => props.marginBottom };
  box-sizing: border-box;
  background: ${ props => {
    switch(props.priority) {
      case 'high':
        return '#fae1e3';
      default:
        return '#e1f0fa';
    }
  } };
  overflow-wrap : break-word;
  overflow-x: auto;
`;

const Memo = (props) => {
  const todoMemos = props.todo.map((memo, i) => (
    <StyledMemo
      marginLeft = '1em'
      marginBottom = '1em'
      priority = {memo.priority}
      key = {i}
    >
      {memo.memo}
      <Corner onClick={() => props.handleDel(memo)} text="del"></Corner>
      <AccessTime>{memo.date}</AccessTime>
    </StyledMemo>
  ));
  return (
    <Pad>
      {todoMemos}
    </Pad>
  )
};

export default Memo;
