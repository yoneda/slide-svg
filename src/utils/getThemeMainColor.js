import marked from "marked";
import { THEME_WHITE, THEME_BLACK, THEME_CLEARSKY } from "../constants/constants.js";
import { COLOR_WHEAT, COLOR_DARKRED, COLOR_SKYBLUE } from "../constants/constants.js";

export const getThemeMainColor = (theme) => {
  if(theme===THEME_WHITE){
    return COLOR_WHEAT;
  }
  else if(theme===THEME_BLACK){
    return COLOR_DARKRED;
  }
  else if(theme===THEME_CLEARSKY){
    return COLOR_SKYBLUE;
  }
}
