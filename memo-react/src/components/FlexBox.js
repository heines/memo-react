import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
`;

export default FlexBox;
