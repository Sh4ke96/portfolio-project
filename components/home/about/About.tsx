import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Artur, if you haven&apos;t already gathered that by
              now. I&apos;m a Video Editor turned software engineer from a small
              town near Katowice. I specialize in the frontend, primarily React
              and Next.js, but love building with whatever tools are right for
              the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work for Konceptika. I also occasionally playing
              around with animation and video editing (you can&apos;t get away
              from some things, right?).
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love cycling 🚴 and animals, more specifically
              dogs <br />
              (I have a beutiful english cocker spaniel 🐕).
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my
              love for code with my love for the animations. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
