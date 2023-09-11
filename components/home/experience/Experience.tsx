import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Konceptika",
    position: "Frontend Developer",
    time: "2022.09 - Present",
    location: "Remote",
    description:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Next.js, PHP, WordPress, and Vercel.",
    tech: [
      "React",
      "Next.js",
      "Wordpress",
      "Tailwind",
      "Figma",
      "Redux",
      "Zustand",
    ],
  },
  {
    title: "ArtGroup",
    position: "Frontend Developer",
    time: "2022.02 - 2022.06",
    location: "Remote",
    description:
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.",
    tech: [
      "JavaScript",
      "Jquerry",
      "CSS",
      "Sass",
      "Wordpress",
      "Photoshop",
      "Bitbucket",
    ],
  },
];
