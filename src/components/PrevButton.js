import React from "react";
import prev from "../resources/prev.svg";

const PrevButton = ({ movePrevSlideHandler }) => {
  //const styles = {backgroundImage: `url(${prev})`,width:"55px",height:"55px"};
  const styles = {
    width: "55px",
    height: "55px",
    backgroundImage: `url(${prev})`,
  }
  return(
    <div>
      <button style={styles} onClick={movePrevSlideHandler}></button>
    </div>
  )
};

export default PrevButton;
