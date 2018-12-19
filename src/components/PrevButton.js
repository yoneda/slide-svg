import React from "react";
import prev from "../resources/prev.svg";

const PrevButton = ({ movePrevSlideHandler }) => {
  //const styles = {backgroundImage: `url(${prev})`,width:"55px",height:"55px"};
  const styles = {
    width: "55px",
    height: "55px",
    backgroundImage: `url(${prev})`,
    marginRight: "12px",
    backgroundColor: "transparent",
    cursor: "pointer",
    border: "none",
    outline: "none",
  }
  return(
    <div>
      <button style={styles} onClick={movePrevSlideHandler}></button>
    </div>
  )
};

export default PrevButton;
