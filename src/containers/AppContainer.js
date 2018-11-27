import React from "react";
import { connect } from 'react-redux'
import Slide from "../components/Slide.js";
import NextButton from "../components/NextButton.js";
import PrevButton from "../components/PrevButton.js";
import SettingButton from "../components/SettingButton.js";
import SettingProgressBox from "../components/SettingProgressBox.js";
import SettingThemeBox from "../components/SettingThemeBox.js";
import ProgressBar from "../components/ProgressBar.js";
import Buttons from "../components/Buttons.js";
import Background from "../components/Background.js";
import { getMoveNextSlide, getMovePrevSlide, getChangeProgressBarOn, getChangeProgressBarOff, getOpenMenu, getCloseMenu, getChangeThemeWhite, getChangeThemeBlack, getChangeThemeClearsky } from "../actions/actions.js";
import { getThemeMainColor } from "../utils/getThemeMainColor";
import styles from './AppContainer.module.css';

const AppContainer = ({ isMenuOpen, isProgressBarAppeared, theme, index, slides, moveNextSlideHandler, movePrevSlideHandler, changeProgressBarOnHandler, changeProgressBarOffHandler, openMenuHandler, closeMenuHandler, changeThemeWhiteHandler, changeThemeBlackHandler, changeThemeClearskyHandler }) => {
  const parcentage = (index/(slides.length-1))*100;
  const progressBarColor = getThemeMainColor(theme);
  if(theme)
  return(
    <div>
    <div className={styles.AppContainer}>
      <Buttons buttons={
        [
          <NextButton key={1} moveNextSlideHandler={moveNextSlideHandler} />,
          <PrevButton key={2} movePrevSlideHandler={movePrevSlideHandler} />,
          <SettingButton key={3} isMenuOpen={isMenuOpen} openMenuHandler={openMenuHandler} closeMenuHandler={closeMenuHandler} />
        ]
      } />
      <Slide text={slides[index]} theme={theme} />
      {isProgressBarAppeared?<ProgressBar parcentage={parcentage} color={progressBarColor}/>:""}
      {isMenuOpen?<SettingProgressBox isProgressBarAppeared={isProgressBarAppeared} changeProgressBarOnHandler={changeProgressBarOnHandler} changeProgressBarOffHandler={changeProgressBarOffHandler} />:""}
      {isMenuOpen?<SettingThemeBox theme={theme} selectWhiteHandler={changeThemeWhiteHandler} selectBlackHandler={changeThemeBlackHandler} selectClearSkyHandler={changeThemeClearskyHandler} />:""}
      <Background />
    </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    isMenuOpen: state.isMenuOpen,
    isProgressBarAppeared: state.isProgressBarAppeared,
    theme: state.theme,
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
  const changeThemeBlackAction = getChangeThemeBlack();
  const changeThemeWhiteAction = getChangeThemeWhite();
  const changeThemeClearskyAction = getChangeThemeClearsky();
  return{
    moveNextSlideHandler : () => dispatch(moveNextSlideAction),
    movePrevSlideHandler : () => dispatch(movePrevSlideAction),
    changeProgressBarOnHandler : () => dispatch(changeProgressBarOnAction),
    changeProgressBarOffHandler : () => dispatch(changeProgressBarOffAction),
    openMenuHandler : () => dispatch(openMenuAction),
    closeMenuHandler : () => dispatch(closeMenuAction),
    changeThemeBlackHandler  : () => dispatch(changeThemeBlackAction),
    changeThemeWhiteHandler  : () => dispatch(changeThemeWhiteAction),
    changeThemeClearskyHandler  : () => dispatch(changeThemeClearskyAction),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
