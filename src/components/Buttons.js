import React from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ buttons }) => (
  <div className={styles.Buttons}>
    {buttons.map((button, index) => {
      return button;
    })}
  </div>
);

export default Buttons;
