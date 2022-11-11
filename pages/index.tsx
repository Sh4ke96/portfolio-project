import type { NextPage } from "next";
import Head from "next/head";
import {
  Wrapper,
  Header,
  SectionHero,
  SectionAbout,
  SectionExperience,
  SectionProjects,
  SectionContact,
} from "../components/";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Artur Michałek - Frontend Developer</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SectionHero />
      <SectionAbout />
      <SectionExperience />
      <SectionProjects />
      <SectionContact />
    </Wrapper>
  );
};

export default Home;
