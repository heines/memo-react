import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const StyledModal = styled.div`
  display: block;
  position: fixed;
  left: calc(50% - 20vw);
  top: 5em;
  padding: 1em;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    height: 80vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
`;

const Modal = (props) => {
  const isModal = props.isModal;
  return (
    <div>
      {
        isModal &&
          <StyledModal>
            {props.children}
          </StyledModal>
      }
    </div>
  );
};

export default Modal;
