import React from "react";

const Buttons = ({addCountHandler, subCountHandler, resetCountHandler}) => {
  return(
    <div>
      <button onClick={addCountHandler}>add</button>
      <button onClick={subCountHandler}>sub</button>
      <button onClick={resetCountHandler}>reset</button>
    </div>
  )
}

export default Buttons
