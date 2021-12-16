import React, { useContext, useEffect }  from "react";
import { useInterval } from '../../utils/hooks';
import Input from "../generic/Input/Input";
import TimerPanel from "../generic/TimerPanel";
import { vars } from '../../utils/helpers';
import { TimerContext } from '../../utils/TimerProvider';
import './Timers.css'

const XY = () => {

  // Get states and variables needed
  const {time, running, nRounds, currRound, setTimerType, setCurrRound, showTime,
     decrement, handleRounds, userInput, timerType} = useContext(TimerContext);
  const {xy} = vars;
  
  useEffect(() => {
    setTimerType(xy);
  }, [setTimerType, xy]);

  useInterval(() => {
    if (time > 0 && running === true){
      showTime(time);
      if (time === userInput && currRound === 1){
        decrement(time-1, timerType, false);
      }else{
        decrement(time, timerType, false);
      }
    } else if (time === 0 && running === true){
      handleRounds(currRound, nRounds); 
      if (currRound !== nRounds){
        setCurrRound(currRound+1);
      }  
    } 
  }, 1000);   
 
  return (
      
      <TimerPanel
      input={<>
        <Input
          type="work"
          placeholder="Time per Round (s)"
          value={time}

        />
        <Input
          type="rounds"
          placeholder="Rounds (s) "
          value={nRounds}
        />
        </>}
      >
      </TimerPanel>
  );
};

export default XY;
