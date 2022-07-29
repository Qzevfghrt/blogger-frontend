import React from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import Navigation from "@/src/components/navigationBar";
import styles from "@/src/styles/pages/Home.module.scss";
import ArticleCard from "@/src/components/articleCard";
import PersonalInfo from "@/src/components/personalInfo";
import Footer from "@/src/components/footer";

const Banner = () => {
  return <div className={classNames(styles.bannerWrapper)}></div>;
};

const Content = () => {
  return (
    <div className={classNames(styles.background)}>
      <div className={classNames(styles.contentWrapper)}>
        <div className={classNames(styles.mainContent)}>
          <div className={classNames(styles.latestArticle)}>
            <span className={classNames(styles.catalogue)}>最新的文章</span>
            <ArticleCard />
          </div>
          <div className={classNames(styles.partition)}></div>
          <div className={classNames(styles.articleWrapper)}>
            <span className={classNames(styles.catalogue)}>近15篇文章</span>
            {/* TODO 数组遍历 */}
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
            <div className={classNames(styles.article)}>
              <span className={classNames(styles.date)}>
                {dayjs().format("YYYY年MM月DD日")}
              </span>
              <span className={classNames(styles.title)}>
                这是一篇文章的标题
              </span>
            </div>
          </div>
        </div>
        <div className={classNames(styles.rightContent)}>
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      {/* <Navigation /> */}
      {/* <Banner /> */}
      <Content />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
