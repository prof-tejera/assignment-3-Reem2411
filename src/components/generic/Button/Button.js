import MyPropTypes from "../../../utils/MyPropTypes";
import './Button.css';

const Button = (props) => {
    const {type, onClick, text, current} = props;
    return (
      <button className={`Default-button ${type} ${current ? 'current' : ''}`} onClick={onClick}>
        {text}
      </button>
    );
}

Button.propTypes = {
  type: MyPropTypes.type,
  text: MyPropTypes.text,
  onClick: MyPropTypes.onClick,
}
Button.defaultProps = {
  type: "",
  text: "Click Here",
}

export default Button;
