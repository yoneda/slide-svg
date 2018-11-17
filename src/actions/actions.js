import { ADD_COUNTER, SUB_COUNTER, RESET_COUNTER } from "../constants/constants.js";

export const getAddCounter = (num) => {
  return {
    type: ADD_COUNTER,
    payload: num
  }
}

export const getSubCounter = (num) => {
  return {
    type:  SUB_COUNTER,
    payload: num
  }
}

export const getResetCounter = (num) => {
  return {
    type: RESET_COUNTER
  }
}
