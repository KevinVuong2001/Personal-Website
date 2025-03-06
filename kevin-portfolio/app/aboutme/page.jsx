"use client"

import { motion } from 'framer-motion';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Sections
import Autobiography from './autobiography/page';
import Professional from './professional/page';
import Hobbies from './hobbies/page';

const bio = 
    `Technology has been a major part of my life from a young age—whether it was playing games on my Nintendo DS or watching videos on YouTube, 
    I was always fascinated by how things worked behind the scenes. That curiosity led me to take my first Computer Science course, where I became captivated by how simple lines of code could build complex functionalities that impact our daily lives. 
    This passion drove me to pursue a degree in Computer Science at Portland State University, where I gained a strong foundation in software development, cloud computing, and data science.
    

    Beyond academics, I have hands-on experience across front-end, back-end, and full-stack development through internships and projects. 
    In my most recent internship, I've gained exposure into machine learning and data science, working on web development, backend systems, and information retrieval solutions. 
    These experiences have reinforced my passion for solving complex problems and optimizing technology for efficiency and performance.
    

    As technology continues to evolve, I am eager to contribute to innovative solutions that drive progress and create meaningful impact. 
    With my diverse background and adaptability, I thrive in dynamic environments where I can tackle challenges, learn new technologies, and build scalable, high-performing systems.
    `

const paragraphs = bio.split("\n\n")

const AboutMe = () => {
    const [activeAboutMeType, setActiveAboutMeType] = useState("bio");
    
    const handleAboutMeType = (type) => {
        setActiveAboutMeType(type)
    }
    return (
        <>
            {/* Navigation Section (Inside a Container) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, ease: "easeIn" }
                }}
                className="min-h-[10vh] flex flex-col xl:items-start sm:items-center justify-center px-6 py-10 xl:py-0"
            >
                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-col xl:flex-row justify-start gap-4 w-full max-w-[600px]">
                        <Button
                            size="lg" 
                            variant="outline"
                            className={`px-6 py-2 md:text-lg xs:text-sm font-semibold transition-all ${
                                activeAboutMeType === "bio" ? "bg-accent text-black" : "bg-secondary text-white"
                            }`}
                            onClick={() => {
                                handleAboutMeType("bio")
                            }}
                        >
                            Autobiography
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className={`px-6 py-2 md:text-lg xs:text-sm font-semibold transition-all ${
                                activeAboutMeType === "professional" ? "bg-accent text-black" : "bg-secondary text-white"
                            }`}
                            onClick={() => {
                                handleAboutMeType("professional")
                            }}
                        >
                            Professional Experience
                        </Button>
                        <Button
                            size="lg" 
                            variant="outline"
                            className={`px-6 py-2 md:text-lg xs:text-sm font-semibold transition-all ${
                                activeAboutMeType === "hobbies" ? "bg-accent text-black" : "bg-secondary text-white"
                            }`}
                            onClick={() => {
                                handleAboutMeType("hobbies")
                            }}
                        >
                            Hobbies & Interests
                        </Button>
                    </div>  
            </motion.div>

            {/* Content Sections (Outside the Container, Full Width) */}
            <div className="w-full text-center">
                {/* Biography Section */}
                <motion.div
                    key={activeAboutMeType} // Ensures animation triggers on section change
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
                    className="flex flex-col xl:flex-row items-center xl:items-start xl:px-6 gap-12 w-full"
                >
                    {activeAboutMeType === "bio" ? (
                        <>
                            {/* Autobiography Section */}
                            <div className="w-full flex flex-col items-center py-12">
                                <Autobiography />
                            </div>
                        </>
                    ) : activeAboutMeType === "professional" ? (
                        <>
                            {/* Professional Section */}
                            <div className="w-full py-12">
                                <Professional />
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Hobbies Section */}
                            <div className="w-full py-12">
                                <Hobbies />
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </>
    )
}

export default AboutMe;

