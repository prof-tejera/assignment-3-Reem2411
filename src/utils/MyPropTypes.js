// Its useful to create our own PropTypes so we
// don't have to repeat the definition everywhere
import PropTypes from "prop-types";
const MyPropTypes = {

    // Functions used throughout 
    onClick: PropTypes.func,

    // Button props 
    type: PropTypes.string,
    text: PropTypes.string, 

    // Input props
    placeholder: PropTypes.string,

    // Panel props
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
  };

export default MyPropTypes;