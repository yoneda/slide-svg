import {
  OPEN_MENU,
  CLOSE_MENU,
  MOVE_NEXT_SLIDE,
  MOVE_PREV_SLIDE,
  CHANGE_PROGRESSBAR_ON,
  CHANGE_PROGRESSBAR_OFF,
  CHANGE_THEME_SIMPLE,
  CHANGE_THEME_DARK,
  CHANGE_THEME_CLEARSKY,
  CREATE_SLIDES
} from "../constants/constants.js";

export const getMoveNextSlide = () => {
  return {
    type: MOVE_NEXT_SLIDE
  };
};

export const getMovePrevSlide = () => {
  return {
    type: MOVE_PREV_SLIDE
  };
};

export const getChangeProgressBarOn = () => {
  return {
    type: CHANGE_PROGRESSBAR_ON
  };
};

export const getChangeProgressBarOff = () => {
  return {
    type: CHANGE_PROGRESSBAR_OFF
  };
};

export const getOpenMenu = () => {
  return {
    type: OPEN_MENU
  };
};

export const getCloseMenu = () => {
  return {
    type: CLOSE_MENU
  };
};

export const getChangeThemeSimple = () => {
  return {
    type: CHANGE_THEME_SIMPLE
  };
};

export const getChangeThemeDark = () => {
  return {
    type: CHANGE_THEME_DARK
  };
};

export const getChangeThemeClearsky = () => {
  return {
    type: CHANGE_THEME_CLEARSKY
  };
};

export const getCreateSlides = htmlList => {
  return {
    type: CREATE_SLIDES,
    payload: { htmlList: htmlList }
  };
};
