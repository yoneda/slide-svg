import React from 'react';
import styles from './SettingBox.module.css';

const SettingBox = ({settingProgressBox, settingThemeBox}) => {
  return(
    <div className={styles.SettingBox}>
    {settingProgressBox}
    {settingThemeBox}
    </div>
  )
}

export default SettingBox;
