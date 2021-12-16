import MyPropTypes from "../../../utils/MyPropTypes";
import './panel.css';

const Panel = (props) => {
  const {type, children} = props;
    return <div className={`Default-panel ${type}`}>{children}</div>;
}

Panel.propTypes = {
  type: MyPropTypes.type,
  children: MyPropTypes.children,
}

Panel.defaultProps = {
  type: "",
}

export default Panel;
