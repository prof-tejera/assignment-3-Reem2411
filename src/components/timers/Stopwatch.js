import React, { useContext, useEffect } from 'react';
import { useInterval } from '../../utils/hooks';
import Input from "../generic/Input/Input";
import TimerPanel from "../generic/TimerPanel";
import { vars } from '../../utils/helpers';
import { TimerContext } from '../../utils/TimerProvider';
import './Timers.css'

const Stopwatch = () => {

  // Get states and variables needed
  const {time, userInput, running, setTimerType, timerType, nextTimer, 
     handleDisplayTime} = useContext(TimerContext);
  const {stopwatch} = vars;
  
  useEffect(() => {
    setTimerType(stopwatch);
  }, [setTimerType, stopwatch]);

  useInterval(() => {
    if (time <= userInput && running === true){
      if (time === 0){
        handleDisplayTime(time+1, timerType, false);
      }else{
        handleDisplayTime(time, timerType, false);
      }
    } else if ((time > userInput && running === true )|| (userInput === 0 && running === true )){
      nextTimer();
    } 
  }, 1000);   
  

  return (
      <TimerPanel
      input={<Input
        type="work"
        placeholder="End Time (s)"
        value={time}
        />}
      >
      </TimerPanel>
  );

}

export default Stopwatch;
