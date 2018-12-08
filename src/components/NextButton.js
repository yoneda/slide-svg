import React from "react";

const NextButton = ({ moveNextSlideHandler }) => (
  <div>
    <button onClick={moveNextSlideHandler}>next</button>
  </div>
);

export default NextButton;
