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
    your_img_url: "https://github.com/user-attachments/assets/9786d4ad-b727-41ae-9681-a592057143cb", // Replace if you want a personal image
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
        img: "https://logowik.com/content/uploads/images/swagger6360.jpg",
        description: "AutoInsight API – Server-side API for collaborative data analysis. Built with Express.js and MongoDB, featuring OAuth login, data cleaning, insight generation, and AI chatbot.",
        link: "https://autoinsight-api-r8nz.onrender.com/docs"
    },
    {
        img: "https://github.com/user-attachments/assets/3039a02e-7216-4efc-8f7b-1e6e09c087fd",
        description: "Instapay – Server-side microservices API for a payment platform using Docker & Kubernetes. Includes services for users, transactions, reporting, and fault-tolerant communication.",
        link: "https://mini-instapay-api.onrender.com/docs",
    },
    {
        img: "https://github.com/user-attachments/assets/6ff38d36-e606-4424-ad09-fec04905f86b",
        description: "Document Manager API – Secure backend API built with NestJS and Prisma. Supports JWT-based authentication, role-based access control, and file uploads via Cloudinary.",
        link: "https://document-manager-api.onrender.com/docs",
    },
    {
        img: "https://github.com/user-attachments/assets/09845146-b03d-4386-a973-f1ef801b4dcd",
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
