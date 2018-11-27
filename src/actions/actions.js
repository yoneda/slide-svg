import { OPEN_MENU, CLOSE_MENU, MOVE_NEXT_SLIDE, MOVE_PREV_SLIDE, CHANGE_PROGRESSBAR_ON, CHANGE_PROGRESSBAR_OFF, CHANGE_THEME_WHITE, CHANGE_THEME_BLACK, CHANGE_THEME_CLEARSKY, CREATE_SLIDES} from "../constants/constants.js";

export const getMoveNextSlide = () => {
  return {
    type: MOVE_NEXT_SLIDE
  }
}

export const getMovePrevSlide = () => {
  return {
    type: MOVE_PREV_SLIDE
  }
}

export const getChangeProgressBarOn = () => {
  return {
    type: CHANGE_PROGRESSBAR_ON,
  }
}

export const getChangeProgressBarOff = () => {
  return {
    type: CHANGE_PROGRESSBAR_OFF
  }
}

export const getOpenMenu = () => {
  return {
    type: OPEN_MENU
  }
}

export const getCloseMenu = () => {
  return {
    type: CLOSE_MENU
  }
}

export const getChangeThemeWhite = () => {
  return{
    type: CHANGE_THEME_WHITE
  }
}

export const getChangeThemeBlack = () => {
  return{
    type: CHANGE_THEME_BLACK
  }
}

export const getChangeThemeClearsky = () => {
  return{
    type: CHANGE_THEME_CLEARSKY
  }
}

export const getCreateSlides = (htmlList) => {
  return {
    type: CREATE_SLIDES,
    payload: {htmlList: htmlList}
  }
}
