import React from 'react';

import { PomodoroTimer } from './components';

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={3660} />
    </div>
  );
}

export default App;
