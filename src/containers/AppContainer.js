import React from "react";
import { connect } from 'react-redux'
import Slide from "../components/Slide.js";
import NextButton from "../components/NextButton.js";
import PrevButton from "../components/PrevButton.js";
import { getMoveNextSlide, getMovePrevSlide } from "../actions/actions.js";

const AppContainer = ({ slides, index, moveNextSlideHandler, movePrevSlideHandler }) => {
  // TODO: slidesのバリデーションを追加
  return(
    <div>
      <h2>slide app</h2>
      <NextButton moveNextSlideHandler={moveNextSlideHandler}/>
      <PrevButton movePrevSlideHandler={movePrevSlideHandler}/>
      <Slide text={slides[index]} />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    isMenuOpen: state.isMenuOpen,
    showProgressBar: state.showProgressBar,
    index: state.index,
    slides: state.slides,
    rawMarkdown: state.rawMarkdown
  }
}


const mapDispatchToProps = dispatch => {
  const moveNextSlideAction = getMoveNextSlide();
  const movePrevSlideAction = getMovePrevSlide();
  return{
    moveNextSlideHandler : () => dispatch(moveNextSlideAction),
    movePrevSlideHandler : () => dispatch(movePrevSlideAction)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer)
