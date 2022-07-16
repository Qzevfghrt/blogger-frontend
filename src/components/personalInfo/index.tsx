import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

const PersonalInfo = () => {
  return (
    <div className={classNames(styles.personalInfoWrapper)}>
      <div className={classNames(styles.picture)}></div>
      <div className={classNames(styles.name)}></div>
      <div className={classNames(styles.brief)}></div>
      <div className={classNames(styles.link)}></div>
      <div className={classNames(styles.about)}></div>
    </div>
  );
};

export default PersonalInfo;
