import {
  mobile,
  studysidekick,
  flatmate,
  backend,
  creator,
  microservices1,
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
  java,
  microservices,
  postman,
  spring,
  sql,
  github1,
  api,
  python,
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
    id: "projects",
    title: "Projects",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Application Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "Microservices",
    icon: microservices,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Foxibe",
    icon: "",
    iconBg: "#383E56",
    date: "September 2021 - June 2022",
    points: [
      "Developed a stock trading dashboard using React for frontend UI and Node.js for backend",
      "Created a Python-based trading system on the cloud with buy and sell signals sent to users' Telegram channel",
      "Developed APIs to customize the trades based on user's input through their telegram account",
      "Deployed the trading system on AWS (EC2) and integrated with external APIs for executing trades on users trading accounts",
    ],
  },
  {
    title: "Quant Developer",
    company_name: "Tradetron",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2020 - Aug 2022",
    points: [
      "Designed and developed low latency trading algorithms using Python.",
      "Deployed a low frequency trading algorithm with 40% PA return and over 35 live subscribers.",
      "Led a team of 6 in creating over 130 trading strategies for clients in India and USA.",
      "Specialized in developing and implementing trading algorithms with a focus on low latency and high returns.",
    ],
  },
  {
    title: "Developer Intern",
    company_name: "Pipecandy",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2018 - Jan 2019",
    points: [
      "Worked on constructing an end-to-end system that scrapes fashion-related websites and relevant information from the App store",
      "Used NLP for app classification based on in-app purchases",
      "Created a SQL schema and appended all scraped data to the system",
      "Collaborated with other data analysts who used the data for further analysis",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Flat Mate Expense Tracker",
    description:
      "Flatmate Expense Tracker is an application designed to help flatmates living together in a single flat to track their shared expenses. With this app, users can create group sessions to record and divide their expenses among themselves. Additionally, the app allows users to create individual sessions to track their personal expenses and budget, which will be private to them and not visible to other flatmates. This app is an efficient solution for managing shared expenses and promoting transparency and accountability among flatmates.",
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
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: flatmate,
    source_code_link:
      "https://github.com/neu-mis-info6150-fall-2022/final-project-nucleaus",
  },
  {
    name: "StudySideKick",
    description:
      "Studysidekick.ai is an AI-powered learning platform that offers personalized mentorship and guidance for learners. It creates personalized roadmaps for users based on their availability and preferred timeline, tracks their progress, and provides daily assignments and quizzes. The chatbot is available 24/7 to provide support and resolve doubts. Users receive a completion certificate as an NFT upon successful completion of a course.",
    tags: [
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "NFT",
        color: "pink-text-gradient",
      },
    ],
    image: studysidekick,
    source_code_link: "https://github.com/Hariharan-raj/StudysideKicks.ai",
  },
  {
    name: "Resilient Microservices (Inventory management)",
    description:
      "The project is about creating a resilient microservices-based inventory management system for an online shopping application. It consists of four microservices, each responsible for a specific task, including product creation, inventory checking, order placement, and notification. The microservices are connected using various tools such as Eureka discovery service, Keycloak for authorization, Zipkin for request tracking, and ELK stack for logging. The system is designed to be scalable, fault-tolerant, and easy to maintain.",
    tags: [
      {
        name: "Springboot",
        color: "blue-text-gradient",
      },
      {
        name: "SpringCloud",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: microservices1,
    source_code_link: "https://github.com/Hariharan-raj/Inventory_management",
  },
];

export { services, technologies, experiences, testimonials, projects };
