import styled from 'styled-components';

const Wrapper = styled.article`
  background: #fff;
  margin: 50px 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  h2 {
    font-size: 24px;
    text-align: center;
  }
`;

const Controls = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Details = styled.section`
  margin: 20px 0;
`;

export default Wrapper;
export { Controls, Details };
