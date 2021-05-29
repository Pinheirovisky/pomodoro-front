import React, { useState } from 'react';
import { useInterval } from '../../hooks/use-interval';

// components
import { Button } from '../Button';
import { Timer } from '../Timer';

// styles
import Wrapper, { Controls, Details } from './pomodoro-timer.styles';

interface Props {
  defaultPomodoroTime: number;
  shortRestTime: number;
  lonRestTime: number;
  cycles: number;
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
      <Controls>
        <Button>Teste</Button>
        <Button>Teste</Button>
        <Button>Teste</Button>
      </Controls>

      <Details>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </Details>
    </Wrapper>
  );
};

export default PomodoroTimer;
