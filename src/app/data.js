/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/
import ecotracker from "../../public/background/about1.jpeg";
import calculator from "../../public/project-Image/calculator.jpg";
import car_blog from "../../public/project-Image/car_blog.jpg";
import chat_application from "../../public/project-Image/chat-application.png";
import salary from "../../public/project-Image/salary.jpg";
import hotel_site from "../../public/project-Image/hotel-site.jpg";
import network from "../../public/project-Image/network.jpg";
import amazon from "../../public/project-Image/amazon.png";
import car_rental from "../../public/project-Image/car_rental.png";


export const projectsData = [
  {
    id: 1,
    name: "FlexiDrive-Car-Rental-BackEnd",
    description: "Car Rental WebApplication",
    date: "2025-03-10",
    demoLink:"https://github.com/malishaperera/FlexiDrive-Car-Rental-BackEnd.git",
    techStack: ["React.ts", "Node.js", "Express.js","Prisma"] ,
    image: car_rental
  },
  {
    id: 2,
    name: "FlexiDrive-Car-Rental-FrontEnd",
    description: "Car Rental WebApplication",
    date: "2025-03-10",
    demoLink:"https://github.com/malishaperera/FlexiDrive-Car-Rental-FrontEnd",
    techStack: ["React.ts", "Redux", "TailwindCss"] ,
    image: car_rental
  },
  {
    id: 3,
    name: "KV-Audio-Rental-BackEnd",
    description: "Audio Rental Shop",
    date: "2022-06-20",
    demoLink: "https://github.com/malishaperera/KV-Audio-Rental-FrontEnd.git",
    techStack: ["React.js", "TailwindCss", "MongoDB"],
    image:ecotracker
  },
  {
    id: 4,
    name: "KV-Audio-Rental-FrontEnd",
    description: "Audio Rental Shop",
    date: "2022-09-10",
    demoLink: "https://github.com/malishaperera/KV-Audio-Rental-BackEnd.git",
    techStack: ["React.js", "Node.js", "Express.js"],
    image:ecotracker
  },
  {
    id: 5,
    name: "ReactNative-Shoes-app",
    description: "Api shoes",
    date: "2022-05-30",
    demoLink: "https://github.com/malishaperera/ReactNative-Shoes-app.git",
    techStack: ["React-Native", "Gluestack-ui","zustand"],
    image:ecotracker
  },
  {
    id: 6,
    name: "Crop-Monitoring-System-FRONTEND",
    description: "Crop-Monitoring-System",
    date: "2022-07-12",
    demoLink: "https://github.com/malishaperera/Crop-Monitoring-System-FRONTEND.git",
    techStack: ["Html", "Css", "JavaScript"],
    image:ecotracker
  },
  {
    id: 7,
    name: "Crop-Monitoring-System-BACKEND",
    description: "Crop-Monitoring-System",
    date: "2022-10-01",
    demoLink: "https://github.com/malishaperera/Crop-Monitoring-System-BACKEND.git",
    techStack: ["Java", "Spring-Boot", "Hibernate"],
    image:ecotracker
  },
    //
  {
    id: 8,
    name: "Amazon-Project",
    description: "Amazon simple site",
    date: "2022-10-29",
    demoLink: "https://github.com/malishaperera/Amazon-Project.git",
    techStack: ["Javascript", "Html", "Css"] ,
    image:amazon
  },
  {
    id: 9,
    name: "MST-Minimum-Spanning-Tree",
    description: "Connect-nodes-with-minimum-connection-costs",
    date: "2024-09-05",
    demoLink: "https://github.com/malishaperera/MST-Minimum-Spanning-Tree.git",
    techStack: ["JavaScript", "Html", "Css","Prim's algorithm "] ,
    image:network
  },
  {
    id: 10,
    name: "Hotel-Site ",
    description: "Hotel Web Site",
    date: "2024-06-14",
    demoLink: "https://github.com/malishaperera/Hotel-Site.git",
    techStack: ["Html", "Css", "Javascript","Bootstrap"],
    image:hotel_site
  },
  {
    id: 11,
    name: "Calculator",
    description: "simple-calculator",
    date: "2024-04-26",
    demoLink: "https://github.com/malishaperera/Calculator.git",
    techStack: ["Html", "Css", "Javascript"],
    image:calculator
  },
  {
    id: 12,
    name: "Salary_prediction",
    description: "Simple salary prediction using machine learning models.",
    date: "2024-04-02",
    demoLink: "https://github.com/malishaperera/Salary_prediction.git",
    techStack: ["Python","Liner-regression", "Regression", "Supervised-learning"],
    image:salary
  },
  {
    id: 13,
    name: "Car_blog ",
    description: "Car Blog Web Site",
    date: "2024-03-29",
    demoLink: "https://github.com/malishaperera/Car_blog.git",
    techStack: ["Html", "Css"],
    image:car_blog
  },
  {
    id: 14,
    name: "Chat_Application ",
    description: "Java Socket Programming - Multiple Clients Chat",
    date: "2024-01-31",
    demoLink: "https://github.com/malishaperera/Chat_Application.git",
    techStack: ["Java"],
    image:chat_application
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects/", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/malishaperera",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/malisha-shavinda-27a7231a9/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/malisha83593036",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];