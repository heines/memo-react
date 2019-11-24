import styled from 'styled-components';

const Button = styled.button`
  width: ${props => props.width ? props.width : '100%'};
  padding: 0.5em;
  background: ${props => props.color};
  border: ${props => props.border ? props.border : 'transparent'} 1px solid;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
`;

export default Button;
