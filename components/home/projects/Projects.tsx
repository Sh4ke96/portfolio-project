import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Monst",
    imgSrc: "project-imgs/monst-thumbnail.png",
    code: "https://github.com/Sh4ke96/monst",
    projectLink: "https://monst-eight.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind", "Flowbite"],
    description:
      "A landing page with multiple pages, login, account creation capabilities designed for corporations.",
    modalContent: (
      <>
        <p>
          This website project is designed for corporations and aims to provide
          a comprehensive solution for user account management and access to
          corporate information. The website focuses on several key
          functionalities:
        </p>
        <p>
          Account Management Panel: Logged-in users have access to a management
          panel where they can modify their data, manage the permissions of
          other users, and control access to information.
        </p>
        <p>
          Account Registration: New corporations can create their accounts by
          providing the necessary information. The registration process is
          streamlined to be quick and intuitive.
        </p>
        <p>
          Multiple Pages: The website has multiple subpages, making it easy to
          segregate and access different types of content and services, such as
          financial data, documents, project information, etc.
        </p>
        <p>
          The corporate website project aims to create a personalized and secure
          online space that facilitates user account management and access to
          critical corporate resources. It also offers easy navigation and an
          intuitive interface to ensure a favorable user experience.
        </p>
      </>
    ),
  },
  {
    title: "Bankco",
    imgSrc: "project-imgs/bankco-thumbnail.png",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Next.js", "Zustand", "Tailwind", "Fast API", "Firebase"],
    description:
      "Admin panel design with multiple stastistics options for the project. The project is in WIP - comming soon.",
    modalContent: (
      <>
        <p>
          Designing an admin panel for a project with multiple statistics
          options is a crucial aspect of ensuring effective project management
          and decision-making. Here is a brief description of what such an admin
          panel might entail:
        </p>
        <p>
          User Engagement Metrics: Admins can access user engagement statistics,
          including user sign-ups, active users, and user retention rates.
          Visualizations like heatmaps or user journey diagrams may also be
          included.
        </p>
        <p>
          Data Filters and Customization: The admin panel allows users to filter
          and customize statistics based on various parameters, such as date
          ranges, geographical regions, or specific user groups.
        </p>
        <p>
          Mobile Responsiveness: The admin panel is designed to be
          mobile-responsive, allowing users to access statistics and manage the
          project on various devices, including smartphones and tablets.
        </p>
        <p>
          In summary, the admin panel for a project with multiple statistics
          options is a comprehensive tool that empowers project managers and
          administrators to monitor and analyze various aspects of the project
          is performance. It provides real-time insights, enhances
          decision-making, and promotes efficient project management.
        </p>
      </>
    ),
  },
];
