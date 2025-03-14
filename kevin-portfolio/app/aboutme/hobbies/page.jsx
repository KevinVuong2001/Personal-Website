import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const hobbiesData = [
  {
    id: "swimming",
    title: "#Swimming",
    description:
      "I've been a competitive swimmer for over a decade. My favorite stroke is freestyle!",
    image: "",
  },
  {
    id: "coding",
    title: "#Tech & Coding",
    description:
      "I enjoy building full-stack applications and exploring new technologies like Next.js and Tailwind CSS.",
    image: "",
  },
  {
    id: "finance",
    title: "#Finance & Investing",
    description:
      "I'm actively learning about the stock market and analyzing market trends and investment strategies.",
    image: "",
  },
];

const Hobbies = () => {
    const [selectedHobby, setSelectedHobby] = useState(hobbiesData[0]);
  
    return (
      <div className="h-screen flex flex-col md:flex-row">
        {/* Mobile Navigation */}
        <div className="md:hidden flex overflow-x-auto bg-gray-100 p-3 space-x-4 w-full">
          {hobbiesData.map((hobby) => (
            <button
              key={hobby.id}
              onClick={() => setSelectedHobby(hobby)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                selectedHobby.id === hobby.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {hobby.title}
            </button>
          ))}
        </div>
  
        <div className="w-1/4 bg-primary p-4 border-r hidden md:block">
          <h2 className="text-xl font-bold mb-4">Hobbies & Interests</h2>
          <ul>
            {hobbiesData.map((hobby) => (
              <li
                key={hobby.id}
                onClick={() => setSelectedHobby(hobby)}
                className={`p-2 cursor-pointer rounded-md transition ${
                  selectedHobby.id === hobby.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-primary"
                }`}
              >
                {hobby.title}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Main Content */}
        <motion.div
          key={selectedHobby.id}
          className="flex-1 p-6 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold">{selectedHobby.title}</h2>
          <img
            src={selectedHobby.image}
            alt={selectedHobby.title}
            className="w-full max-w-md h-60 object-cover rounded-md mt-4"
          />
          <p className="text-gray-700 mt-4 max-w-md">{selectedHobby.description}</p>
        </motion.div>
      </div>
    );
  };
  
  export default Hobbies;