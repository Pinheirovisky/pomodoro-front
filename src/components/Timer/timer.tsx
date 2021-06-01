import React from 'react';
import { secondsToMinutes } from '../../utils/seconds-to-minutes';

// styles
import Wrapper from './timer.styles';

interface Props {
  mainTime: number;
}

const Timer: React.FC<Props> = ({ mainTime }: Props) => {
  return <Wrapper>{secondsToMinutes(mainTime)}</Wrapper>;
};

export default Timer;
