import styled from 'styled-components';

const Corner = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 20px solid transparent;
  border-left: 20px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition-property: border;
  transition-duration: .2s;
  &::after {
    position: absolute;
    left: -15px;
    bottom: 0.5em;
    content: "${props => props.text}";
    opacity: 0;
    transition-property: opacity;
    transition-duration: .2s;
    transition-delay: 0.1s;
    color: #ff5764;
    font-size: 0.7em;
  }
  &:hover {
    border-left: 20px solid rgba(0, 0, 0, 00);
  }
  &:hover::after {
    opacity: 1;
  }
`;

export default Corner;
