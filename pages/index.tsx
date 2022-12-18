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
  Footer,
} from "../components/";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Artur Michałek - Frontend Developer</title>
        <meta name="description" content="Frontend Developer" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SectionHero />
      <SectionAbout />
      <SectionExperience />
      <SectionProjects />
      <SectionContact />
      <Footer />
    </Wrapper>
  );
};

export default Home;
