import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ parcentage, color }) => {
  const style = { width: `${parcentage}%`, backgroundColor: color };
  return <div className={styles.ProgressBar} style={style} />;
};

export default ProgressBar;
