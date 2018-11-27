import React from 'react';
import styles from "./Background.module.css";

const Background = (color) => {
  const style = {backgroundColor:"black"};
  return(
    <div className={styles.Background} style={style}>
    </div>
  )
}

export default Background;
