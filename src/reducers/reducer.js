import { OPEN_MENU, CLOSE_MENU, MOVE_NEXT_SLIDE, MOVE_PREV_SLIDE, CONVERT_MARKDOWN_TO_HTML } from "../constants/constants.js";

const reducer = (state={},action)=>{
  if(true){
    const initialState = {
      isMenuOpen: true,
      showProgressBar: true,
      index: 0,
      slides: ["aaa","bbb","ccc"],
      rawMarkdown: "## aaa\n --- ## bbb\n --- ccc\n"
    }
    return initialState;
  }
}

export default reducer;
