import React from "react";
import next from "../resources/next.svg";

const NextButton = ({ moveNextSlideHandler }) => {
  const styles = {
    width: "55px",
    height: "55px",
    backgroundImage: `url(${next})`,
    backgroundColor: "transparent",
    cursor: "pointer",
    border: "none",
    outline: "none",
  }
  return(
    <div>
      <button style={styles} onClick={moveNextSlideHandler}></button>
    </div>
  )
};

export default NextButton;
