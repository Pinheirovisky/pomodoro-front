import styled from 'styled-components';

interface Props {
  working: boolean;
}

const Wrapper = styled.main<Props>`
  background-color: ${(props) => (props.working ? '#ef5d50' : '#41e1ba')};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  font-family: sans-serif;
  transition: background-color 300ms ease-in-out;
  line-height: 1.5;
  padding: 15px;
`;

export default Wrapper;
