const logotext = "Bishoy";
const meta = {
    title: "Bishoy Sedra Portfolio",
    description: "I’m Bishoy Sedra, a Junior Software Engineer specializing in backend development, microservices, and scalable API solutions.",
};

const introdata = {
    title: "I’m Bishoy Sedra",
    animated: {
        first: "I build scalable APIs",
        second: "I develop microservices with Docker & Kubernetes",
        third: "I craft secure backend systems",
    },
    description: "Junior Software Engineer passionate about backend architecture, real-time apps, and clean code. Experienced in NestJS, Express, Docker, and MongoDB.",
    your_img_url: "https://github.com/user-attachments/assets/3241e713-51e2-41d2-84bc-58f0c59a8a9f", // Replace if you want a personal image
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I'm a Junior Software Engineer from Cairo with a strong background in backend development, object-oriented programming, and scalable system design. I’ve led backend projects, contributed to open-source, and love solving complex engineering problems with clean architecture and modern tools.",
};

const worktimeline = [
    {
        jobtitle: "Backend Mentor",
        where: "ConnectX",
        date: "Oct 2023 – Jul 2024",
    },
    {
        jobtitle: "Team Leader - Web Dev",
        where: "MSP Tech Club, ASU",
        date: "Oct 2023 – Jul 2024",
    },
    {
        jobtitle: "Programming YouTuber",
        where: "YouTube Channel",
        date: "Sep 2024 – Present",
    },
];

const skills = [
    { name: "Node.js", value: 90 },
    { name: "NestJS", value: 85 },
    { name: "TypeScript", value: 80 },
    { name: "MongoDB & MySQL", value: 80 },
    { name: "Docker & Kubernetes", value: 75 },
    { name: "Express.js", value: 80 },
];

const services = [
    {
        title: "Backend Development",
        description: "Building secure and scalable backend systems using Node.js, NestJS, and Express with clean code practices.",
    },
    {
        title: "API Design & Integration",
        description: "Designing RESTful APIs with proper authentication, authorization, and documentation using Swagger/Postman.",
    },
    {
        title: "Microservices & Deployment",
        description: "Developing and deploying containerized microservices with Docker and Kubernetes for fault-tolerant applications.",
    },
];

const dataportfolio = [
    {
        img: "https://github.com/user-attachments/assets/f3c84ff6-c679-4843-aa04-52593ccad565",
        description: "AutoInsight API – Server-side API for collaborative data analysis. Built with Express.js and MongoDB, featuring OAuth login, data cleaning, insight generation, and AI chatbot.",
        link: "https://autoinsight-api-r8nz.onrender.com/docs"
    },
    {
        img: "https://github.com/user-attachments/assets/2580b267-63cd-47ff-9a40-1bd8d5c3d2a7",
        description: "Instapay – Server-side microservices API for a payment platform using Docker & Kubernetes. Includes services for users, transactions, reporting, and fault-tolerant communication.",
        link: "https://mini-instapay-api.onrender.com/docs",
    },
    {
        img: "https://github.com/user-attachments/assets/5a1daf47-71b5-449e-89a4-8901e27bbfd9",
        description: "Document Manager API – Secure backend API built with NestJS and Prisma. Supports JWT-based authentication, role-based access control, and file uploads via Cloudinary.",
        link: "https://document-manager-api.onrender.com/docs",
    },
    {
        img: "https://github.com/user-attachments/assets/e8cf5dd0-1c3e-4344-9dba-9c068b0329e7",
        description: "ChatSphere – Server-side API for a real-time MERN chat application. Implements JWT, Socket.io for live messaging, and media upload using Cloudinary.",
        link: "https://chatsphere-api.onrender.com/docs",
    }
];


const contactConfig = {
    YOUR_EMAIL: "bishoysedraa@gmail.com",
    YOUR_FONE: "+20 128 043 2898",
    description: "Let’s connect to discuss backend architecture, scalable systems, or your next project idea!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_xibd6es", // Replace with actual EmailJS info
    YOUR_TEMPLATE_ID: "template_jbgq42n",
    YOUR_USER_ID: "yO0SYrFYXxXSqsxj1",
};

const socialprofils = {
    github: "https://github.com/BishoySedra",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/bishoy-sedra/",
    youtube: "https://www.youtube.com/@BishoySedra",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
