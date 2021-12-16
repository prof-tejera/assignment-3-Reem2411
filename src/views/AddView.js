import React, { useState, useContext, useEffect } from "react";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import Panel from "../components/generic/Panel/Panel";
import Button from "../components/generic/Button/Button";
import { TimerContext } from "../utils/TimerProvider";
import Queue from "../components/generic/Queue";
function App() {

  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];
  const {showSettings, setShowSettings} = useContext(TimerContext);

  const [state, setState] = useState(0);
  useEffect(() => {
    setShowSettings(true);
  }, [setShowSettings]);

  return (  
  
    <Panel type="outer">
      <Panel type="timerslist">
        {timers.map((timer, i) => (
            <Button 
            key = {i}
            onClick={() => {
              setState(i);
            }}
            current={i === state}
            type="list"
            text={timer.title}
            /> 
          ))}  
      </Panel>
      <Queue showSettings={showSettings}/>
      {timers[state].C}
   </Panel>   
  );
}

export default App;
