import { IconType } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { HiCpuChip } from "react-icons/hi2";

export const links = [
  {
    href: "#top",
    name: "Home",
  },
  // {
  //   href: "#my-projects",
  //   name: "Projects 💼",
  // },
  {
    href: "#skills-and-technologies",
    name: "Skills",
  },
  // {
  //   href: "#collaborate",
  //   name: "Collaborate",
  // },
  {
    name: "GitHub",
    href: "https://github.com/cShirley14",
    ariaLabel: "Link to Chantal's Github Profile",
    icon: GoMarkGithub as IconType,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chantal-shirley-dartmouth14/",
    ariaLabel: "Link to Chantal's LinkedIn Profile",
    icon: BsLinkedin as IconType,
  },
];

export const skills = [
  {
    name: "TypeScript",
  },
  {
    name: "Java",
  },
  {
    name: "Python",
  },
  {
    name: "C#",
  },
  {
    name: "Kubernetes",
  },
  {
    name: "Bash",
  },
  {
    name: "Linux",
  },
  {
    name: "AWS Cloud",
  },
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
];

export const appCards = [
  {
    src: "/assets/jenkins-demo.jpg",
    name: "Jenkins Demo",
    href: "https://github.com/cShirley14/jenkins-demo",
    tech: "Kubernetes, Helm, Bash, CI/CD, cron",
  },
  {
    src: "/assets/SequenceDiagramAnimalClass.jpg",
    name: "Java Networking",
    href: "https://github.com/cShirley14/Animal_Client_Server_Demonstration",
    tech: "Java, MySQL, Internationalization, JSON",
  },
  {
    src: "/assets/JobPostingsFrontPage.jpg",
    name: "Jobs Posting Site",
    href: "https://github.com/cShirley14/JobPostings",
    tech: "Tomcat, MVC Architecture, Session Cookies",
  },
  {
    src: "/assets/fast_api.png",
    name: "Fast API",
    href: "https://github.com/cShirley14/python_api_development",
    tech: "Oauth2, bcrypt, pydantic, alembic",
  },
];

export const skillsSection = [
  {
    child: HiCpuChip,
    title: "Skills & Technologies",
    description:
      "Professionally, my time as a Site Reliability, Cloud and Full-Stack Engineer has given me exposure to a number of technologies like:",
  },
];

export const appsSection = [
  {
    child: FaCode,
    title: "My Projects",
    description:
      "I have enjoyed dabbling in building APIs, full-stack applications, working with Networking APIs, and building solutions in the Cloud.",
  },
];
