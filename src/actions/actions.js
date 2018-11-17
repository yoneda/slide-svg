import { ADD_COUNT, SUB_COUNT, RESET_COUNT } from "../constants/constants.js";

export const getAddCount = (num) => {
  return {
    type: ADD_COUNT,
    payload: {num: num}
  }
}

export const getSubCount = (num) => {
  return {
    type:  SUB_COUNT,
    payload: {num: num}
  }
}

export const getResetCount = () => {
  return {
    type: RESET_COUNT
  }
}
