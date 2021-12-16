import Panel from "../Panel/Panel";
import React, {useContext}  from 'react';
import DisplayRounds from "../DisplayRounds/DisplayRounds";
import { TimerContext } from "../../../utils/TimerProvider";
import { vars } from "../../../utils/helpers";
import './DisplayTime.css';

const DisplayTime = () => {

    const {showingTimer, done, timerType} = useContext(TimerContext);
    let { roundProps} = false;
    const {xy, tabata} = vars; 

    if (timerType === xy || timerType === tabata){
        roundProps = true;
    } 
    return (
        <Panel>
            <div className={`Timer ${done ? 'congrats' : ''}`}>
                {done && <div className="donetimer">DONE</div>}  
                {roundProps && <DisplayRounds/>}                                
                <span>{showingTimer}</span>
            </div> 
            
        </Panel>
    );

};

export default DisplayTime;
