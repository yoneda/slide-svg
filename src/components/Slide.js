import React from 'react';

const Slide = ({text}) => {
  const content = {__html: text};
  return(
    <div>
      <div dangerouslySetInnerHTML={content}></div>
    </div>
  )
}

export default Slide;
