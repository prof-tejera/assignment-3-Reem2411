import React, {useContext} from "react";
import { TimerContext } from "../../../utils/TimerProvider";

const DisplayRounds = () => {

    const {currRound, nRounds, rest} = useContext(TimerContext);
    return (
        <div className="roundsintimer">
            <p> Round {currRound} of {nRounds} </p>
            {rest && <p>REST</p>}
        </div>
    )
}

export default DisplayRounds;