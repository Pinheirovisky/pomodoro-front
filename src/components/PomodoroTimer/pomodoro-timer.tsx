import React, { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { secondsToTime } from 'utils/seconds-to-time';
import { useInterval } from '../../hooks/use-interval';

// components
import { Button } from '../Button';
import { Timer } from '../Timer';

// styles
import Wrapper, { Controls, Details } from './pomodoro-timer.styles';

const audioStartWorking = new Audio('/sounds/bell-start.mp3');
const audioStopWorking = new Audio('/sounds/bell-finish.mp3');
interface Props {
  defaultPomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
  working: boolean;
  setWorking: (value: boolean) => void;
}

const PomodoroTimer: React.FC<Props> = ({
  defaultPomodoroTime,
  working,
  setWorking,
  longRestTime,
  shortRestTime,
  cycles,
}: Props) => {
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManagers] = useState(
    new Array(cycles - 1).fill(true),
  );
  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(defaultPomodoroTime);
    audioStartWorking.play();
  }, [
    setTimeCounting,
    setWorking,
    setResting,
    setMainTime,
    defaultPomodoroTime,
  ]);

  const configureRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);

      if (long) {
        setMainTime(longRestTime);
      } else {
        setMainTime(shortRestTime);
      }

      audioStopWorking.play();
    },
    [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      longRestTime,
      shortRestTime,
    ],
  );

  useEffect(() => {
    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setCyclesQtdManagers(new Array(cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    configureRest,
    configureWork,
    setCyclesQtdManagers,
    cyclesQtdManager,
    numberOfPomodoros,
    cycles,
    completedCycles,
  ]);

  return (
    <Wrapper>
      <h2>Voce está: {working ? 'Trabalhando' : 'Descansando'}</h2>
      <Timer mainTime={mainTime} />
      <Controls>
        <Button working={working} onClick={() => configureWork()}>
          Work
        </Button>
        <Button working={working} onClick={() => configureRest(false)}>
          Descansar
        </Button>
        {(working || resting) && (
          <Button
            working={working}
            onClick={() => setTimeCounting(!timeCounting)}
          >
            {timeCounting ? 'Pause' : 'Play'}
          </Button>
        )}
      </Controls>

      <Details>
        <p>Ciclos concluídos: {completedCycles}</p>
        <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluídos: {numberOfPomodoros}</p>
      </Details>
    </Wrapper>
  );
};

export default PomodoroTimer;
