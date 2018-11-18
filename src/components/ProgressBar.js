import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({parcentage}) => {
  console.log(parcentage);
  const style = {width: `${parcentage}%`};
  return(
    <div className={styles.ProgressBar} style={style}>
    </div>
  )
}

export default ProgressBar;
