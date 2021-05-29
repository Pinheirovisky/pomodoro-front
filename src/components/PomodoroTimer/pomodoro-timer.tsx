import React, { useState } from 'react';
import { useInterval } from '../../hooks/use-interval';

interface Props {
  defaultPomodoroTime: number;
}

const PomodoroTimer: React.FC<Props> = ({ defaultPomodoroTime }: Props) => {
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Olá Mundo! {mainTime}</div>;
};

export default PomodoroTimer;
