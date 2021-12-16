import React, {useContext, useEffect } from "react";
import Panel from "./Panel/Panel";
import Button from "./Button/Button";
import { TimerContext } from "../../utils/TimerProvider";
import {Link} from "react-router-dom";

const Queue = () => {
    const {showSettings, timersQ, running, timer, handleDelete} = useContext(TimerContext);
    
    const Edit = <Link to="/add">
                  <Button 
                  type="edit" 
                  text = 'Edit'
                  /> </Link>
    useEffect(() => {
      }, [timersQ, timer]);

    return (
        <Panel type="queue">
            <Panel type="queuelist">
                <h2> Queue </h2>
                {!showSettings && !running && timersQ.length > 0 && Edit}
                {timersQ.map((timer, i) => {
                    timer.id = i;
                    return(
                    <Panel type="queueTimer" key = {i}>
                        {timer.timerType} - {timer.total}s 
                        {showSettings &&  <Button 
                            type="Delete" 
                            text="X" 
                            onClick = {() => {handleDelete(timer.id);}}
                        />}
                    </Panel>
                )})} 
            </Panel>
      </Panel>
    );
}

export default Queue;
