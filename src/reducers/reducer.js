import { OPEN_MENU, CLOSE_MENU, MOVE_NEXT_SLIDE, MOVE_PREV_SLIDE, CHANGE_PROGRESSBAR_ON, CHANGE_PROGRESSBAR_OFF, CHANGE_THEME_SIMPLE, CHANGE_THEME_RED, CHANGE_THEME_DARK, CHANGE_THEME_CLEARSKY, CREATE_SLIDES} from "../constants/constants.js";
import { THEME_SIMPLE, THEME_RED, THEME_DARK, THEME_CLEARSKY } from "../constants/constants.js";

const reducer = (state={},action)=>{
  if(action.type===MOVE_NEXT_SLIDE){
    if(state.index >= (state.slides.length - 1)) return state;
    const nowIndex = state.index + 1;
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: state.isProgressBarAppeared,
      theme: state.theme,
      index: nowIndex,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===MOVE_PREV_SLIDE){
    if(state.index <= 0) return state;
    const nowIndex = state.index - 1;
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: state.isProgressBarAppeared,
      theme: state.theme,
      index: nowIndex,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CHANGE_PROGRESSBAR_ON){
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: true,
      theme: state.theme,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CHANGE_PROGRESSBAR_OFF){
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: false,
      theme: state.theme,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CREATE_SLIDES){
    const htmlList = action.payload.htmlList;
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: state.isProgressBarAppeared,
      theme: state.theme,
      index: state.index,
      slides: htmlList,
    }
    return newState;
  }
  else if(action.type===OPEN_MENU){
    const newState = {
      isMenuOpen: true,
      isProgressBarAppeared: state.isProgressBarAppeared,
      theme: state.theme,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CLOSE_MENU){
    const newState = {
      isMenuOpen: false,
      isProgressBarAppeared: state.isProgressBarAppeared,
      theme: state.theme,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CHANGE_THEME_SIMPLE){
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: state.isProgressBarAppeared,
      theme: THEME_SIMPLE,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CHANGE_THEME_RED){
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: state.isProgressBarAppeared,
      theme: THEME_RED,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CHANGE_THEME_DARK){
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: state.isProgressBarAppeared,
      theme: THEME_DARK,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CHANGE_THEME_CLEARSKY){
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: state.isProgressBarAppeared,
      theme: THEME_CLEARSKY,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else {
    const initialState = {
      isMenuOpen: false,
      isProgressBarAppeared: true,
      theme: THEME_SIMPLE,
      index: 0,
      slides: [],
    }
    return initialState;
  }
}

export default reducer;
