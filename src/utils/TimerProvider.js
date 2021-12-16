import { vars } from "./helpers";
import React, { useState} from 'react';
import { secondsToTime } from "./helpers";

export const TimerContext = React.createContext({});

const TimerProvider = ({ children }) => {
  const {stopwatch, tabata} = vars; 
  
  // Moving all states in individual timers to here 
  const [ timerType, setTimerType] = useState(stopwatch); 
  const [ running, setRunning ] = useState(false); 
  const [ time, setTime ] = useState(0); 
  const [ userInput, setUserInput] = useState(0);  
  const [ showingTimer, setShowingTimer] = useState("0:0:0");
  const [ pause, setPause] = useState(false);
  const [ done, setDone] = useState(false);
  const [ nRounds, setNRounds ] = useState(1);
  const [ currRound, setCurrRound ] = useState(1);
  const [ restTime, setRestTime ] = useState(0); 
  const [ restInput, setRestInput] = useState(0);
  const [ rest, setRest ] = useState(false); 
  const [showSettings, setShowSettings] = useState(true);
  const [timersQ, setTimersQ] = useState([]);
  const [timer, setTimer] = useState(0);
  const defaultTimer = {
    timerType: "Add Timers to Queue",
    config: {
      work: 0,
      rest: 0, 
      rounds: 1, 
    },
    total: 0, 
  }
  const [currentTimer, setCurrentTimer] = useState(defaultTimer);
  const [elapsed, setElapsed] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [totalWorkout , setTotalWorkout] = useState(0);
  const [remainingHMS, setRemainingHMS] = useState(secondsToTime(remaining));
  const [elapsedHMS, setElapsedHMS] = useState(secondsToTime(elapsed));

  // Decrementing 
  const decrement = (time, timerType, rest) => {
    handleDisplayTime(time, timerType, rest);
    if(timerType === tabata && rest === true){
      setRestTime(time-1);
      setRest(true);
    } else if (rest === false) {
      setTime(time-1);
    }
  }

  const showTime = (time) => {
    const timeHMS = secondsToTime(time ? time : 0)
    setShowingTimer(timeHMS);
  }

  const handleDisplayTime = (time, timerType, rest) => {
    showTime(time);
    if(timerType === tabata && rest === true){
      setRestTime(time);
    } else if (rest === false ){
      if (timerType === stopwatch){
        setTime(time + 1);
      } else{
        setTime(time);
      }
    }
    if (running === true){
      const nextElapsed = elapsed+1 < totalWorkout ? elapsed+1 : totalWorkout;
      const nextRemaining = remaining-1 > 0 ? remaining-1 : 0;
      setElapsed(nextElapsed);
      setElapsedHMS(secondsToTime(nextElapsed));
      setRemaining(nextRemaining);
      setRemainingHMS(secondsToTime(nextRemaining));
    }
  }

  

  const handleReset = () => {
    setRunning(false); 
    setPause(false);
    setDone(false); 
    setRest(false);   
    setTimer(0);
    let timer = null; 
    if (timersQ.length === 0){
      timer = defaultTimer;
    } else {
      timer = timersQ[0]
    }
    setTimerType(timer.timerType);
    setRestTime(timer.config.rest);   
    setCurrentTimer(timer); 
    switch (timer.timerType){
      case stopwatch:
        setTime(0);
        showTime(0);
        break;
      default:
        setTime(timer.config.work);
        showTime(timer.config.work);
        setCurrRound(1);  
    }
    setElapsed(0);
    setElapsedHMS(secondsToTime(0));
    setRemaining(totalWorkout);
    setRemainingHMS(secondsToTime(totalWorkout));
  }

  const handleStart = () => {
    setRunning(true);
  }
 
  const handleAddTimer = ()=> {
    const newTimer = {
      id: 1000,
      timerType: timerType,
      config: {
        work: userInput,
        rest: restInput, 
        rounds: nRounds, 
      },
      total: (userInput+restInput)*nRounds, 
    };

    const newTimers= [...timersQ, newTimer];
    setTotalWorkout(totalWorkout+newTimer.total);
    setRemaining(remaining + newTimer.total);
    setTimersQ(newTimers);
    setRestInput(0);
    setNRounds(1);
  };

  const nextTimer = () => {
    if (timer+1 === timersQ.length){
      handleDone();
    } else {
      const nextTimerIdx = timer+1;
      switch (timersQ[nextTimerIdx].timerType){
        case stopwatch:
          setTime(0);
          break;
        default:
          setTime(timersQ[nextTimerIdx].config.work);
          setCurrRound(1);  
      }
      setCurrentTimer(timersQ[nextTimerIdx]);
      setTimerType(timersQ[nextTimerIdx].timerType);
      setUserInput(timersQ[nextTimerIdx].config.work);
      setNRounds(timersQ[nextTimerIdx].config.rounds);
      setRestInput(timersQ[nextTimerIdx].config.rest);
    }
    setTimer(timer+1);
  }
  
  const handleGo = () => {
    handleReset()
    if (timersQ.length !== 0){
      const nextTimerIdx = 0; 
      switch (timersQ[nextTimerIdx].timerType){
        case stopwatch:
          setTime(0);
          break;
        default:
          setTime(timersQ[nextTimerIdx].config.work);
          setCurrRound(1);  
      }
      setCurrentTimer(timersQ[nextTimerIdx]);
      setTimerType(timersQ[nextTimerIdx].timerType);
      setUserInput(timersQ[nextTimerIdx].config.work);
      setNRounds(timersQ[nextTimerIdx].config.rounds);
      setRestInput(timersQ[nextTimerIdx].config.rest);
      
      if (timer >= 0 ){
        handleStart();
      }
    }
  }

  const handlePause = () => {
    setPause(true);
    setRunning(false); 
  }

  const handleDone = () => {
    setDone(true);
    setRunning(false);
    handleDisplayTime(userInput, timerType, false);
    setRest(false);
  }
  
  const handleRounds = (currRound, nRounds) => {
    if (currRound < nRounds){
      setTime(userInput);
      setRestTime(restInput);
      handleDisplayTime(userInput, timerType, false);
    } else {
      nextTimer();
    }
  }

  const handleDelete = (id) => {
    const val = totalWorkout - timersQ[id].total
    setTotalWorkout(val);
    setRemaining(val);
    setRemainingHMS(secondsToTime(val));
    const newTimersQ = timersQ.filter((item) => item.id !== id);
    setTimersQ(newTimersQ);
};


  return (
    <TimerContext.Provider
      value={{ 
        handleDelete,
        timerType,
        running,
        time, 
        setRestTime, 
        restTime, 
        rest,
        restInput, 
        setRestInput,
        setRest,
        nRounds,
        setNRounds,
        currRound, 
        setCurrRound,
        decrement, 
        setTimerType,
        setTime, 
        handleStart,
        handlePause, 
        handleDone, 
        handleReset,
        userInput, 
        setUserInput, 
        handleDisplayTime,
        showingTimer,
        setShowingTimer,
        setRunning,
        pause, 
        setPause,
        done,
        setDone, 
        handleRounds, 
        showSettings,
        setShowSettings,
        timersQ, 
        setTimersQ,
        handleAddTimer,
        handleGo,
        currentTimer,
        nextTimer,
        timer,
        elapsed,
        setElapsed,
        remaining,
        setRemaining,
        showTime, 
        remainingHMS,
        elapsedHMS,
      }}>
        {children}
    </TimerContext.Provider>);   
};
  
export default TimerProvider;


