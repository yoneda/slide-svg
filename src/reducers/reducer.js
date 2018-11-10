
const reducer = (state={},action)=>{
  if(action.type==="ADD_COUNTER"){
    const newState = {
      count: state.count + 1
    }
    return newState;
  }
  else if(action.type==="SUB_COUNTER"){
    const newState = {
      count: state.count - 1
    }
    return newState;
  }
  else{
    const newState = {
      count: 0
    }
    return newState;
  }
}

export default reducer;
