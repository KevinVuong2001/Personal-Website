"use client"

import { FaPython, FaJs, FaGolang, FaHtml5, FaCss3Alt, FaReact, FaNode, FaDocker, FaGithub, FaLinux, FaUbuntu, FaConfluence, FaTrello, FaChrome } from 'react-icons/fa6' 
import { SiCplusplus, SiCircleci, SiTypescript, SiFlask, SiAmazondynamodb, SiDatadog, SiGoland, SiJira, SiKubernetes, SiGooglecloud, SiMacos, SiRuby, SiGnubash, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { BiLogoPostgresql, BiLogoVisualStudio} from "react-icons/bi"
import { RiFirebaseLine } from "react-icons/ri"
import { TbSql } from "react-icons/tb"

// Experience Data
const experience = {
    title: 'My Experience',
    description: 
        `Explore my professional experiences, where I’ve combined technical expertise with innovative problem-solving to deliver impactful solutions, 
        my journey reflects a commitment to growth and making a difference through technology.`,
    items: [
        {
            company: "Oregon Health and Science University",
            position: "Biomedical Informatics and Data Science Intern",
            duration: "June 2024 - September 2024",
            location: "Portland, OR",
            responsibilities: [
                `Collaborated with a team to develop a new search algorithm using Meta’s large language model, improving the accuracy
                of identifying potential patients for clinical trials compared to the previous method, resulting in more precise matches.`,
                `Merged multiple scripts into a single, flexible tool, enabling users to select behavior or output type, streamlining
                workflow, reducing maintenance, and enhancing efficiency and adaptability.`,
            ]
        },
        {
            company: "Portland Playhouse",
            position: "Full-Stack Developer (Senior Capstone)",
            duration: "September 2023 - March 2024",
            location: "Portland, OR",
            responsibilities: [
                `Collaborated with a team to develop real-world software solutions for Portland Playhouse as part of a senior capstone project.`,
                `Created a Restful API endpoint to deliver critical event information and financial data, reducing data retrieval time, and
                enhancing the accuracy of sales report generation.`,
                `Implemented advanced web functionalities using React, enabling users to filter events based on date range, sort data, and
                update sales reports dynamically without refreshing, reducing report generation time by 25%.`,
                `Developed a sales overview report using the new API endpoint, transitioning from hardcoded data to a dynamic,
                backend-driven approach for future reports.`
            ]
        },
        {
            company: "Cambia Health Solutions",
            position: "Software Development Engineering Intern (MECOP)",
            duration: "March 2023 - December 2023",
            location: "Portland, OR",
            responsibilities: [
                `Implemented Datadog Application Performance Monitoring in Go services, enhancing performance monitoring for
                developers and enabling DevOps teams to proactively address critical issues before affecting end users.`,
                `Led the migration of services to Kubernetes, optimizing for time and cost efficiencies, while enabling advanced
                deployment strategies, enhancing scalability, and bolstering security.`,
                `Developed a Go diagnostic tool that providing critical insights into service metrics—including latency, hits, and error
                rates-and recommending service level objectives to ensure optimal application performance and customer service.`,
                `Fixing bugs involving LocalStack, so developers can continue to test AWS applications locally and helping developers maintain efficiency
                and speed in their development workflows.`
            ]
        },
        {
            company: "Siemens EDA",
            position: "Software Engineer Intern (MECOP)",
            duration: "March 2022 - September 2022",
            location: "Wilsonville, OR",
            responsibilities: [
                `Redesigned the regression report system, adding sortable data, customizable reports, and improved visuals, which
                boosted data accessibility, enhanced user experience, and increased time efficiency by 30%.`,
                `Designed an interactive web interface for running performance jobs, enabling server-side command execution and
                optional email notifications, reducing user time investment by 50% and allowing focus on other tasks.`,
                `Developed a tool for analyzing and extracting key information from various computer chips, facilitating a better
                understanding of chip structures and improving bug detection efficiency.`
            ]
        },
        {
            company: "Parkrose High School",
            position: "Lifeguard and Swim Instructor",
            duration: "July 2017 - September 2021",
            location: "Portland, OR",
            responsibilities: [
                `Supervised swimmer's activities, ensuring safety and adherence to pool policies, maintaining a safe environment.`,
                `Provided emergency medical support, including CPR, AED, and First Aid, ensuring prompt and effective response to health-related incidents,
                contributing to a 100% safety record.`,
                `Instructed and mentored beginners in swimming fundamentals, helping students improve their skills and build confidence in the water.`,
                `Enforced pool regulations and safety policies, proactively preventing accidents and ensuring compliance with safety standards.`,
                `Monitored and inspected pool facilities, chemicals, and equipment, maintaining operational safety and cleanliness to ensure a high quality
                experience for all swimmers.`,
            ]
        }
    ]

};

// Education Data
const education = {
    title: "My Education",
    description:
        `Explore my academic journey, where I follow my passion for problem-solving and software development.`,
    items: [
        {
            institution: "Portland State University",
            degree: "Bachelor of Science in Computer Science",
            duration: "September 2019 - June 2024",
            GPA: 3.91,
            note: "summa cum laude",
            coursework: [
                "Algorithm and Complexity",
                "Artificial Intelligence",
                "Data Structures",
                "Database Management",
                "Internet, Web, & Cloud Systems",
                "Numerical Computation",
                "Voice Assistants",
                "Web Development",
            ],
            achievements: [
                `President's List (2019 - 2023)`,
                `Dean's List (2024)`,
            ],
        },
        {
            institution: "Parkrose High School",
            degree: "High School Diploma",
            duration: "Septenber 2015 - June 2019",
            GPA: 4.1,
            note: "Honors",
            coursework: [
                "Computer Science Principles",
                "Probability & Stats I & II",
            ],
            achievements: [
                `Honor Roll (2015 - 2019)`,
                `5A State Champion in Water Polo (2018)`,
                `State-level in Water Polo (2015 - 2018)`,
                `State-level in Swimming (2019)`,
                `State-level in Band/Orchestra (2018 - 2019)`,
            ]
        }
    ]
};

// Skills Data
const skills = {
    title: "My Skills",
    description:
        `I bring a diverse set of technical skills, ranging from backend development to frontend development. 
        From building full-stack applications and designing RESTful APIs to working with cloud platform and databases,
        my journey demonstrates a dedication to mastering modern technologies and solving complex challenges.`,
    program_lang: [
        {
            icon: <FaPython />,
            name: 'Python',
        },
        {
            icon: <FaJs />,
            name: 'JavaScript',
        },
        {
            icon: <FaGolang />,
            name: "Go",
        },
        {
            icon: <SiCplusplus />,
            name: "C++"
        },
        {
            icon: <TbSql />,
            name: "SQL",
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript"
        },
        {
            icon: <SiRuby />,
            name: "Ruby",
        },
        {
            icon: <SiGnubash />,
            name: "Shell Scripting (Bash)",
        },
    ],
    web_tech: [
        {
            icon: <FaHtml5 />,
            name: "HTML5"
        },
        {
            icon: <FaCss3Alt />,
            name: "CSS3"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS"
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiFlask />,
            name: "Flask"
        },
        {
            icon: <FaNode />,
            name: "Node.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js"
        },
    ],
    database: [
        {
            icon: <BiLogoPostgresql />,
            name: "PostgreSQL",
        },
        {
            icon: <RiFirebaseLine />,
            name: "Cloud Firestore",
        },
        {
            icon: <SiAmazondynamodb />,
            name: "DynamoDB",
        },
    ],
    cloud_tools: [
        {
            icon: <SiDatadog />,
            name: "Datadog",
        },
        {
            icon: <FaDocker />,
            name: "Docker",
        },
        {
            icon: <SiKubernetes />,
            name: "Kubernetes",
        },
        {
            icon: <SiGooglecloud />,
            name: "Google Cloud Platform",
        },
        {
            icon: <SiCircleci />,
            name: "CircleCI (CI/CD)",
        },
    ],
    dev_tools: [
        {
            icon: <BiLogoVisualStudio />,
            name: "Visual Studio Code"
        },
        {
            icon: <SiGoland />,
            name: "Goland"
        },
        {
            icon: <FaChrome />,
            name: "Chrome DevTools"
        },
        {
            icon: <FaGithub />,
            name: "Github",
        },
        {
            icon: <SiJira />,
            name: "Jira",
        },
        {
            icon: <FaConfluence />,
            name: "Confluence",
        },
        {
            icon: <FaTrello />,
            name: "Trello",
        },
    ],
    op_system: [
        {
            icon: <FaLinux />,
            name: "Linux",
        },
        {
            icon: <FaUbuntu />,
            name: "Ubuntu",
        },
        {
            icon: <SiMacos />,
            name: "macOS",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className="min-h-[70vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="Experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[400px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="Experience">Experience</TabsTrigger>
                        <TabsTrigger value="Education">Education</TabsTrigger>
                        <TabsTrigger value="Skills">Skills</TabsTrigger>
                    </TabsList>
                
                    {/* content */ }
                    <div className="min-h-[70vh] w-full">
                        { /* experience */ }
                        <TabsContent value="Experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[700px] text-white/70 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[40px]">
                                    {experience.items.map((item, index) => {
                                            return(
                                                <li 
                                                    key={index} 
                                                    className="bg-[#202027] py-7 px-10 rounded-xl"
                                                >
                                                    <span className="text-xl">{item.position}</span>
                                                    <h2 className="text-xl min-h-[40px]">{item.company}</h2>
                                                    <h3 className="text-accent">{item.duration}</h3>
                                                    <h3 className="text-accent min-h-[40px]">{item.location}</h3>
                                                    <div className="text-left">
                                                        <ul className='list-disc pl-5 marker:text-secondary'>
                                                            { /* list of responsibilities */ }
                                                            {item.responsibilities.map((responsibility, i) => (
                                                                <li key={i}>{responsibility}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                        
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        { /* education */ }
                        <TabsContent value="Education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[700px] text-white/70 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[40px]">
                                    {education.items.map((item, index) => {
                                            return(
                                                <li 
                                                    key={index} 
                                                    className="bg-[#202027] py-7 px-10 rounded-xl"
                                                >
                                                    <span className="text-xl">{item.institution}</span>
                                                    <h2 className="text-xl">{item.degree}</h2>
                                                    <h2 className="text-xl min-h-[40px]">{item.note}</h2>
                                                    <h3 className="text-accent">{item.duration}</h3>
                                                    <h3 className="text-accent min-h-[40px]">GPA: {item.GPA}</h3>
                                                    <div className="text-left">
                                                        <h3 className="min-h-[40px] font-bold">Coursework:</h3>
                                                        <ul className='grid grid-cols-2 list-disc pl-6 gap-x-6 marker:text-secondary'>
                                                            { /* list of coursework */ }
                                                            {item.coursework.map((coursework, i) => (
                                                                <li key={i}>{coursework}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="text-left">
                                                        <h3 className="min-h-[20px] font-bold">Achievements:</h3>
                                                        <ul className='list-disc pl-5 marker:text-secondary'>
                                                            { /* list of achievements */ }
                                                            {item.achievements.map((achievement, i) => (
                                                                <li key={i}>{achievement}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        { /* Skills */ }
                        <TabsContent value="Skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[700px] text-white/70 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                    { /* Programming Languages */ }
                                    <h3 className="min-h-[50px] font-bold text-2xl xl:text-left text-center">Programming Languages:</h3>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-5">
                                        {skills.program_lang.map((lang, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#202027] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {lang.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black font-semibold">
                                                            <p>{lang.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })}
                                    </ul>
                                    { /* Web Technologies */}
                                    <h3 className="min-h-[50px] font-bold text-2xl xl:text-left text-center mt-10">Web Technologies:</h3>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-5">
                                        {skills.web_tech.map((web, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#202027] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {web.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black font-semibold">
                                                            <p>{web.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })}
                                    </ul>
                                    { /* Database Technologies */ }
                                    <h3 className="min-h-[50px] font-bold text-2xl xl:text-left text-center mt-10">Database Technologies:</h3>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-5">
                                        {skills.database.map((db, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#202027] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {db.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black font-semibold">
                                                            <p>{db.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })}
                                    </ul>
                                    { /* Cloud & DevOps */ }
                                    <h3 className="min-h-[50px] font-bold text-2xl xl:text-left text-center mt-10">Cloud and DevOps:</h3>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-5">
                                        {skills.cloud_tools.map((cloud, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#202027] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {cloud.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black font-semibold">
                                                            <p>{cloud.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })}
                                    </ul>
                                    { /* Software Development Tools */ }
                                    <h3 className="min-h-[50px] font-bold text-2xl xl:text-left text-center mt-10">Software Development Tools:</h3>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-5">
                                        {skills.dev_tools.map((dev, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#202027] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {dev.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black font-semibold">
                                                            <p>{dev.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })}
                                    </ul>
                                    { /* Operating Systems */ }
                                    <h3 className="min-h-[50px] font-bold text-2xl xl:text-left text-center mt-10">Operating Systems:</h3>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-5">
                                        {skills.op_system.map((op, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#202027] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {op.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black font-semibold">
                                                            <p>{op.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume