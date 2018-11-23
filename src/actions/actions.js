import { OPEN_MENU, CLOSE_MENU, MOVE_NEXT_SLIDE, MOVE_PREV_SLIDE, CONVERT_MARKDOWN_TO_HTML, CHANGE_PROGRESSBAR_ON, CHANGE_PROGRESSBAR_OFF, CREATE_SLIDES} from "../constants/constants.js";

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

export const getCreateSlides = (htmlList) => {
  return {
    type: CREATE_SLIDES,
    payload: {htmlList: htmlList}
  }
}
