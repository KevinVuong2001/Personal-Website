"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectIterm, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhone />,
        title: "Phone",
        description: "(+1)503 - 901 - 7109"
    },
    {
        icon: <MdEmail />,
        title: "Email",
        description: "vuong.kevin.2001@gmail.com"
    },
]

const Contact = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    { /* form */ }
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-10 bg-[#202027] rounded-xl"
                        >
                            <h3 className="text-4xl text-accent">Let's Connect!</h3>
                            <p>Reach out via email or the form below.</p>
                        </form>
                    </div>
                    { /* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        info
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact