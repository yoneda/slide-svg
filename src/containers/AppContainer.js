import React from "react";
import { connect } from 'react-redux'
import Slide from "../components/Slide.js";

const AppContainer = ({ slides, index }) => {
  // TODO: slidesのバリデーションを追加
  return(
    <div>
      <p>test</p>
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

/*
const mapDispatchToProps = dispatch => {
  const addCountAction = getAddCount(1);
  const subCountAction = getSubCount(1);
  const resetCountAction = getResetCount();
  return{
    addCountHandler : (num) => dispatch(addCountAction),
    subCountHandler : (num) => dispatch(subCountAction),
    resetCountHandler : (num) => dispatch(resetCountAction)
  }
}*/

export default connect(mapStateToProps)(AppContainer)
