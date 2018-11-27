import React from 'react';
import { THEME_WHITE, THEME_BLACK, THEME_CLEARSKY } from "../constants/constants.js";

const SettingThemeBox = ({ theme, selectWhiteHandler, selectBlackHandler, selectClearSkyHandler }) => {
  const changeTheme = (event) => {
    const value = event.target.value;
    if(value===THEME_BLACK) selectBlackHandler();
    else if(value===THEME_WHITE) selectWhiteHandler();
    else if(value===THEME_CLEARSKY) selectClearSkyHandler();
  }
  return(
    <div>
      <p>theme?</p>
      <select value={theme} onChange={(event)=>changeTheme(event)}>
        <option value={THEME_BLACK}>black</option>
        <option value={THEME_WHITE}>white</option>
        <option value={THEME_CLEARSKY}>clear sky</option>
      </select>
    </div>
  )
}

export default SettingThemeBox;
