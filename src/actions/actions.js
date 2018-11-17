
export const getAddCounter = (num) => {
  return {
    type: "ADD_COUNTER",
    payload: num
  }
}

export const getSubCounter = (num) => {
  return {
    type: "SUB_COUNTER",
    payload: num
  }
}

export const getResetCounter = (num) => {
  return {
    type: "RESET_COUNTER"
  }
}
