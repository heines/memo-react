import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const StyledModal = styled.div`
  display: block;
  position: fixed;
  left: calc(50% - 10vw);
  top: 5em;
  padding: 1em;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const Modal = (props) => {
  const isModal = props.isModal;
  return (
    <div>
      {
        isModal &&
          <StyledModal>
            {props.children}
            <Button onClick={props.handleShowModal}>Close</Button>
          </StyledModal>
      }
    </div>
  );
};

export default Modal;
