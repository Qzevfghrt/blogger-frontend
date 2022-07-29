import React, { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async () => {
  // const [users, setUsers] = useState([0]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:8888/users");
  //     console.log(response);
  //     setUsers(response.data);
  //   };
  //   fetchData();
  // }, []);
  const res = await axios.get("http://localhost:8888/users");
  return {
    props: {
      users: res.data
    },
  };
};

export type Pageprops = {
  users: any;
};

const IndexPage: NextPage<Pageprops> = ({ users }) => {
  return <div>{Object.values(users[0])}</div>;
};

export default IndexPage;
