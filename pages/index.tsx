import React from "react";
import classNames from "classnames";
import Navigation from '../components/navigationBar'
import styles from '../styles/Home.module.scss'
import ArticleCard from '@/components/articleCard'

const Banner = () => {
  return(
    <div className={classNames(styles.bannerWrapper)}></div>
  )
}

const Content = () => {
  return(
    <div className={classNames(styles.contentWrapper)}>
      <ArticleCard />
    </div>
  )
}

const Home = () => {
  return (
    <>
     <Navigation />
     <Banner />
     <Content />
    </>
  );
};

export default Home;
