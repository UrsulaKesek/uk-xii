import React from "react";
import "./Toggle.css";

const Toggle = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="toggle-checkbox"
        id={`toggle-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="toggle-label"
        htmlFor={`toggle-new`}
      >
        <span className={`toggle-button`} />
      </label>
    </>
  );
};

export default Toggle;
