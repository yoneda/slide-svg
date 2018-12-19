import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ text, color }) => {
  const content = { __html: text };
  return (
      <div className={styles.Slide}>
      <div className={styles.Content} style={styles} dangerouslySetInnerHTML={content} />
      </div>
  );
};

export default Slide;
