import React from "react";
import { connect } from 'react-redux'
import Slide from "../components/Slide.js";
import NextButton from "../components/NextButton.js";
import PrevButton from "../components/PrevButton.js";
import SettingButton from "../components/SettingButton.js";
import SettingBox from "../components/SettingBox.js";
import ProgressBar from "../components/ProgressBar.js";
import { getMoveNextSlide, getMovePrevSlide, getChangeProgressBarOn, getChangeProgressBarOff, getOpenMenu, getCloseMenu} from "../actions/actions.js";

const AppContainer = ({ isMenuOpen, isProgressBarAppeared, slides, index, moveNextSlideHandler, movePrevSlideHandler, changeProgressBarOnHandler, changeProgressBarOffHandler, openMenuHandler, closeMenuHandler}) => {
  const parcentage = (index/(slides.length-1))*100;
  return(
    <div>
      <NextButton moveNextSlideHandler={moveNextSlideHandler}/>
      <PrevButton movePrevSlideHandler={movePrevSlideHandler}/>
      <SettingButton isMenuOpen={isMenuOpen} openMenuHandler={openMenuHandler} closeMenuHandler={closeMenuHandler} />
      <Slide text={slides[index]} />
      {isProgressBarAppeared?<ProgressBar parcentage={parcentage} />:""}
      {isMenuOpen?<SettingBox isProgressBarAppeared={isProgressBarAppeared} changeProgressBarOnHandler={changeProgressBarOnHandler} changeProgressBarOffHandler={changeProgressBarOffHandler} />:""}
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
  const openMenuAction = getOpenMenu();
  const closeMenuAction = getCloseMenu();
  return{
    moveNextSlideHandler : () => dispatch(moveNextSlideAction),
    movePrevSlideHandler : () => dispatch(movePrevSlideAction),
    changeProgressBarOnHandler : () => dispatch(changeProgressBarOnAction),
    changeProgressBarOffHandler : () => dispatch(changeProgressBarOffAction),
    openMenuHandler : () => dispatch(openMenuAction),
    closeMenuHandler : () => dispatch(closeMenuAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
