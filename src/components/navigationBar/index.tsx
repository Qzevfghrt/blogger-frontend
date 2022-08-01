import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./index.module.scss";
import { Routes } from "@/src/router/routes";

const Navigation: FC = () => {
  const navItems = [
    { name: "首页", url: Routes.Home, alt: 'homepage'},
    { name: "About", url: Routes.About, alt: 'about' },
    { name: "文章", url: "/articles", alt: 'article' },
    { name: "日常", url: "/", alt: 'normal' },
    { name: "论文", url: "/", alt: 'thesis' },
  ];
  return (
    <div className={classNames(styles.navigationWrapper)}>
      <div className={classNames(styles.navigation)}>
        <div>刘学峰的个人日志</div>
        <div className={classNames(styles.navigationBar)}>
          {navItems.map((item) => item && (
            <Link href={item.url} key={item.alt}>
              <div className={classNames(styles.navigationBtn)}>
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
