"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub  } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WorkSliderBtn from "@/components/WorkSliderBtn";

const personal_projects = [
    {
        num: "01",
        category: "Full-Stack",
        name: "WonderTix",
        title: "project 1",
        description:
        `For my senior capstone, I collaborated with eight colleagues to develop WonderTix, an open-source software project sponsored by Portland Playhouse and initiated at Portland State University in 2021. 
        WonderTix is a comprehensive sales platform designed to manage task assignments, generate financial reports, and handle ticket sales. 
        At the start of the project, the financial reports relied on hardcoded data, which limited flexibility for future updates. 
        To address this, I developed a Restful API endpoint to deliver critical financial information dynamically. 
        I also created a Sales Overview Report leveraging the new API, implemented in React and TypeScript which served as a blueprint for integrating additional reports through a scalable backend approach.`,
        stack: [ {name: "#React"}, {name: "#TypeScript"}, {name: "#RESTfulAPIs"}, {name: "#Node.js"}, {name: "#PostgreSQL"} ],
        image: '/projects/Portland_Playhouse.jpeg',
        github: "https://github.com/WonderTix/WonderTix",
    },
    {
        num: "02",
        category: "Full-Stack/Cloud",
        name: "NBA Fantasy League",
        title: "project 2",
        description:
        `Developed a dynamic NBA Fantasy League web application utilizing the Yahoo Fantasy Sports API and OAuth 2.0 authentication to provide users with real-time access to their fantasy league data. 
        The application enables users to track player stats, view standings, search for free agents, and manage their rosters seamlessly. 
        By integrating Yahoo's API, the platform retrieves up-to-date fantasy data, allowing users to make informed decisions for their teams.`,
        stack: [ {name: "#Python"}, {name: "#Flask"}, {name: "#OAuth2"}, {name: "#GoogleCloud"}, {name: "#Firestore"}, {name: "#RESTfulAPIs"}, {name: "#HTML"}, {name: "#Bootstrap"}, {name: "#JavaScript"}],
        image: '/projects/NBA_Fantasy_Home.png',
        github: "https://github.com/KevinVuong2001/Yahoo-NBA-Fantasy-League-Project",
    },
]

