import React from "react";
import { connect } from 'react-redux'
import Buttons from "../components/Buttons.js";
import Display from "../components/Display.js";
import { getAddCount, getSubCount, getResetCount } from "../actions/actions.js";

const CountContainer = ({ count, addCountHandler, subCountHandler, resetCountHandler }) => {
  
  return(
    <div>
      <Display count={count} />
      <Buttons addCountHandler={addCountHandler} subCountHandler={subCountHandler} resetCountHandler={resetCountHandler}/>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  const addCountAction = getAddCount(1);
  const subCountAction = getSubCount(1);
  const resetCountAction = getResetCount();
  return{
    addCountHandler : (num) => dispatch(addCountAction),
    subCountHandler : (num) => dispatch(subCountAction),
    resetCountHandler : (num) => dispatch(resetCountAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer)
