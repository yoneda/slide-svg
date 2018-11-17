import { OPEN_MENU, CLOSE_MENU, MOVE_NEXT_SLIDE, MOVE_PREV_SLIDE, CONVERT_MARKDOWN_TO_HTML } from "../constants/constants.js";

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
