import React, { FC } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

const Navigation: FC = () => {
  const navItems = ["首页", "About", "前端", "论文", "日常", "游戏"];
  return (
    <div className={classNames(styles.navigationWrapper)}>
      <div className={classNames(styles.navigation)}>
        {navItems.map((item) => item)}
      </div>
    </div>
  );
};

export default Navigation;
