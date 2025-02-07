"use client";

import { BsArrowDownRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion"

const services = [
    {
        icon: "/icons/software-developer.svg",
        title: "Web Development",
        description: "Building modern, scalable web applications with experience in React, Flask, and Go.",
        bullets: [
            "Frontend development with React, TypeScript, HTML, and CSS, with ongoing learning in Next.js and Tailwind CSS",
            "Backend development with Python, Flask, Node.js, RESTful APIs, OAuth authentication, and more.",
            "Database integration with PostgreSQL and Firestore, with hands-on project experience, and an interest in learning more about AWS databases.",
            "Cloud deployment using Google Cloud and Docker, with hands-on experience in Kubernetes and a continuous drive to further deepen my expertise."
        ]
    },
    {
        icon: "/icons/app.svg",
        title: "Software Development",
        description: "Creating high-performance software solutions, from backend systems to cloud infrastructure.",
        bullets:[
            "RESTful API development and microservices",
            "Performance optimization and debugging",
            "Experience with CI/CD pipelines using CircleCI and leveraging Datadog for monitoring and observability",
            "Automation and scripting with Python, Go, and Bash"
        ]
    },
    {
        icon: "/icons/saas.svg",
        title: "Cloud & DevOps Solution",
        description: "Enhancing scalability, security, and efficiency with modern cloud and DevOps tools.",
        bullets: [
            "Cloud architecture and deployment (Google Cloud, Kubernetes, Docker)",
            "Infrastructure monitoring and performance tracking (Datadog, CI/CD Pipelines)",
            "Service migrations and optimiziations (Kubernetes, AWS Localstack)"
        ]
    },
    {
        icon: "/icons/data-science.svg",
        title: "Data Science & Machine Learning",
        description: "Applying machine learning and data-driven techniques to extract insights and optimize search systems.",
        bullets: [
            "Data analysis and machine learning with Python, SQL, and MATLAB",
            "Experienced in learning and applying various information retrieval methods, including Sparse Retrieval, Dense Retrieval, and HyDE (Hypothetical Document Embedding)",
            "Script optimization and automation to streamline workflows"
        ]
    }
]

const Capabilities = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial = {{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div 
                                key={index}
                                className="flex flex-col justify-center gap-6 group"
                            >
                                <div className="flex items-center gap-6 mb-4">
                                    <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4 object-cover rounded-full bg-[#FFCCBC]">
                                        <img 
                                            src={service.icon} 
                                            alt={service.title}
                                            className="w-full h-full object-cover rounded-full group-hover:bg-accent transition-all duration-500 group-hover:-rotate-[360deg]"
                                        />
                                    </div>
                                    { /* Title */ }
                                    <div className="flex flex-col justify-center ml-auto">
                                        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xlg:text-[40px] font-semibold">
                                            {service.title}
                                        </h2>
                                    </div>
                                </div>
                                { /* Description */ }
                                <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xlg:text-[36px]">{service.description}</p>
                                <ul className="list-disc pl-5 marker:text-accent">
                                    {service.bullets.map((bullet, b_index) => {
                                        return (
                                            <li key=
                                                {b_index}
                                                className="text-[16px] md:text-[20px]"
                                            >
                                                {bullet}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="border-b border-white/40 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}
export default Capabilities