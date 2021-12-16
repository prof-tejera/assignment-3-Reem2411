import { useContext } from 'react';
import MyPropTypes from "../../../utils/MyPropTypes";
import Button from '../Button/Button';
import { TimerContext } from '../../../utils/TimerProvider';
import './Input.css';

const Input = (props) => {
  const {userInput, setUserInput, setNRounds, nRounds, restInput, setRestInput} = useContext(TimerContext);
  const {placeholder, type, handleOnChange} = props;
  const inc = () => {
    if (type === "work"){
      setUserInput(parseInt(userInput)+1);
    } else if (type === "rounds"){
      setNRounds(parseInt(nRounds)+1);
    } else if (type === "rest"){
      setRestInput(parseInt(restInput)+1);
    }
  };  

  let dec = () => {
    if (type === "work"){
      const parsed = parseInt(userInput)-1;
      setUserInput(parsed > 0 ? parsed : 0);
    } else if (type === "rounds"){
      const parsed = parseInt(nRounds)-1;
      setNRounds(parsed > 0 ? parsed : 1);
    } else if (type === "rest"){
      const parsed = parseInt(restInput)-1;
      setRestInput(parsed > 0 ? parsed : 1);
    }
  };

  let val = ""; 
  switch (type){
    case "work":
      val = userInput;
      break;
    case "rounds":
      val = nRounds;
      break;
    case "rest":
      val = restInput;
      break;
    default:
      break;
  }
  return (
    <div className="inputrow"> 
      <label>{placeholder}</label>

      <div className="inputdiv">
        <input
        className={`Default-input`}
        value={val}
        type={type}
        onChange={handleOnChange}
        readOnly
        />
      </div>
      <div className="buttondiv">
        <Button type="counter" text="+" onClick={inc}/>
        <Button type="counter" text="-" onClick={dec}/>
      </div>
    </div>
  );
}

Input.propTypes = {
  placeholder: MyPropTypes.placeholder,
  type: MyPropTypes.type
}
Input.defaultProps = {
  placeholder: "Enter text",
  type: ""
}

export default Input;

