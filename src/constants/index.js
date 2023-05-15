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
    next,
    starbucks,
    tesla,
    axia,
    loreto,
    uoh,
    shopify,
    carrent,
    jobit,
    tripguide,
    gpt3,
    hoobank,
    threejs,
    mrsphere,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend web developer",
      icon: web,
    },
    {
      title: "University graduate",
      icon: mobile,
    },
    {
      title: "Experience in industry",
      icon: backend,
    },
    {
      title: "Learning Fullstack development",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
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
      name: "next",
      icon: next,
    },
  ];
  
  const experiences = [
    {
      title: "College Student",
      company_name: "Loreto Sixth Form College",
      icon: loreto,
      iconBg: "#383E56",
      date: "September 2016 - June 2018",
      points: [
        "Studied Computer Science, Mathematics and Chemistry",
        "College was my first real experience coding and kickstarted my passion",
        "Had my first taste of real programming using Visual Basic, where my final project was a battleships game",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Axia Digital",
      icon: axia,
      iconBg: "#383E56",
      date: "September 2020 - September 2021",
      points: [
        "At Axia I was part of a small group of developers that produced e-portfolio solutions to a variey of companies",
        "I had regular client calls as part of the Agile Methodology the company abided by",
        "I got to sharpen my skills in HTML, CSS and Javascript along with XML/XSLT",
        "This year in industry was part of my university degree sandwich year to gather some experience in a real work environment",
      ],
    },
    {
      title: "University Undergraduate",
      company_name: "University of Huddersfield",
      icon: uoh,
      iconBg: "#E6DEDD",
      date: "September 2018 - July 2022",
      points: [
        "At university I studied Computer Science with Games Development",
        "I regularly participated in group collaboration projects developing games, as part of my university modules",
        "I learned to develop using Agile Methodologies and work with other departments within the team",
        "I Graduated with a 2:1 classification",
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
      name: "GPT-3 Landing Page",
      description:
        "A fully responsive, Modern UI/UX website using React.js, styled with TailwindCSS and VanillaCSS (for styling not currently supported by tailwind). BEM methodology is applied throughout this project. Figma design and assets provided by Javascript Mastery on Youtube.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gpt3,
      source_code_link: "https://github.com/",
    },
    {
      name: "Hoobank Landing Page",
      description:
        "This is a website application that is based on one of the challenge projects from JavaScript Mastery on Youtube. Built with React.js, Vite and styled with TailwindCSS. A figma design was provided along with the assets and colour scheme.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
      ],
      image: hoobank,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "just a rotating little sphere, created using Three.js, acts as an entry project to learn the ropes of three.js",
      tags: [
        {
          name: "three.js",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: mrsphere,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };