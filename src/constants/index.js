{/* words array for hero section */ }
const words = [
  { text: "Ideas", imgPath: "images/ideas.svg" },
  { text: "Concepts", imgPath: "images/concepts.svg" },
  { text: "Designs", imgPath: "images/designs.svg" },
  { text: "Code", imgPath: "images/code.svg" },
  { text: "Ideas", imgPath: "images/ideas.svg" },
  { text: "Concepts", imgPath: "images/concepts.svg" },
  { text: "Designs", imgPath: "images/designs.svg" },
  { text: "Code", imgPath: "images/code.svg" },
];

{/* navbar links */}
const navLinks = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },  
];

{/* about me section*/ }
 const aboutCards = [
  {
    title: "Passion & Approach",
    description: "I’m Nithin, a frontend developer driven by curiosity and creativity. I believe in writing clean code, crafting smooth designs, and always approaching challenges with a problem-solving mindset.",
    footer: "💡 Creative Thinker | 🔧 Problem Solver"
  },
  {
    title: "Skills & Strengths",
    description: "My expertise lies in React, JavaScript, HTML, and CSS. I enjoy building responsive, user-friendly interfaces while staying up to date with the latest technologies and best practices.",
    footer: "⚡ Frontend Developer | 🚀 Lifelong Learner"
  },
  {
    title: "Vision & Values",
    description: "My goal is to grow as a developer while creating impactful projects that blend design and functionality. I value continuous learning, teamwork, and building digital experiences that make a difference.",
    footer: "🌱 Continuous Learner | 🤝 Team Player"
  }
];

{/* teck stack icons and images */ }
const techStackIcons = [
  {
    name: "React Developer",
  modelPath: "models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
  modelPath: "models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
  modelPath: "models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
  modelPath: "models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
  modelPath: "models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

{/* work experience cards */ }
 const expCards = [
  {
    title: "🚀 Looking for Opportunities",
    date: "Present",
  imgPath: "images/image.png",   // placeholder image
  logoPath: "images/logo0.png", // placeholder logo
    responsibilities: [
      "Building responsive and creative websites with React & JavaScript",
      "Translating designs into smooth, user-friendly interfaces",
      "Constantly learning and adapting to new technologies",
    ],
  },
   
];


const expLogos = [
  {
    name: "logo1",
  imgPath: "images/logo0.png",
  },

  
];

{/* projects data - to be added later */ }
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern 3D portfolio built with React and Tailwind.",
  image: "images/final.png",
  github: "https://github.com/NITHIN-S-18/Nithin-S-Portfolio",
  link: "https://nithin-s-18.github.io/Nithin-S-Portfolio/",
  },
  {
    title:"GitHub Profile",
    description:"A professional and modern GitHub profile showcasing my skills, tech stack, and projects. Includes GitHub stats, top languages, and quick contact links",
  image:"images/readme.png",
    github:"https://github.com/NITHIN-S-18/NITHIN-S-18"
  },
  {
    title: "To-Do_App",
    description: "A simple and user-friendly To-Do app built with React, allowing users to manage tasks efficiently with add, edit, and delete functionalities.",
  image: "images/todo.png",
    github: "https://github.com/NITHIN-S-18/To-Do-List"
  }
];

{/* footer icons */ }
const socialImgs = [
  {
    name: "insta",
  imgPath: "images/insta.png",
    link: "",
  },
  {
    name: "github",
  imgPath: "images/gitlogo.png",
    link: "https://github.com/NITHIN-S-18",
  },
  {
    name: "x",
  imgPath: "images/x.png",
    link: "https://x.com/Nithin77Nithin",
  },
  {
    name: "linkedin",
  imgPath: "images/linkedin.png",
    link: "https://www.linkedin.com/in/nithin-s-9493482a5/",
  },
];








export { words,
   navLinks,
   aboutCards,
   techStackIcons,
   expCards,
   expLogos,
   projects,
   socialImgs,};