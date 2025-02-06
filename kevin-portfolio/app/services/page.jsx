"use client";

import { BsArrowDownRightCircleFill } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
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
        title: "Software Development & Engineering",
        description: "Creating high-performance software solutions, from backend systems to cloud infrastructure.",
        bullets:[
            "RESTful API development and microservices",
            "Performance optimization and debugging",
            "Experience with CI/CD pipelines using CircleCI and leveraging Datadog for monitoring and observability",
            "Automation and scripting with Python, Go, and Bash"
        ]
    },
    {
        title: "Cloud & DevOps Solution",
        description: "Enhancing scalability, security, and efficiency with modern cloud and DevOps tools.",
        bullets: [
            "Cloud architecture and deployment (Google Cloud, Kubernetes, Docker)",
            "Infrastructure monitoring and performance tracking (Datadog, CI/CD Pipelines)",
            "Service migrations and optimiziations (Kubernetes, AWS Localstack)"
        ]
    },
    {
        title: "Data Science and Machine Learning",
        description: "Applying machine learning and data-driven techniques to extract insights and optimize search systems.",
        bullets: [
            "Data analysis and machine learning with Python, SQL, and MATLAB",
            "Experienced in learning and applying various information retrieval methods, including Sparse Retrieval (BM25, TF-IDF), Dense Retrieval, and HyDE (Hypothetical Document Embedding)",
            "Script optimization and automation to streamline workflows"
        ]
    }
]

const Service = () => {
    return (
        <div>Service</div>
    )
}

export default Service