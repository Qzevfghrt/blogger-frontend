import classNames from "classnames";
import React from "react";
import dayjs from "dayjs";
import styles from "./index.module.scss";

const ArticleCard = () => {
  return (
    <div className={classNames(styles.articleCardWrapper)}>
      <div className={classNames(styles.articleName)}>这是我的第一篇博客</div>
      <div className={classNames(styles.articleTime)}>{dayjs().format('YYYY-MM-DD HH:mm:ss')}</div>
      <div className={classNames(styles.articleBrief)}>
        啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
      </div>
      <div className={classNames(styles.articleCategory)}>#前端</div>
    </div>
  );
};

export default ArticleCard;
