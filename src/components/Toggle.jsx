import PropTypes from "prop-types";

const Toggle = ({ toggle, handleToggle }) => {
  return (
    // <div className={`toggle-container ${isDarkMode ? "" : "toggled"}`} onClick={handleToggle}>
    //   <div className={`toggle-button ${isDarkMode ? "bg-black" : "bg-white"}`} />
    // </div>
    <div className={`toggle-container ${toggle ? "" : "toggled"}`} onClick={handleToggle}>
      <div className="toggle-button" />
    </div>
  );
};

Toggle.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Toggle;
