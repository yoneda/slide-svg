import React from 'react';

const PrevButton = ({ movePrevSlideHandler }) => (
  <div>
    <button onClick={movePrevSlideHandler}>prev</button>
  </div>
)

export default PrevButton;
