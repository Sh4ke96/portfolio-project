import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Artur<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Frontend Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I am a self-taught developer who decided to become a programmer. In
            the past I worked as a video editor 🎥. I can provide clean code and
            pixel perfect design. I also make website more & more interactive
            with web animations. <br />
            Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
