import type { NextPage } from "next";
import Head from "next/head";
import { Home } from "@/components/home/Home";

const home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Artur Michałek - Frontend Developer</title>
        <meta name="description" content="Frontend Developer" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default home;
