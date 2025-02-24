"use client"

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

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

// Personal Project Data
import personal_keywords from "./personal_project_data/personal_keywords";
import personal_projects from "./personal_project_data/personal_projects";

// Internship Project Data
import internship_keywords from "./internship_project_data/internship_keywords";
import internship_projects from "./internship_project_data/internship_projects";
            
const ProjectDetails = ({ description, keywords }) => {
    return <p className="text-white/70 text-sm md:text-base leading-relaxed">{highlightKeywords(description, keywords)}</p>;
};

const highlightKeywords = (text, keywords, excludeKeywords = []) => {
    // Escape special regex characters, including apostrophes
    const escapeRegex = (word) => word.replace(/[-/\\^$*+?.()|[\]{}’]/g, "\\$&"); // Includes curly apostrophe ‘

    // Ensure apostrophes are treated as part of the word by keeping them in the regex
    const pattern = new RegExp(`(${keywords.map(escapeRegex).join("|")})`, "gi");

    return text.split(pattern).map((part, index) =>
        // Only highlight if part is a keyword and not in the exclude list
        keywords.some(keyword => part.toLowerCase() === keyword.toLowerCase()) && 
        !excludeKeywords.some(exclude => part.toLowerCase() === exclude.toLowerCase())
            ? <span key={index} className="font-extrabold text-accent">{part}</span>
            : part
    );
};


const Projects = () => {      
    const [activeProjectType, setActiveProjectType] = useState("personal");
    const [personalProject, setPersonalProject] = useState(personal_projects[0]);
    const [internshipProject, setInternshipProject] = useState(internship_projects[0]);

    // Create refs to store the swiper instances
    const personalSwiperRef = useRef(null);
    const internshipSwiperRef = useRef(null);
    
    const handlePersonalSlideChange = (swiper) => {
        // Get Current Index
        const currentIndex = swiper.activeIndex;
        //Update project state based on current index
        setPersonalProject(personal_projects[currentIndex])
    }
    const handleInternshipSlideChange = (swiper) => {
        // Get Current Index
        const currentIndex = swiper.activeIndex;
        //Update project state based on current index
        setInternshipProject(internship_projects[currentIndex])
    }

    // Effect to reset Swiper slide when project type changes
    useEffect(() => {
        if (activeProjectType === "personal") {
            personalSwiperRef.current?.swiper.slideTo(0); // Reset to slide 0
            personalSwiperRef.current?.swiper.update(); // Force update of swiper
            setPersonalProject(personal_projects[0])
        } else if (activeProjectType === "internship") {
            internshipSwiperRef.current?.swiper.slideTo(0); // Reset to slide 0
            internshipSwiperRef.current?.swiper.update(); // Force update of swiper
            setInternshipProject(internship_projects[0])
        }
    }, [activeProjectType]); // This will run when `activeProjectType` changes

    const handleProjectTypeChange = (type) => {
        setActiveProjectType(type);
    };

    // Function to render Personal Projects
    const renderPersonalProject = (project) => (
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[70%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold">
                    {project.num}
                </div>
                {/* project name and category*/}
                <div className="group space-y-4 md:space-y-5">
                    <h2 className="text-3xl md:text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                        {project.name}
                    </h2>
                    <h3 className="text-2xl md:text-[32px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                        {project.category} Project
                    </h3>
                    {/* Description */}
                    <ProjectDetails 
                            description={personalProject.description}
                            keywords={personal_keywords}
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
                    ref={personalSwiperRef}
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
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold">
                    {project.num}
                </div>
                {/* project name, category, and company */}
                 <div className="group space-y-4 md:space-y-5">
                    <h2 className="text-3xl md:text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                        {project.name}
                    </h2>
                    <h3 className="text-2xl md:text-[32px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                        {project.category} Project
                    </h3>
                    <h4 className="text-xl md:text-[24px] font-bold text-accent-hover leading-none capitalize">
                        {project.company}
                    </h4>
                    {/* Problem */}
                    <div>
                        <h4 className="text-xl font-bold">Problem: </h4>
                        <ProjectDetails 
                            description={internshipProject.problem}
                            keywords={internship_keywords}
                        />
                    </div>
                    {/* Contribution */}
                    <div>
                        <strong className="text-xl font-extrabold">Contribution: </strong>
                        <ProjectDetails 
                            description={internshipProject.contribution}
                            keywords={internship_keywords}
                        />
                    </div>
                    {/* Impact */}
                    <div>
                        <strong className="text-xl font-extrabold">Impact: </strong>
                        <ProjectDetails 
                            description={internshipProject.impact}
                            keywords={internship_keywords}
                        />
                    </div>
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
                </div>
            </div>
            <div className="w-full xl:w-[52%]">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleInternshipSlideChange}
                    ref={internshipSwiperRef}
                >
                    {internship_projects.map((p, index) => {
                        return <SwiperSlide key={index} className="w-full">
                            <div className="h-[460px] w-full relative group flex justify-center items-center bg-pink-50/60">
                                {/* Overlay */}
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <img src={project.image} alt="Project Screenshot" className="w-full h-full object-cover"/>
                                </div>
                                {/* Check for img_credit and display if available */}
                                {p.img_credit && (
                                <div className="absolute bottom-0 left-0 p-2 text-xs text-white bg-black/50">
                                    <span>Image Credit: {p.img_credit}</span>
                                </div>
                            )}
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

    return(
        <div className="container mx-auto flex flex-col items-start py-6">
            {/* Buttons to Toggle Project Type */}
            <div className="flex gap-4 mb-3">
                <button 
                    className={`px-6 py-2 text-lg font-semibold rounded-md transition-all ${
                        activeProjectType === "personal" ? "bg-accent text-black" : "bg-secondary text-white"
                    }`}
                    onClick={() => handleProjectTypeChange("personal")}
                >
                    Personal Projects
                </button>
                <button 
                    className={`px-6 py-2 text-lg font-semibold rounded-md transition-all ${
                        activeProjectType === "internship" ? "bg-accent text-black" : "bg-secondary text-white"
                    }`}
                    onClick={() => handleProjectTypeChange("internship")}
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