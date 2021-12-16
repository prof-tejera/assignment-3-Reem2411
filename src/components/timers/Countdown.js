// import React from "react";
import React, { useContext, useEffect } from 'react';
import { useInterval } from '../../utils/hooks';
import Input from "../generic/Input/Input";
import TimerPanel from "../generic/TimerPanel";
import { vars } from '../../utils/helpers';
import { TimerContext } from '../../utils/TimerProvider';
import './Timers.css'

const Countdown = () => {

  // Get states from context 
  const {time, running,
     setTimerType, decrement, nextTimer,
      userInput, timerType} = useContext(TimerContext);
  const {countdown} = vars;

  // Countdown functionality 
  useEffect(() => {
    setTimerType(countdown);
  }, [countdown, setTimerType]);

  useInterval(() => {
    if (time > 0 && running === true ){
      if (time === userInput){
        decrement(time-1, timerType, false);
      }else{
        decrement(time, timerType, false);
      }
    } else if (time === 0 && running === true ){
      nextTimer();
    }
  }, 1000);   
  
  return (
      
      <TimerPanel
      input={<Input
              type="work"
              value={time}
              placeholder="Work Time (s)"
              />}
      >
      </TimerPanel>
  );
}

export default Countdown;
