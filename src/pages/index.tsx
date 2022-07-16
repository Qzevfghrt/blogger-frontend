import React from "react";
import classNames from "classnames";
import Navigation from "@/src/components/navigationBar";
import styles from "@/src/styles/Home.module.scss";
import ArticleCard from '@/src/components/articleCard';
import PersonalInfo from '@/src/components/personalInfo';


const Content = () => {
  return (
    <div className={classNames(styles.background)}>
      <div className={classNames(styles.contentWrapper)}>
        <div className={classNames(styles.mainContent)}>
          <ArticleCard />
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
      <Navigation />
      <Content />
    </>
  );
};

export default Home;
