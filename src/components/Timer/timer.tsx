import React from 'react';
import { secondsToTime } from '../../utils/seconds-to-time';

// styles
import Wrapper from './timer.styles';

interface Props {
  mainTime: number;
}

const Timer: React.FC<Props> = ({ mainTime }: Props) => {
  return <Wrapper>{secondsToTime(mainTime)}</Wrapper>;
};

export default Timer;
