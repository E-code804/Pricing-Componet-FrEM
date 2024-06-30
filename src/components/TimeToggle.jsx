import PropTypes from "prop-types";

import Toggle from "./Toggle";

const TimeToggle = ({ toggle, handleToggle }) => {
  return (
    <div className="flex space-x-7 items-center">
      <p className="text-light-grayish-blue">Annually</p>

      <Toggle toggle={toggle} handleToggle={handleToggle} />

      <p className="text-light-grayish-blue">Monthly</p>
    </div>
  );
};

TimeToggle.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default TimeToggle;
