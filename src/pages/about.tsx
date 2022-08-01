import React from "react";
import { GetStaticProps, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import rehypeRaw from 'rehype-raw';
import fs from "fs";
import styles from '@/src/styles/pages/About.module.scss'

export const getStaticProps: GetStaticProps = () => {
  const file = fs
    .readFileSync(`${process.cwd()}/src/content/about.md`)
    .toString();
  return {
    props: {
      about: file,
    },
  };
};

export type Pageprops = {
  about: any;
};

const About: NextPage<Pageprops> = ({ about }) => {
  return (
    <div className={classNames(styles.background)}>
      <div className={classNames(styles.contentWrapper)}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{about}</ReactMarkdown>
      </div>
    </div>
  );
};

export default About;
