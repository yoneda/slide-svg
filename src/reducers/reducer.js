import { ADD_COUNTER, SUB_COUNTER, RESET_COUNTER } from "../constants/constants.js";

const reducer = (state={},action)=>{
  if(action.type===ADD_COUNTER){
    const num = action.payload.num;
    const newState = {
      count: state.count + num
    }
    return newState;
  }
  else if(action.type===SUB_COUNTER){
    const num = action.payload.num;
    const newState = {
      count: state.count - num
    }
    return newState;
  }
  else if(action.type===RESET_COUNTER){
    const newState = {
      count: 0
    }
    return newState;
  }
  else{
    const initialState = {
      count: 1
    }
    return initialState;
  }
}

export default reducer;
