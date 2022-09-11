import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { client } from "../lib/apolloClient";
import { useQuery, gql } from "@apollo/client";
import DisplayLocations from "../components/DisplayLocations";

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <DisplayLocations />
    </>
  );
};

export default Home;
