import React, { FC } from "react";
import classNames from "classnames";

const Navigations: FC = () => {
  const navItems = ["首页", "About", "前端", "论文", "日常", "游戏"];
  return <div>{navItems.map((item) => item)}</div>;
};

const Home = () => {
  return (
    <>
     <Navigations />
    </>
  );
};

export default Home;
