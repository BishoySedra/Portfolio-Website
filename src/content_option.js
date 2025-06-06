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
        img: "https://github.com/BishoySedra/Instapay_microservices/blob/main/client/src/assets/AutoInsight.png?raw=true",
        description: "Instapay – Microservices payment platform using Docker and Kubernetes.",
        link: "https://github.com/BishoySedra/Instapay_microservices",
    },
    {
        img: "https://github.com/user-attachments/assets/3c5f29b9-accb-4503-845a-fbabfc661794",
        description: "Document Manager API – JWT-authenticated API with role-based access and Cloudinary integration.",
        link: "https://github.com/BishoySedra/Document_Manager_API",
    },
    {
        img: "https://github.com/BishoySedra/ChatSphere/raw/main/Frontend/.imgs/logo.png",
        description: "ChatSphere – MERN-based real-time chat app with JWT, Socket.io, and media sharing.",
        link: "https://github.com/BishoySedra/ChatSphere",
    },
    {
        img: "https://camo.githubusercontent.com/c05cb7f735347faef4b8c005778761c82e3b25cf1bdda90e78be624feae19923/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647669377675756a762f696d6167652f75706c6f61642f76313732343831323332312f617771726c666c7732673431646c7766307a646f2e706e67",
        description: "FIRM Creatives – Portfolio sharing platform for creatives with authentication and project management.",
        link: "https://github.com/BishoySedra/FIRM-creatives",
    },
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
