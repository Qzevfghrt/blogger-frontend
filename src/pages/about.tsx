import React from "react";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import about from '@/public/about.md'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://localhost:8888/articles");
  return {
    props: {
      articles: res.data,
    },
  };
};

export type Pageprops = {
  articles: any;
};
const About: NextPage<Pageprops> = ({ articles }) => {
  const value = articles[0]?.content;
  return (
    <>
      <ReactMarkdown>{value}</ReactMarkdown>
    </>
  );
};

export default About;
