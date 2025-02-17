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

const personal_projects = [
    {
        num: "01",
        category: "WonderTix",
        title: "project 1",
        description:
        `For my senior capstone, I collaborated with eight colleagues to develop WonderTix, an open-source software project sponsored by Portland Playhouse and initiated at Portland State University in 2021. 
        WonderTix is a comprehensive sales platform designed to manage task assignments, generate financial reports, and handle ticket sales. 
        In my role, I gained hands-on experience in full-stack development. 
        At the start of the project, the financial reports relied on hardcoded data, which limited flexibility for future updates. 
        To address this, I developed a Restful API endpoint to deliver critical financial information dynamically. 
        I also created a Sales Overview Report leveraging the new API, which served as a blueprint for integrating additional reports through a scalable backend approach.`,
        stack: [ {name: "#React"}, {name: "#TypeScript"}, {name: "#RESTfulAPIs"}, {name: "Node.js"}, {name: "PostgreSQL"} ],
        image: '/Portland_Playhouse.jpeg',
        github: "https://github.com/WonderTix/WonderTix",
    },
    {
        num: "02",
        category: "NBA Fantasy League",
        title: "project 2",
        description:
        `Developed a dynamic NBA Fantasy League web application utilizing the Yahoo Fantasy Sports API and OAuth 2.0 authentication to provide users with real-time access to their fantasy league data. 
        The application enables users to track player stats, view standings, search for free agents, and manage their rosters seamlessly. 
        By integrating Yahoo's API, the platform retrieves up-to-date fantasy data, allowing users to make informed decisions for their teams.`,
        stack: [ {name: "#Python"}, {name: "#Flask"}, {name: "#OAuth2"}, {name: "#RESTfulAPIs"}, {name: "#HTML"}, {name: "#Bootstrap"}, {name: "#JavaScript"}],
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

const Projects = () => {
    return (
        <div>Projects Page</div>
    )
}

export default Projects