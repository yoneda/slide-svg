import React from 'react';

const Slide = ({text,color}) => {
  const content = {__html: text};
  const style = {color: color};
  return(
    <div>
      <div style={style} dangerouslySetInnerHTML={content}></div>
    </div>
  )
}

export default Slide;
