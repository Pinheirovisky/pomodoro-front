import React, { useState } from 'react';

// components
import { PomodoroTimer } from 'components';

// styles
import Wrapper from './app.styles';

const App: React.FC = () => {
  const [working, setWorking] = useState(false);

  return (
    <Wrapper working={working}>
      <PomodoroTimer
        defaultPomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
        working={working}
        setWorking={setWorking}
      />
    </Wrapper>
  );
};

export default App;
