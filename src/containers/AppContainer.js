import React from "react";
import { connect } from 'react-redux'
import Slide from "../components/Slide.js";
import NextButton from "../components/NextButton.js";
import PrevButton from "../components/PrevButton.js";
import ProgressBar from "../components/ProgressBar.js";
import SettingBox from "../components/SettingBox.js";
import { getMoveNextSlide, getMovePrevSlide, getChangeProgressBarOn, getChangeProgressBarOff } from "../actions/actions.js";

const AppContainer = ({ slides, index, isProgressBarAppeared, moveNextSlideHandler, movePrevSlideHandler, changeProgressBarOnHandler, changeProgressBarOffHandler}) => {
  const parcentage = (index/(slides.length-1))*100;
  return(
    <div>
      <h2>slide app</h2>
      <NextButton moveNextSlideHandler={moveNextSlideHandler}/>
      <PrevButton movePrevSlideHandler={movePrevSlideHandler}/>
      <Slide text={slides[index]} />
      {isProgressBarAppeared?<ProgressBar parcentage={parcentage} />:""}
      <SettingBox isProgressBarAppeared={isProgressBarAppeared} changeProgressBarOnHandler={changeProgressBarOnHandler} changeProgressBarOffHandler={changeProgressBarOffHandler} />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    isMenuOpen: state.isMenuOpen,
    isProgressBarAppeared: state.isProgressBarAppeared,
    index: state.index,
    slides: state.slides,
    rawMarkdown: state.rawMarkdown
  }
}


const mapDispatchToProps = dispatch => {
  const moveNextSlideAction = getMoveNextSlide();
  const movePrevSlideAction = getMovePrevSlide();
  const changeProgressBarOnAction = getChangeProgressBarOn();
  const changeProgressBarOffAction = getChangeProgressBarOff();
  return{
    moveNextSlideHandler : () => dispatch(moveNextSlideAction),
    movePrevSlideHandler : () => dispatch(movePrevSlideAction),
    changeProgressBarOnHandler : () => dispatch(changeProgressBarOnAction),
    changeProgressBarOffHandler : () => dispatch(changeProgressBarOffAction),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
