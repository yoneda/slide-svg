import React from 'react';
import { THEME_SIMPLE, THEME_RED, THEME_DARK, THEME_CLEARSKY } from "../constants/constants.js";

const SettingThemeBox = ({ theme, selectWhiteHandler, selectBlackHandler, selectRedHandler, selectClearSkyHandler, closeMenuHandler}) => {
  const changeTheme = (event) => {
    const value = event.target.value;
    if(value===THEME_DARK) selectBlackHandler();
    else if(value===THEME_RED) selectRedHandler();
    else if(value===THEME_SIMPLE) selectWhiteHandler();
    else if(value===THEME_CLEARSKY) selectClearSkyHandler();
    closeMenuHandler();
  }
  return(
    <div>
      <p>theme?</p>
      <select value={theme} onChange={(event)=>changeTheme(event)}>
        <option value={THEME_SIMPLE}>simple</option>
        <option value={THEME_DARK}>dark</option>
        <option value={THEME_CLEARSKY}>clear sky</option>
      </select>
    </div>
  )
}

export default SettingThemeBox;
