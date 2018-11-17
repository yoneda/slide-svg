import React from "react";
import { connect } from 'react-redux'
import Buttons from "../components/Buttons.js";
import Display from "../components/Display.js";
import { getAddCounter, getSubCounter, getResetCounter } from "../actions/actions.js";

const CountContainer = ({ count, addCountHandler, subCountHandler, resetCounterHandler }) => {
  return(
    <div>
      <Display count={count} />
      <Buttons />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  const addCounterAction = getAddCounter(1);
  const subCounterAction = getSubCounter(1);
  const resetCounterAction = getResetCounter();
  return{
    addCountHandler : (num) => dispatch(addCounterAction),
    subCountHandler : (num) => dispatch(subCounterAction),
    resetCounterHandler : (num) => dispatch(resetCounterAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer)
