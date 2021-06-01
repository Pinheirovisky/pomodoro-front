import styled from 'styled-components';

const Wrapper = styled.article`
  background: #fff;
  max-width: 625px;
  min-width: 305px;
  height: 420px;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 15px;

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
