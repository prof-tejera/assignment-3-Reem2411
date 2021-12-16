
import { useContext  } from 'react';
import { TimerContext } from '../../../utils/TimerProvider.js';
import Button from '../Button/Button.js';
import './TimerButtons.css'
import {Link} from "react-router-dom";


const TimerButtons = () => {

  // Get states from context 
  const {running, handleStart, handlePause, pause, handleDone, showSettings, timersQ,
     handleReset, timerType, done, userInput, handleAddTimer, handleGo} = useContext(TimerContext);

  // Create variables for buttons 
  const Start = <Button 
                  text="Start" 
                  onClick = {() => {
                    handleStart();
                  }}
                  />

  const Pause = <Button 
                  text="Pause" 
                  onClick = {() => {
                    handlePause();
                  }}
                  />
  const Reset = <Button 
                  text="Reset" 
                  onClick = {() => {
                    handleReset(timerType, userInput);
                  }}
                  />
  const Done = <Button 
                  text="Done" 
                  onClick = {() => {
                    handleDone();
                  }}
                  />
  const Resume = <Button 
                  text="Resume" 
                  onClick = {() => {
                    handleStart();
                  }}
                  />
  const Add = <Button 
                  text="Add" 
                  onClick = {() => {
                    handleAddTimer();
                  }}
                  />
  const Go = <Link to="/">
            <Button 
              text="Go"
              onClick = {() => {
                handleGo();
              }}/>
            </Link>
  const StartQueue = <Link to="/add">
                      <Button 
                        type = "start"
                        text="Start Queue"
                        />
                      </Link>
  const lenEqZero = timersQ.length === 0; 
  return (
      <div className="ButtonsPanel">
        <div className="TimerButton">
          {!showSettings && lenEqZero&& StartQueue}
          {showSettings && Add }
          {showSettings && Go}
          {!showSettings && !running && !pause && !done && !lenEqZero && Start}
          {!showSettings && !running && pause && !done &&  !lenEqZero && Resume}
          {!showSettings && running && Pause}
          {!showSettings && running && Done}
          {!showSettings && !lenEqZero && Reset}
        </div>
      </div>

    );
}
  
export default TimerButtons;
  