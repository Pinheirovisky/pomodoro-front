import React from 'react';

// components
import { PomodoroTimer } from 'components';

// styles
import Wrapper from './app.styles';

function App(): JSX.Element {
  return (
    <Wrapper>
      <PomodoroTimer
        defaultPomodoroTime={1500}
        shortRestTime={300}
        lonRestTime={900}
        cycles={4}
      />
    </Wrapper>
  );
}

export default App;
