"use client"

import { motion } from 'framer-motion';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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
                            className={`px-6 py-2 md:text-lg xs:text-sm font-semibold transition-all ${
                                activeAboutMeType === "bio" ? "bg-accent text-black" : "bg-secondary text-white"
                            }`}
                            onClick={() => {
                                handleAboutMeType("bio")
                                document.getElementById("bio")?.scrollIntoView({ behavior: "smooth" })
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
                                document.getElementById("professional")?.scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            Professional Experience
                        </Button>
                        <Button
                            size="lg" 
                            className={`px-6 py-2 md:text-lg xs:text-sm font-semibold transition-all ${
                                activeAboutMeType === "hobbies" ? "bg-accent text-black" : "bg-secondary text-white"
                            }`}
                            onClick={() => {
                                handleAboutMeType("hobbies")
                                document.getElementById("hobbies")?.scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            Hobbies & Interests
                        </Button>
                    </div>
                
            </motion.div>

            {/* Content Sections (Outside the Container, Full Width) */}
            <div className="w-full text-center">

                {/* Biography Section */}
                <div id="bio" className="w-full flex flex-col items-center py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 2.5, ease: "easeOut" },
                        }}
                        className="flex flex-col xl:flex-row items-center xl:items-start xl:px-6 gap-12 w-full"
                    >
                        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] relative xl:mr-8">
                            {/* Pulsing Glow Effect */}
                            <motion.div
                                className="absolute inset-0 w-full h-full rounded-full border-4 border-secondary"
                                animate={{
                                    scale: [1, 1.05, 1],  // Makes it pulse
                                    boxShadow: [
                                        "0 0 15px rgba(74, 144, 226, 0.8)",  // Blue
                                        "0 0 15px rgba(74, 226, 156, 0.8)",  // Green
                                        "0 0 15px rgba(226, 156, 74, 0.8)",  // Orange
                                        "0 0 15px rgba(74, 144, 226, 0.8)",  // Blue (reset)
                                    ],
                                    borderColor: [
                                        "#4A90E2",  // Blue
                                        "#4ae29c",   // Green
                                        "#e29c4a",   // Orange
                                        "#4A90E2",   // Blue (reset)
                                    ],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 4,
                                    ease: "easeInOut",
                                }}
                            />
                            <Image
                                src="/Kevin.jpeg"
                                priority
                                quality={100}
                                fill
                                alt="Kevin in suit"
                                className="object-cover rounded-full"
                            />
                        </div>
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.3 } }
                            }}
                            className="text-center xl:text-left max-w-[800px] space-y-4"
                        >
                            <motion.h2 
                                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} 
                                transition={{ duration: 0.7 }} 
                                className="text-2xl md:text-4xl font-bold text-secondary text-center xl:text-left"
                            >
                                <span>Hello, I'm Kevin Vuong, an aspiring </span>
                                <TypeAnimation
                                    sequence={[
                                        "software", 1000, 
                                        "web", 1000,
                                        "front-end", 1000,
                                        "back-end", 1000,
                                        "full-stack", 1000,
                                    ]}
                                    repeat={Infinity}
                                    speed={20}
                                    cursor={false}
                                    wrapper="span"
                                />
                                <span> developer.</span>
                            </motion.h2>
                            {paragraphs.map((para, index) => {
                                return (
                                    <motion.p 
                                        key={index} 
                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
                                        transition={{ duration: 0.8, delay: index * 0.3 }}
                                        className="mt-4 text-white/70"
                                    >
                                        {para}
                                    </motion.p>
                                )  
                            })}
                        </motion.div>
                    </motion.div>
                    
                </div>

                {/* Professional Section */}
                <div id="professional" className="w-full py-12">
                    <p className="mt-4">This is the Professional Experience section content.</p>
                </div>

                {/* Hobbies Section */}
                <div id="hobbies" className="w-full py-12">
                    <p className="mt-4">This is the Hobbies & Interests section content.</p>
                </div>

            </div>
        </>
    )
}

export default AboutMe;

