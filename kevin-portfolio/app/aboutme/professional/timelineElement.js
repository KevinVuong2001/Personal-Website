import { FaBriefcase, FaUserGraduate, FaCode } from "react-icons/fa6"

const timelineElements = [
    {
        id: 1,
        title: "Biomedical Informatics and Data Science Intern",
        company: "Oregon Health and Science University",
        date: "June 2024 - September 2024",
        location: "Portland, OR",
        details: 
            `During my internship, I worked on a project focused on implementing a new search method to enhance the accuracy of identifying potential patients for clinical trials. 
            This required utilizing technical skills such as LLM (Meta Llama 3), Python libraries (Pyserini), and MATLAB.`,
        tech: ["Python", "MATLAB", "LargeLanguageModels", "MachineLearning", "InformationRetrieval", "Git"],
        iconColor: "#4a90e2",
        icon: <FaBriefcase />,
    },
    {
        id: 2,
        title: "Bachelor of Science in Computer Science",
        institution: "Portland State University",
        date: "September 2019 - June 2024",
        location: "Portland, OR",
        achievements: "summa cum laude (GPA: 3.91 / 4.0)",
        notable_coursework: [
            "Internet, Web, and Cloud Systems",
            "Database Management",
            "Voice Assistants",
            "Web Development"
        ],
        tech: ["Python", "C++", "JavaScript", "TypeScript", "PostgreSQL", "React", "Node.js", "HTML", "CSS", "GoogleCloudPlatform"],
        iconColor: "#e29c4a",
        icon: <FaUserGraduate />
    },
    {
        id: 3,
        title: "Full-Stack Capstone Project (WonderTix)",
        institution: "Portland Playhouse",
        date: "September 2023 - March 2024",
        location: "Portland, OR",
        details: 
            `For my senior capstone, I worked on an open-source project sponsored by Portland Playhouse with eight other colleagues. 
            WonderTix is a comprehensive sales platform designed to manage task assignments, generate financial reports, and handle ticket sales.
            My role was to implement Restful API endpoints and create a new financial report.
            `,
        tech: ["React", "TypeScript", "PostgreSQL", "RESTfulAPI", "Docker", "Node.js", "Git"],
        iconColor: "#4ae29c",
        icon: <FaCode />
    }, 
    {
        id: 4,
        title: "MECOP Software Development Engineering Intern",
        company: "Cambia Health Solutions",
        date: "March 2023 - December 2023",
        location: "Portland, OR",
        details: 
            `At Team Apollo, I focused on building tools to support other developers while contributing to various tasks. 
            My primary role involved backend development, leveraging technologies such as Docker, Datadog, and Kubernetes. 
            I also gained experience in DevOps and Reliability Engineering, 
            working with languages like Go, Ruby, and Node.js, a pipeline tool like CircleCI, and cloud services including AWS Lambda and DynamoDB.`,
        tech: ["Go", "Ruby", "Node.js", "Kubernetes", "Tilt", "Datadog", "CircleCI", "AWSLambda", "Docker", "Git"],
        iconColor: "#4a90e2",
        icon: <FaBriefcase />,
    },
    {
        id: 5,
        title: "MECOP Software Engineer Intern",
        company: "Siemens EDA",
        date: "March 2022 - September 2022",
        location: "Wilsonville, OR",
        details: 
            `I was part of the Viewer Team where their main focus was analyzing parts of the computer chip. 
            I mainly did both the frontend and backend development, with key responsibilities including data visualization, web development, and creating tools 
            for efficient analysis and presentation of chip data.`,
        tech: ["Python", "ShellScripting(Bash)", "HTML", "CSS", "JavaScript", "CVS(Concurrent Versions System)"],
        iconColor: "#4a90e2",
        icon: <FaBriefcase />,
    },
    {
        id: 6,
        title: "Honors High School Diploma",
        institution: "Parkrose High School",
        date: "September 2015 - June 2019",
        location: "Portland, OR",
        achievements: "GPA: 4.1 / 5.0",
        notable_coursework: [
            "Computer Science Principles",
            "Probability & Stats"
        ],
        iconColor: "#e29c4a",
        icon: <FaUserGraduate />
    }
]

export default timelineElements;