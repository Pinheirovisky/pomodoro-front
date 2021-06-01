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
  longRestTime: number;
  cycles: number;
  working: boolean;
  setWorking: (value: boolean) => void;
}

const audioStartWorking = new Audio('/sounds/bell-start.mp3');
const audioStopWorking = new Audio('/sounds/bell-finish.mp3');

const PomodoroTimer: React.FC<Props> = ({
  defaultPomodoroTime,
  working,
  setWorking,
  longRestTime,
  shortRestTime,
}: Props) => {
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [resting, setResting] = useState(false);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(defaultPomodoroTime);

    const playPromise = audioStartWorking.play();
    console.log(playPromise);
    // playPromise = audio;

    if (playPromise !== undefined) {
      playPromise
        .then(function () {
          console.log('Playing');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if (long) {
      setMainTime(longRestTime);
    } else {
      setMainTime(shortRestTime);
    }

    audioStopWorking.play();
  };

  return (
    <Wrapper>
      <h2>You are: working</h2>
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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </Details>
    </Wrapper>
  );
};

export default PomodoroTimer;
