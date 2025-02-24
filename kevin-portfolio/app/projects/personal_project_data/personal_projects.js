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

export default personal_projects;