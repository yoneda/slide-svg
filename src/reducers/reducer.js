import { ADD_COUNT, SUB_COUNT, RESET_COUNT } from "../constants/constants.js";

const reducer = (state={},action)=>{
  if(action.type===ADD_COUNT){
    const num = action.payload.num;
    const newState = {
      count: state.count + num
    }
    
    return newState;
  }
  else if(action.type===SUB_COUNT){
    const num = action.payload.num;
    const newState = {
      count: state.count - num
    }
    return newState;
  }
  else if(action.type===RESET_COUNT){
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
