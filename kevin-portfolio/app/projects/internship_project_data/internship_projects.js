const internship_projects = [
    {
        num: "01",
        name: "Apply HyDE Search Method",
        category: "Information Retrieval & Search Optimization",
        company: "Oregon Health and Science University",
        problem: 
            `Although the dense retrieval method showed some promise in improving search results for qualifying candidates, it still produced a significant number of irrelevant results. 
            We aimed to determine if a new search method could enhance the accuracy and relevancy of the results.`,
        contribution: 
            `Collaborated on developing an advanced search algorithm leveraging Hypothetical Document Embeddings (HyDE) and Meta's Llama 3 large language model (LLM) to enhance information retrieval. 
            The method involved generating a synthetic doctor's note as a search query for dense retrieval.`,
        impact: 
            `Enhanced the accuracy of identifying potential clinical trial candidates, resulting in more relevant and precise matches across a wider range of medical topics, compared to the previous retrieval method.`,
        stack: [{name: "#Python"}, {name: "#MachineLearning"}, {name: "#MATLAB"}, {name: "#LargeLanguageModel"}, {name: "InformationRetrieval"}],
        image: "/projects/OHSU.jpeg"
    },
    {
        num: "02",
        name: "Go-Based Diagnostic Tool for Service Metrics",
        category: "Observability & Monitoring",
        company: "Cambia Health Solutions",
        problem: 
            `Ensuring optimal application performance required better visibility into key service metrics such as latency, request volume, and error rates. 
            The team needed a tool to analyze these metrics and recommend service level objectives (SLOs) for improved reliability.`,
        contribution: 
            `Developed a Go-based diagnostic tool that integrated with the Datadog API to retrieve existing Go services and their performance metrics. 
            Implemented a search functionality that allowed users to select specific services and view critical insights, including latency, hit counts, and error rates. 
            Designed the tool to analyze trends and generate recommended SLOs, helping engineers optimize application performance.`,
        impact: 
            `Improved service observability by providing a centralized tool for monitoring key performance metrics. 
            Enabled engineers to quickly identify bottlenecks, optimize SLOs, and enhance system reliability. 
            Additionally, presented my work to an audience of 60+ software engineers, demonstrating how the tool streamlined performance monitoring and proactive troubleshooting.`,
        stack: [{name: "#Go"}, {name: "#DatadogAPI"}, {name: "#ServiceMetrics"}, {name: "#Observability"}, {name: "#PerformanceMonitoring"}],
        image: "/projects/Datadog.png"
    },
    {
        num: "03",
        name: "Kubernetes Service Migration",
        category: "Cloud & DevOps",
        company: "Cambia Health Solutions",
        problem: "In Q2, our team's goal was to migrate Go services to Kubernetes to enhance scalability, improve deployment efficiency, and reduce infrastructure costs.",
        contribution: `Led the setup of a local Kubernetes development environment and deployed services using industry-standard tools. 
                Gained hands-on experience with Tilt (for live updates and rebuilds) and Minikube (for running Kubernetes locally). 
                Worked on containerizing services with Docker and ensuring seamless deployment using Kubernetes configurations.`,
        impact: `The migration resulted in improved deployment efficiency, reduced downtime, and optimized resource allocation, leading to better system performance and scalability. 
                Additionally, presented my work and insights to an audience of 60+ software engineers, demonstrating the impact of the migration and knowledge gained throughout the project.`,
        stack: [{name: "#Docker"}, {name: "#Kubernetes"}, {name: "#Tilt"}, {name: "#Minikube"}],
        image: "/projects/tilt.png",
        img_credit: "Image courtesy of Tilt (https://tilt.dev/)"
    },
    {
        num: "04",
        name: "Web-Based Performance Job Execution",
        category: "Performance Engineering & Web Development",
        company: "Siemens EDA",
        problem: 
            `Running performance jobs was time-consuming, requiring users to manually check parameters and wait for results, limiting efficiency and productivity.
            The goal is to developed an interactive web-based tool that runs or generates the command-line jobs.`,
        contribution: 
            `Built a web-based performance job execution tool using Python, CGI Programming, and Shell Scripting, enabling users to select frequently used parameters through an interactive UI.`,
        impact: 
            `Created an interactive interface that allows users to select options from a menu-like system, automatically generating and executing command-line jobs. 
            Added an email notification feature to update users on job status and results, enabling them to focus on other tasks instead of waiting for completion.`,
        stack: [{name: "#Python"}, {name: "#JavaScript"}, {name: "#HTML"}, {name: "#CSS"}, {name: "#CGIProgramming"}, {name: "#ShellScripting"}],
        image: "/projects/Siemens.jpeg"
    },
    {
        num: "05",
        name: "Creating Regression Report",
        category: "Data Visualization & Reporting",
        company: "Siemens EDA",
        problem: 
            `The existing regression report was outdated and lacked key functionalities for data analysis. 
            The goal was to develop a more interactive and user-friendly report by efficiently processing summary files and enhancing data visualization.`,
        contribution: 
            `Developed a new report generation system using Python, JavaScript, HTML, and CSS. 
            Implemented interactive features such as sorting (by date, numbers, and alphabetical order), tooltips for better data insights, and customizable reports based on user-defined parameters.`,
        impact: 
            `Improved report usability and efficiency by enabling users to quickly analyze regression results. 
            Added functionality to generate reports for first N rows, past N days (ex. weeks, months), and branch-specific runs, streamlining decision-making and debugging.`,
        stack: [{name: "#Python"}, {name: "#JavaScript"}, {name: "#HTML"}, {name: "#CSS"}, {name: "#BrowserDebuggersChrome"}],
        image: "/projects/Siemens.png"
    },
]

export default internship_projects;