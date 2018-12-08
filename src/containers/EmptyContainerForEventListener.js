import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getMoveNextSlide,
  getMovePrevSlide,
  getOpenMenu,
  getCloseMenu
} from "../actions/actions.js";

const EmptyContainerForEventListener = ({
  isMenuOpen,
  moveNextSlideHandler,
  movePrevSlideHandler,
  openMenuHandler,
  closeMenuHandler
}) => {
  const keyfunction = event => {
    // esc が押された
    if (event.keyCode === 27) {
      isMenuOpen === true ? closeMenuHandler() : openMenuHandler();
    }
    // 左矢印が押された
    else if (event.keyCode === 37) {
      movePrevSlideHandler();
    }
    // 右矢印が押された
    else if (event.keyCode === 39) {
      moveNextSlideHandler();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyfunction);
    return () => {
      document.removeEventListener("keydown", keyfunction);
    };
  });
  return <div />;
};
const mapStateToProps = state => {
  return {
    isMenuOpen: state.isMenuOpen
  };
};

const mapDispatchToProps = dispatch => {
  const moveNextSlideAction = getMoveNextSlide();
  const movePrevSlideAction = getMovePrevSlide();
  const openMenuAction = getOpenMenu();
  const closeMenuAction = getCloseMenu();
  return {
    moveNextSlideHandler: () => dispatch(moveNextSlideAction),
    movePrevSlideHandler: () => dispatch(movePrevSlideAction),
    openMenuHandler: () => dispatch(openMenuAction),
    closeMenuHandler: () => dispatch(closeMenuAction)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmptyContainerForEventListener);
