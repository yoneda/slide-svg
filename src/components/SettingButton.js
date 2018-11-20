import React from 'react';

const SettingButton = ({ isProgressBarAppeared }) => {
  console.log(isProgressBarAppeared);
  return(
    <div>
      <button onClick={movePrevSlideHandler}>prev</button>
    </div>
  )
}

export default SettingButton;
