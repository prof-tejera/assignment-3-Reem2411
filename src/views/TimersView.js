import React, { useContext, useEffect } from "react";
import Countdown from "../components/timers/Countdown";
import Stopwatch from "../components/timers/Stopwatch";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import Panel from "../components/generic/Panel/Panel";
import { TimerContext } from "../utils/TimerProvider";
import Queue from "../components/generic/Queue";
import {vars} from "../utils/helpers";

function App() {

  const {showSettings, setShowSettings, currentTimer, timerType,
    elapsedHMS, remainingHMS} = useContext(TimerContext);
  const {stopwatch, countdown, xy, tabata} = vars; 

  useEffect(() => {
    setShowSettings(false);
  }, [ setShowSettings, timerType]);

  const Timer = () => {
    const {timerType} = currentTimer;
    switch (timerType){
      case countdown:
        return <Countdown/>;
      case xy:
        return <XY/>;
      case tabata:
        return <Tabata/>;
      case stopwatch:
        return <Stopwatch/>;
      default: 
        return <Stopwatch/>;
  }}


  return (  
  
    <Panel type="outer">
      <Panel type="timerslist">
        <Panel type="elapsed"> 
        <p className="hmsg">{elapsedHMS}</p> <p className='Timertitle'> - {currentTimer.timerType} - </p> 
        <p className="hmsr">{remainingHMS}</p>
        </Panel>  
      </Panel>
        <Queue showSettings={showSettings}/>
      <Timer />
   </Panel>   
  );
}

export default App;
