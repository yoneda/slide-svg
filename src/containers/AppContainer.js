import React from "react";
import { connect } from "react-redux";
import Slide from "../components/Slide.js";
import ProgramableSlide from "../components/ProgramableSlide.js";
import NextButton from "../components/NextButton.js";
import PrevButton from "../components/PrevButton.js";
import SettingBox from "../components/SettingBox.js";
import SettingProgressBox from "../components/SettingProgressBox.js";
import SettingThemeBox from "../components/SettingThemeBox.js";
import ProgressBar from "../components/ProgressBar.js";
import Buttons from "../components/Buttons.js";
import Background from "../components/Background.js";
import ThemeSimple from "../themes/simple.json";
import ThemeDark from "../themes/dark.json";
import ThemeClearsky from "../themes/clearsky.json";
import { THEME_SIMPLE, THEME_RED, THEME_DARK, THEME_CLEARSKY } from "../constants/constants.js";
import styles from "./AppContainer.module.css";
import {
  getMoveNextSlide,
  getMovePrevSlide,
  getChangeProgressBarOn,
  getChangeProgressBarOff,
  getOpenMenu,
  getCloseMenu,
  getChangeThemeSimple,
  getChangeThemeDark,
  getChangeThemeRed,
  getChangeThemeClearsky
} from "../actions/actions.js";
import { convertSignToHtml } from "../utils/convertSighToHtml";
import { convertMarkdownToHtml } from "../utils/convertMarkdownToHtml";

const AppContainer = ({
  isMenuOpen,
  isProgressBarAppeared,
  theme,
  index,
  slides,
  moveNextSlideHandler,
  movePrevSlideHandler,
  changeProgressBarOnHandler,
  changeProgressBarOffHandler,
  openMenuHandler,
  closeMenuHandler,
  changeThemeSimpleHandler,
  changeThemeDarkHandler,
  changeThemeClearskyHandler
}) => {
  const parcentage = (index / (slides.length - 1)) * 100;
  let themeColor = {};
  if (theme === THEME_SIMPLE) themeColor = ThemeSimple;
  else if (theme === THEME_DARK) themeColor = ThemeDark;
  else if (theme === THEME_CLEARSKY) themeColor = ThemeClearsky;

  // コーディング付きのスライド / 通常のスライド の出し分け
  const converted = slides[index]?slides[index].replace("<p>","").replace("</p>","").replace("\n",""):"";
  let isNormalSlide = true;
  let htmlCode = "";
  if(converted.indexOf("CODE")===0){
    isNormalSlide = false;
    htmlCode = convertSignToHtml(converted);
  }

  return (
    <div>
      <div className={styles.AppContainer}>
        <Buttons
          buttons={[
            <PrevButton key={2} movePrevSlideHandler={movePrevSlideHandler} />,
            <NextButton key={1} moveNextSlideHandler={moveNextSlideHandler} />,
          ]}
        />
        {isNormalSlide?
          <Slide text={slides[index]} color={themeColor.textColor} />
          :
          <ProgramableSlide code={htmlCode} />
        }
        {isProgressBarAppeared ? (
          <ProgressBar parcentage={parcentage} color={"#ff1493"} />
        ) : (
          ""
        )}
        {isMenuOpen ? (
          <SettingBox
            settingProgressBox={
              <SettingProgressBox
                isProgressBarAppeared={isProgressBarAppeared}
                changeProgressBarOnHandler={changeProgressBarOnHandler}
                changeProgressBarOffHandler={changeProgressBarOffHandler}
              />
            }
            settingThemeBox={
              <SettingThemeBox
                theme={theme}
                selectSimpleHandler={changeThemeSimpleHandler}
                selectDarkHandler={changeThemeDarkHandler}
                selectClearSkyHandler={changeThemeClearskyHandler}
                closeMenuHandler={closeMenuHandler}
              />
            }
          />
        ) : (
          ""
        )}
        <Background color={themeColor.backgroundColor} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isMenuOpen: state.isMenuOpen,
    isProgressBarAppeared: state.isProgressBarAppeared,
    theme: state.theme,
    index: state.index,
    slides: state.slides,
    rawMarkdown: state.rawMarkdown
  };
};

const mapDispatchToProps = dispatch => {
  const moveNextSlideAction = getMoveNextSlide();
  const movePrevSlideAction = getMovePrevSlide();
  const changeProgressBarOnAction = getChangeProgressBarOn();
  const changeProgressBarOffAction = getChangeProgressBarOff();
  const openMenuAction = getOpenMenu();
  const closeMenuAction = getCloseMenu();
  const changeThemeDarkAction = getChangeThemeDark();
  const changeThemeSimpleAction = getChangeThemeSimple();
  const changeThemeClearskyAction = getChangeThemeClearsky();
  return {
    moveNextSlideHandler: () => dispatch(moveNextSlideAction),
    movePrevSlideHandler: () => dispatch(movePrevSlideAction),
    changeProgressBarOnHandler: () => dispatch(changeProgressBarOnAction),
    changeProgressBarOffHandler: () => dispatch(changeProgressBarOffAction),
    openMenuHandler: () => dispatch(openMenuAction),
    closeMenuHandler: () => dispatch(closeMenuAction),
    changeThemeDarkHandler: () => dispatch(changeThemeDarkAction),
    changeThemeSimpleHandler: () => dispatch(changeThemeSimpleAction),
    changeThemeClearskyHandler: () => dispatch(changeThemeClearskyAction)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
