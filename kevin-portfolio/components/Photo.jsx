"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[500px] h-[500px] relative"
        >
          <Image
            src="/Profile_Pic.jpg"
            priority
            quality={100}
            fill
            alt="Kevin in front of a tree"
            className="object-cover rounded-full"
          />
        </motion.div>

        {/* circle animation */}
        <motion.svg
          fill="transparent"
          viewBox="0 0 490 490"  // Ensures it fits the size of the image
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <motion.circle
            cx="250" 
            cy="250" 
            r="260" 
            stroke="#00FFFF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["40 120 25 25", "16 25 92 72", "35 250 22 22"],
              rotate: 360,  
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;