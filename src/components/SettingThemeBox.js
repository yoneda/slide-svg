import React from 'react';
import { THEME_WHITE, THEME_RED, THEME_BLACK, THEME_CLEARSKY } from "../constants/constants.js";

const SettingThemeBox = ({ theme, selectWhiteHandler, selectBlackHandler, selectRedHandler, selectClearSkyHandler, closeMenuHandler}) => {
  const changeTheme = (event) => {
    const value = event.target.value;
    if(value===THEME_BLACK) selectBlackHandler();
    else if(value===THEME_RED) selectRedHandler();
    else if(value===THEME_WHITE) selectWhiteHandler();
    else if(value===THEME_CLEARSKY) selectClearSkyHandler();
    closeMenuHandler();
  }
  return(
    <div>
      <p>theme?</p>
      <select value={theme} onChange={(event)=>changeTheme(event)}>
        <option value={THEME_WHITE}>simple</option>
        <option value={THEME_BLACK}>dark</option>
        <option value={THEME_CLEARSKY}>clear sky</option>
      </select>
    </div>
  )
}

export default SettingThemeBox;
