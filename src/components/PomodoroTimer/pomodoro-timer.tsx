import React, { useState } from 'react';
import { useInterval } from '../../hooks/use-interval';

// components
import { Button } from '../Button';
import { Timer } from '../Timer';

// styles
import Wrapper from './pomodoro-timer.styles';

interface Props {
  defaultPomodoroTime: number;
}

const PomodoroTimer: React.FC<Props> = ({ defaultPomodoroTime }: Props) => {
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <Wrapper>
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button>Teste</Button>
    </Wrapper>
  );
};

export default PomodoroTimer;
