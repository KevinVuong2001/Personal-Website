import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./card";

const hobbiesData = [
  {
    id: "swimming",
    hashtag: "#Swimming",
    title: "Swimming",
    description:
      `I've been a competitive swimmer for over a decade, specializing in the 200 Individual Medley, 100 Breaststroke, and 100 Backstroke. 
      Swimming has taught me discipline, resilience, and the thrill of pushing my limits in every race.`,
    notable_achievements: [
        '7th 5A OSAA 200 Free Style Relay (2019)',
        '12th 5A OSAA 100 Breaststroke (2019)',
        '1st Team All 5A North Conference 200 Medley Relay (2019)',
        '2nd Team All 5A North Conference 100 Breaststroke (2019)',
        '2nd Team All 5A North Conference 200 Free Style Relay (2019)',
        '2nd Team All 5A North Conference 200 Individual Medley (2016 - 2018)',
        '3rd Team All 5A North Conference 100 Breaststroke (2016 - 2017)',
        'Honorable Mention All 5A North Conference 200 Individual Medley (2016, 2019)'
    ],
    post: 
    [
        {
            media: "/hobbies/state_competition.mp4",
            description: "OSAA State 2019",
            type: "video"
        },
        {
            media: "/hobbies/swim_awards.jpg",
            description: "Awards Recognition 2016 - 2019",
            type: "image"
        },
    ],
  },
  {
    id: "waterpolo",
    hashtag: "#WaterPolo",
    title: "Water Polo",
    description:
      `I've played for water polo for 6 years and competed at a state level for 4 years.`,
    notable_achievements: [
        '5A OSAA State Champion (2018)',
        '2nd OSAA 5A State (2016)',
        '5th - 8th OSAA 5A State (2015, 2017)',
        'Honorable Mention All Mt Hood Conference (2018)'
    ],
    post: 
    [
        {
            media: "/hobbies/water_polo.mp4",
            description: "Craziest Shot of the Year",
            type: "video"
        },
    ],
  },
];

const Hobbies = () => {
    const [selectedHobby, setSelectedHobby] = useState(hobbiesData[0]);
  
    return (
      <div className="h-screen flex flex-col md:flex-row xs:flex-nowrap">
        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-wrap justify-center bg-primary p-3 gap-2 w-full">
            {hobbiesData.map((hobby) => (
                <button
                    key={hobby.id}
                    onClick={() => setSelectedHobby(hobby)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                    selectedHobby.id === hobby.id
                        ? "bg-blue-500 text-white"
                        : "hover:bg-accent-hover hover:text-black"
                    }`}
                >
                    {hobby.hashtag}
                </button>
            ))}
        </div>
  
        <div className="w-1/4 md:w-1/3 bg-primary p-4 border-r hidden md:block">
          <h2 className="text-xl font-bold mb-4">Hobbies & Interests</h2>
          <ul>
            {hobbiesData.map((hobby) => (
              <li
                key={hobby.id}
                onClick={() => setSelectedHobby(hobby)}
                className={`p-2 cursor-pointer rounded-md transition ${
                  selectedHobby.id === hobby.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-accent-hover hover:text-black"
                }`}
              >
                {hobby.hashtag}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Main Content */}
        <motion.div
          key={selectedHobby.id}
          className="flex-1 p-6 flex flex-col items-center text-center min-h-[70vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
            <div className="space-y-6">
                <h3 className="text-4xl font-bold">
                    {selectedHobby.title}
                </h3>
                <p className="max-w-[850px] text-white/70 mx-auto xl:mx-0">{selectedHobby.description}</p>
                {selectedHobby.post.map((item, index) => (
                    <Card 
                        key={index}
                        description={item.description}
                        media={item.media}
                        type={item.type}
                    />
                ))}
            </div>
        </motion.div>
      </div>
    );
  };
  
  export default Hobbies;