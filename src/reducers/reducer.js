import { OPEN_MENU, CLOSE_MENU, MOVE_NEXT_SLIDE, MOVE_PREV_SLIDE, CONVERT_MARKDOWN_TO_HTML, CHANGE_PROGRESSBAR_ON, CHANGE_PROGRESSBAR_OFF, CREATE_SLIDES} from "../constants/constants.js";

const reducer = (state={},action)=>{
  if(action.type===MOVE_NEXT_SLIDE){
    if(state.index >= (state.slides.length - 1)) return state;
    const nowIndex = state.index + 1;
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: state.isProgressBarAppeared,
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
      index: nowIndex,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CHANGE_PROGRESSBAR_ON){
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: true,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CHANGE_PROGRESSBAR_OFF){
    const newState = {
      isMenuOpen: state.isMenuOpen,
      isProgressBarAppeared: false,
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
      index: state.index,
      slides: htmlList,
    }
    return newState;
  }
  else if(action.type===OPEN_MENU){
    const newState = {
      isMenuOpen: true,
      isProgressBarAppeared: state.isProgressBarAppeared,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else if(action.type===CLOSE_MENU){
    const newState = {
      isMenuOpen: false,
      isProgressBarAppeared: state.isProgressBarAppeared,
      index: state.index,
      slides: state.slides,
    }
    return newState;
  }
  else {
    const initialState = {
      isMenuOpen: false,
      isProgressBarAppeared: true,
      index: 0,
      slides: [],
    }
    return initialState;
  }
}

export default reducer;
