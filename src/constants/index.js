const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Data", imgPath: "/images/data.svg" },
  { text: "Systems", imgPath: "/images/system.svg" },
  { text: "Workflow", imgPath: "/images/workflow.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Data", imgPath: "/images/data.svg" },
  { text: "Systems", imgPath: "/images/system.svg" },
  { text: "Workflow", imgPath: "/images/workflow.svg" },
];

const counterItems = [
  { value: 20, suffix: "+", label: "Github Repositories" },
  { value: 5, suffix: "+", label: "Collaborative Projects" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Problem-Solving Focus" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Passion",
    desc: "Driven by genuine curiosity and a desire to create meaningful solutions. Whether it's learning new technologies, building from scratch, or refining processes.",
  },
  {
    imgPath: "/images/shield.png",
    title: "Reliable",
    desc: "Consistently follow up on the projects and ensuring that its finished.",
  },
  {
    imgPath: "/images/gear.png",
    title: "Hard Working",
    desc: "Puts effort into tackling new challenges and constantly evolving skill set to push projects beyond further",
  },
  {
    imgPath: "/images/adaptability.png",
    title: "Adaptability",
    desc: "Always open to learn new things and refining my workflows.",
  },
  {
    imgPath: "/images/ideas.png",
    title: "Problem Solving",
    desc: "Approaching challenges methodically, breaking down obstacles and finding smart ways around them.",
  },
  {
    imgPath: "/images/terminal.png",
    title: "Technical Proficiency",
    desc: "Fluent in multiple languages and tools, and know how to leverage them effectively to build practical solutions.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Python Knowledge",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Node Js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },

  {
    name: "React Along side with HTML, CSS, JS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },

  {
    name: "Object Oriented Programming",
    modelPath: "/models/csharp_model.glb",
    scale: 0.07,
    rotation: [0, 0, 0],
  },
  {
    name: "Relational and Non Relational Data bases",
    modelPath: "/models/database_model.glb",
    scale: 70,
    rotation: [0, Math.PI / 2, Math.PI / 2],
  },
];

const expCards = [
  {
    review:
      "Started a full-time contract with the Digital Workplace Team, focused on contributing to impactful projects while continuing to grow professionally.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title:
      "IT Coordinator, Digital Solutions • \
       Digital & Innovations - Digital Solutions Web",
    date: "Jan 2026 - Present",
    responsibilities: [
      "Designing scalable and efficient cloud system architectures for data engineering pipelines.",
      "Identifying and implementing new processes and solutions using Microsoft Azure services, \
including Azure AI Foundry, Logic Apps, Azure Function Apps, Blob Storage, and Azure \
Databricks",
      "Developing automated workflows using Power Automate and integrating them with Logic \
Apps as needed",
      "Creating and maintaining logic functions using Python, JavaScript, PowerShell, or C#, \
tailored to specific problem requirements",
      "Updating and maintaining automation and workflows for SharePoint and Microsoft Teams. \
Collaborating via Azure DevOps to track development progress",
      "Supporting Digital Web initiatives, contributing to both front-end and back-end.",
    ],
  },
  {
    review:
      "Starting my second internship at Saputo Inc. as part of the Digital Workplace team. Excited to continue growing and contributing on this new journey!",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Digital WorkPlace IT Analyst Intern",
    date: "May 2025 - Dec 2025",
    responsibilities: [
      "Identify and develop new automations and processes using Logic Apps, Azure Functions, SharePoint and coding",
      "Deliver exceptional service to our global internal customers, addressing all their workplace collaboration system needs.",
      "Update and maintain automations and workflows for SharePoint / Teams.",
    ],
  },
  {
    review:
      "It was my first internship at Nestle Health Science in Fall 2024 and I'm glad about the new connections I made and the new things I learnt.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "IT Analyst Intern",
    date: "August 2024 - December 2024",
    responsibilities: [
      "Organized large data sets using Python libraries (e.g., Pandas, openpyxl) to create easy-to-understand visualizations.",
      "Built custom tools and automated workflows to streamline data analysis, helping reduce manual tasks and increase efficiency across the team.",
      "Worked closely with teams across various departments, including Taxes, and HR, to ensure seamless collaboration and project success.",
    ],
  },
  {
    review:
      "Born in Tunisia, I moved to Canada at 18 to pursue a life of purpose—focused on turning knowledge and experience into real-world impact",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Bachelor's in Computer Science, Joint Major Data Science",
    date: "September 2022 - September 2026",
    responsibilities: [
      "Developing expertise in machine learning, web development, and algorithm design through hands-on projects and academic research.",
      "On a mission to bridge the gap between theory and impactful solutions — using tech to solve real problems and drive innovation.",
      "Gaining experience in collaborative software projects, research, and cross-functional problem solving within academic and extracurricular teams.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "Linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/achraf-c-0bbb19177/",
  },

  {
    name: "GitHub",
    imgPath: "/images/github.png",
    link: "https://github.com/Ach57",
  },
];

const projects = [
  {
    title: "EDITH: Real-Time AI Form Feedback Through Voice-Controlled Vision",
    description:
      "EDITH is a browser-based, voice-activated HUD that leverages \
      temporal convolutional neural networks to analyze human movement \
      in real time. With a simple command, it activates your camera, \
      runs the appropriate model, and streams annotated feedback \
      directly to the dashboard. Designed for instant, hands-free \
      interaction, EDITH delivers precise form analysis without \
      interrupting the user’s workflow.",
    imgPath: "/images/project1.png",
    alt: "EDITH Real-Time AI Form detector",
    containerClass: "first-project-wrapper",
    imageWrapperClass: "image-wrapper",
    textWrapperClass: "text-content",
    pClass: "text-white-50 md:text-xl",
  },
  {
    title: "Concordia CS Practice Vault: A Central Hub for Course Problems",
    description:
      "Concordia CS Practice Vault is a web platform that centralizes \
      practice problems for computer science courses, making it easier \
      for students to find and prepare effectively. Built with a React \
      and Vite frontend and powered by an Express.js backend, it \
      integrates AWS S3 for scalable storage and Supabase for data \
      management. The system is containerized with Docker to support \
      reliable deployment and continuous integration, ensuring a \
      smooth and consistent user experience.",
    imgPath: "/images/project2.png",
    alt: "Concordia CS Practice Vault",
    containerClass: "project",
    imageWrapperClass: "image-wrapper bg-[#fa624b]",
    textWrapperClass: null, // No wrapper for list projects
    pClass: "text-white-50 md:text-m",
  },
  {
    title: "Pet Adoption Website: My First Full-Stack Web App",
    description:
      "This was the first website I built using Node.js, HTML, CSS, and \
      JavaScript—a project where I poured in a lot of passion and \
      dedication to make it feel special. Through it, I learned the \
      value of clean structure and styling, which later led me to  \
      explore more efficient workflows with Bootstrap, Three.js, and React.",
    imgPath: "/images/project3.png",
    alt: "Pet Adoption Website",
    imageWrapperClass: "image-wrapper bg-[#FFE7EB]",
    textWrapperClass: null,
    pClass: "text-white-50 md:text-m",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
