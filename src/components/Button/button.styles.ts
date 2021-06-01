import styled from 'styled-components';

interface Props {
  working?: boolean;
}

const Wrapper = styled.button<Props>`
  background: ${(props) => (props.working ? '#EF5D50' : '#41e1ba')};
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 25px;
  color: ${(props) => (props.working ? '#FFF' : '#000a')};
  transition: background-color 300ms ease-in-out;
  margin: 20px auto;
`;

export default Wrapper;