const internship_projects = [
    {
        num: "01",
        category: "Apply HyDE Search Method",
        company: "Oregon Health and Science University",
        problem: 
            `Although the dense retrieval method showed some promise in improving search results for qualifying candidates, it still produced a significant number of irrelevant results. 
            We aimed to determine if a new search method could enhance the accuracy and relevancy of the results.`,
        contribution: 
            `Collaborated with a team to develop an innovative search algorithm using Meta’s Llama 3 large language model (LLM) to generate a typical doctor's note. 
            This note was then used as a query for dense retrieval, aiming to improve the precision of search results.`,
        impact: 
            `Improved the accuracy of identifying potential clinical trial candidates, resulting in more relevant and precise matches across a wider range of medical topics, compared to the previous retrieval method.`,
        stack: [{name: "#Python"}, {name: "#MachineLearning"}, {name: "#MATLAB"}, {name: "#LargeLanguageModel"}, {name: "InformationRetrieval"}],
        image: "/projects/OHSU.png"
    },
    {
        num: "02",
        category: "Go-Based Diagnostic Tool for Service Metrics",
        company: "Cambia Health Solutions",
        problem: 
            `Ensuring optimal application performance required better visibility into key service metrics such as latency, request volume, and error rates. 
            The team needed a tool to analyze these metrics and recommend service level objectives (SLOs) for improved reliability.`,
        contribution: 
            `Developed a Go-based diagnostic tool that integrated with the **Datadog API** to retrieve existing Go services and their performance metrics. 
            Implemented a search functionality that allowed users to select specific services and view critical insights, including latency, hit counts, and error rates. 
            Designed the tool to analyze trends and generate recommended SLOs, helping engineers optimize application performance.`,
        impact: 
            `Improved service observability by providing a centralized tool for monitoring key performance metrics. 
            Enabled engineers to quickly identify bottlenecks, optimize SLOs, and enhance system reliability. 
            Additionally, presented my work to an audience of **60+ software engineers**, demonstrating how the tool streamlined performance monitoring and proactive troubleshooting.`,
        stack: [{name: "#Go"}, {name: "#DatadogAPI"}, {name: "#ServiceMetrics"}, {name: "#Observability"}, {name: "#PerformanceMonitoring"}],
        image: "/projects/Datadog.png"
    },
    {
        num: "03",
        category: "Kubernetes Service Migration",
        company: "Cambia Health Solutions",
        problem: "In Q2, our team's goal was to migrate Go services to Kubernetes to enhance scalability, improve deployment efficiency, and reduce infrastructure costs.",
        contribution: `Led the setup of a local Kubernetes development environment and deployed services using industry-standard tools. 
                Gained hands-on experience with Tilt (for live updates and rebuilds), Helm (for managing Kubernetes applications), and Minikube (for running Kubernetes locally). 
                Worked on containerizing services with Docker and ensuring seamless deployment using Kubernetes configurations.`,
        impact: `The migration resulted in improved deployment efficiency, reduced downtime, and optimized resource allocation, leading to better system performance and scalability. 
                Additionally, presented my work and insights to an audience of **60+ software engineers**, demonstrating the impact of the migration and knowledge gained throughout the project.`,
        stack: [{name: "#Docker"}, {name: "#Kubernetes"}, {name: "#Tilt"}, {name: "#Helm"}, {name: "#Minikube"}],
        image: "/projects/Docker_Tilt.avif"
    },
    {
        num: "04",
        category: "Web-Based Performance Job Execution",
        company: "Siemens EDA",
        problem: 
            `Running performance jobs was time-consuming, requiring users to manually check parameters and wait for results, limiting efficiency and productivity.`,
        contribution: 
            `Developed a web application that provides an intuitive UI for users to configure and execute performance jobs with frequently used parameters.`,
        impact: 
            `Created an interactive interface that allows users to select options from a menu-like system, automatically generating and executing command-line jobs. 
            Added an email notification feature to update users on job status and results, enabling them to focus on other tasks instead of waiting for completion.`,
        stack: [{name: "#Python"}, {name: "#JavaScript"}, {name: "#HTML"}, {name: "#CSS"}, {name: "#CGIProgramming"}, {name: "#ShellScripting"}],
        image: "/projects/CGI_logo.png"
    },
    {
        num: "05",
        category: "Creating Regression Report",
        company: "Siemens EDA",
        problem: 
            `The existing regression report was outdated and lacked key functionalities for data analysis. 
            The goal was to develop a more interactive and user-friendly report by efficiently processing summary files and enhancing data visualization.`,
        contribution: 
            `Developed a new report generation system using Python, JavaScript, HTML, and CSS. 
            Implemented interactive features such as sorting (by date, numbers, and alphabetical order), tooltips for better data insights, and customizable reports based on user-defined parameters.`,
        impact: 
            `Improved report usability and efficiency by enabling users to quickly analyze regression results. 
            Added functionality to generate reports for first N rows, past N days, and branch-specific runs, streamlining decision-making and debugging.`,
        stack: [{name: "#Python"}, {name: "#JavaScript"}, {name: "#HTML"}, {name: "#CSS"}, {name: "#BrowserDebuggersChrome"}],
        image: "/projects/Siemens.jpeg"
    },
]

const keywords = ["open-source", 
                "API", 
                "Restful API", 
                "scalable backend approach", 
                "financial reports", "dynamically", 
                "Sales Overview Report", 
                "WonderTix", 
                "blueprint", 
                "sponsored by Portland Playhouse",
                "React",
                "TypeScript",
                "dynamic",
                "Yahoo Fantasy Sports API",
                "OAuth 2.0",
                "real-time access",
                "web application",
                "up-to-date"
            ];

const highlightKeywords = (text, keywords) => {
    // Create a regex pattern dynamically from the keywords list
    const pattern = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");

    return text.split(pattern).map((part, index) => 
        keywords.includes(part) 
            ? <span key={index} className="font-extrabold text-accent">{part}</span> 
            : part
    );
};

