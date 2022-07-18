import React from "react";
import classNames from "classnames";
import Image from 'next/image';
import profileSrc from '@/public/yuren.jpg';
import styles from "./index.module.scss";

const PersonalInfo = () => {
  return (
    <div className={classNames(styles.personalInfoWrapper)}>
      <Image className={classNames(styles.image)} src={profileSrc} width={200} height={200}/>
      <div className={classNames(styles.name)}>Qzevfghrt</div>
      <div className={classNames(styles.brief)}>一只前端攻城狮</div>
      <div className={classNames(styles.link)}></div>
      <div className={classNames(styles.about)}></div>
    </div>
  );
};

export default PersonalInfo;
