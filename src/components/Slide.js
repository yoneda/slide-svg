import React from 'react';
import styles from "./Slide.module.css";
import { THEME_WHITE, THEME_BLACK, THEME_CLEARSKY } from "../constants/constants.js";

const Slide = ({text,theme}) => {
  let targetStyles = {};
  if(theme===THEME_WHITE) targetStyles=styles.ThemeWhite;
  else if(theme===THEME_BLACK) targetStyles=styles.ThemeBlack;
  else if(theme===THEME_CLEARSKY) targetStyles=styles.ThemeClearSky;
  const content = {__html: text};
  return(
    <div>
      <div className={targetStyles} dangerouslySetInnerHTML={content}></div>
    </div>
  )
}

export default Slide;
