import { OPEN_MENU, CLOSE_MENU, MOVE_NEXT_SLIDE, MOVE_PREV_SLIDE, CONVERT_MARKDOWN_TO_HTML } from "../constants/constants.js";

const reducer = (state={},action)=>{
  if(action.type===MOVE_NEXT_SLIDE){
    if(state.index >= (state.slides.length - 1)) return state;
    const nowIndex = state.index + 1;
    const newState = {
      isMenuOpen: state.isMenuOpen,
      showProgressBar: state.showProgressBar,
      index: nowIndex,
      slides: state.slides,
      rawMarkdown: state.rawMarkdown
    }
    return newState;
  }
  else if(action.type===MOVE_PREV_SLIDE){
    if(state.index <= 0) return state;
    const nowIndex = state.index - 1;
    const newState = {
      isMenuOpen: state.isMenuOpen,
      showProgressBar: state.showProgressBar,
      index: nowIndex,
      slides: state.slides,
      rawMarkdown: state.rawMarkdown
    }
    return newState;
  }
  else {
    const initialState = {
      isMenuOpen: true,
      showProgressBar: true,
      index: 0,
      slides: ["aaa","bbb","ccc","ddd"],
      rawMarkdown: "## aaa\n --- ## bbb\n --- ccc\n --- ddd\n"
    }
    return initialState;
  }
}

export default reducer;
