"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = (image) => {
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
          {/* Pulsing Glow Effect */}
          <motion.div
            className="absolute inset-0 w-full h-full rounded-full border-4 border-secondary"
            animate={{
              scale: [1, 1.1, 1],  // Makes it pulse
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
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <Image
            src="/Profile_Pic.jpg"
            priority
            quality={100}
            fill
            alt="Kevin in front of a tree"
            className="object-cover rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;