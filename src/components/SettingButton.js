import React from "react";

const SettingButton = ({ isMenuOpen, openMenuHandler, closeMenuHandler }) => {
  const targetHandler = isMenuOpen ? closeMenuHandler : openMenuHandler;
  return (
    <div>
      <button onClick={targetHandler}>menu</button>
    </div>
  );
};

export default SettingButton;
