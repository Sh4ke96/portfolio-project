import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">Next.js</span>
            <span className="chip">Wordpress</span>
            <span className="chip">Vercel</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
            <span className="chip">Clickup</span>
            <span className="chip">Heroku</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Invision</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Sass</span>
            <span className="chip">Figma</span>
            <span className="chip">Resend</span>
            <span className="chip">FramerMotion</span>
            <span className="chip">Zustand</span>
            <span className="chip">FastAPI</span>
            <span className="chip">Shadcn/UI</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
