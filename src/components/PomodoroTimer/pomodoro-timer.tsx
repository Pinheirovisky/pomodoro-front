import React, { useState } from 'react';
import { useInterval } from '../../hooks/use-interval';
import { secondsToTime } from '../../utils/seconds-to-time';

interface Props {
  defaultPomodoroTime: number;
}

const PomodoroTimer: React.FC<Props> = ({ defaultPomodoroTime }: Props) => {
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Olá Mundo! {secondsToTime(mainTime)}</div>;
};

export default PomodoroTimer;
