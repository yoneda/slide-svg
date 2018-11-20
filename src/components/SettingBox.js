import React from 'react';

const SettingBox = ({ isProgressBarAppeared, changeProgressBarOnHandler, changeProgressBarOffHandler}) => {
  return(
    <div>
      <p>progress bar?</p>
      <p><input type="radio" checked={isProgressBarAppeared===true} onChange={changeProgressBarOnHandler} />on
      <input type="radio" checked={isProgressBarAppeared===false} onChange={changeProgressBarOffHandler} />off</p>
    </div>
  )
}

export default SettingBox;
