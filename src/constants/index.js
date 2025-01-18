import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Content Editor",
    icon: mobile,
  },
  {
    title: "Social Media Manager",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "As being a College Student :",
    company_name: "Vijaya Bifurcated PU college",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2021 - March 2023",
    points: [
      "I studied PCMB",
      "Made some Good connections and friends.",
      "Completed class 12th with around 90%.",
    ],
  },
  {
    title: "Being an Engineering student",
    company_name: "BNM Institute Of Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2023 - Going on",
    points: [
      "Learnt Programming Languages like a alien language being biology student.",
      "Made some Good friends and Connections with seniors to get roadmaps.",
      "Secured 9.6 CGPA in 1st sem.",
      "Secured 9.75 CGPA in 2nd sem.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Still a Noob developer",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2024 - Going on",
    points: [
      "Exploring the Development feilds.",
      "Made some 2 Frontend Websites and 1 Full stack website.",
      
    ],
  },
  {
    title: "Content Editor",
    company_name: "Still a Learner",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Developing and editing the contents.",
      "Built a lot of connections with many state's editors through the discord.",
      "Trying to bild my own agency soon.",
      "Will soon do it. ",
    ],
  },
];

const testimonials = [
  
];

const projects = [
  {
    name: "E-commerce Website",
    description:
      "Web-based platform that allows users to search, book, and manage product purchase from various providers, providing a convenient and efficient solution for needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  },
  
];

export { services, technologies, experiences, testimonials, projects };
