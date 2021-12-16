import { useContext } from "react";
import { TimerContext } from "../../utils/TimerProvider";
import TimerButtons from "./TimerButtons/TimerButtons";
import DisplayTime from "./DisplayTime/DisplayTime";
import '../timers/Timers.css'


const Timerpanel = (props) => {
  const {input} = props;
  const {showSettings} = useContext(TimerContext);

    return(
      <div className="outerPanel">
        <div className="flip-card">
          <div className="flip-card-inner">
            {!showSettings && 
                <div className="DisplayTime">
                    <DisplayTime/>
                </div>         
            }
            {showSettings && 
                <div className="inputs">
                  {input}
                </div>
            }
          </div> 
      </div>
      <TimerButtons/>     
      </div>
    );  
};

export default Timerpanel;