const ProjectDescription = ({ description }) => {
    return <p className="text-white/70 text-sm md:text-base leading-relaxed">{highlightKeywords(description, keywords)}</p>;
};

const Projects = () => {      
    const [activeProjectType, setActiveProjectType] = useState("personal");
    const [personalProject, setPersonalProject] = useState(personal_projects[0]);
    const [internshipProject, setInternshipProject] = useState(internship_projects[0]);
    
    const handlePersonalSlideChange = (swiper) => {
        // Get Current Index
        const currentIndex = swiper.activeIndex;
        //Update project state based on current index
        setPersonalProject(personal_projects[currentIndex])
    }

    // Function to render Personal Projects
    const renderPersonalProject = (project) => (
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[70%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold">
                    {project.num}
                </div>
                {/* project name and category*/}
                <div className="group space-y-3 md:space-y-4">
                    <h2 className="text-3xl md:text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                        {project.name}
                    </h2>
                    <h2 className="text-2xl md:text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                        {project.category} Project
                    </h2>

                    {/* Description */}
                    <ProjectDescription 
                            description={activeProjectType === "personal" ? personalProject.description : internshipProject.description} 
                    />
                    {/* Stack */}
                    <ul className="flex flex-wrap gap-4">
                        {project.stack.map((item, index) => {
                            return (
                                <li key={index} className="text-xl text-[#AFCBFF] font-bold">
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                    {/* Border */}
                    <div className="border-b border-white/20"></div>
                    {/* GitHub Buttons */}
                    <Link href={project.github} target="_blank">
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black font-semibold">
                                    <p>GitHub Repository</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </Link>
                </div>
            </div>
            <div className="w-full xl:w-[52%]">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handlePersonalSlideChange}
                >
                    {personal_projects.map((p, index) => {
                        return <SwiperSlide key={index} className="w-full">
                            <div className="h-[460px] w-full relative group flex justify-center items-center bg-pink-50/60">
                                {/* Overlay */}
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <img src={project.image} alt="Project Screenshot" className="w-full h-full object-cover"/>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    {/* slider buttons */}
                    <WorkSliderBtn 
                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_25px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[30px] w-[50px] flex justify-center items-center transition-all"
                    />
                </Swiper>
            </div>
        </div>
    );

    // Function to render Internship Projects
    const renderInternshipProject = (project) => (
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[70%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <h2 className="text-4xl font-bold">{project.category}</h2>
                <div className="space-y-4">
                    <p className="text-lg text-gray-300"><span className="font-semibold">Problem:</span> {project.problem}</p>
                    <p className="text-lg text-gray-300"><span className="font-semibold">Contribution:</span> {project.contribution}</p>
                    <p className="text-lg text-gray-300"><span className="font-semibold">Impact:</span> {project.impact}</p>
                </div>
            </div>
            <div className="w-full xl:w-[50%] xl:pl-[60px]">
                <img src={project.image} alt="Project Screenshot" className="rounded-lg shadow-lg"/>
            </div>
        </div>
    );

    return(
        <div className="container mx-auto flex flex-col items-start py-6">
            {/* Buttons to Toggle Project Type */}
            <div className="flex gap-4 mb-3">
                <button 
                    className={`px-6 py-2 text-lg font-semibold rounded-md transition-all ${
                        activeProjectType === "personal" ? "bg-accent text-black" : "bg-secondary text-white"
                    }`}
                    onClick={() => setActiveProjectType("personal")}
                >
                    Personal Projects
                </button>
                <button 
                    className={`px-6 py-2 text-lg font-semibold rounded-md transition-all ${
                        activeProjectType === "internship" ? "bg-accent text-black" : "bg-secondary text-white"
                    }`}
                    onClick={() => setActiveProjectType("internship")}
                >
                    Internship Projects
                </button>
            </div>

            {/* Motion Section for Animation */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 1, 
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
                }}
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
            >
                <div className="container mx-auto">
                    {/* Conditional Rendering of Project Content */}
                    {activeProjectType === "personal" 
                        ? renderPersonalProject(personalProject) 
                        : renderInternshipProject(internshipProject)
                    }
                </div>
            </motion.section>
        </div>
    );
};

export default Projects