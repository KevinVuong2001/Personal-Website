"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaLink, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { useState } from "react";
import { motion } from "framer-motion";
import Socials from "@/components/Socials";

const info = [
    {
        icon: <FaPhone />,
        title: "Phone",
        description: "(+1) 503 - 901 - 7109"
    },
    {
        icon: <MdEmail />,
        title: "Email",
        description: "vuong.kevin.2001@gmail.com"
    },
]

const Contact = () => {
    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setStatus("Message sent successfully!");
            setFormData({ firstname: "", lastname: "", email: "", phone: "", message: "" });
        } else {
            setStatus("Something went wrong. Try again.");
        }
    };

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.6, ease: "easeInOut" }}}
            className="py-12"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-12">
                    { /* Form Section */ }
                    <div className="xl:h-[54%] order-2 xl:order-none w-full xl:w-[750px]">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#202027] rounded-xl shadow-lg w-full">
                            <h3 className="text-4xl text-accent font-semibold">Let's Connect!</h3>
                            <p className="text-white/70">
                                Reach out via email or the form below.
                            </p>
                            { /* Inputs */ }
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                <Input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" aria-label="First Name" required />
                                <Input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" aria-label="Last Name" required />
                                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" aria-label="Email" required />
                                <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" aria-label="Phone" />
                            </div>
                            { /* Textarea */ }
                            <Textarea  
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange}
                                className="h-[200px]"
                                placeholder="Type your message here"
                                aria-label="Message"
                            />
                            { /* Button */ }
                            <Button type="submit" size="md" className="max-w-40 bg-accent hover:bg-accent-dark transition">
                                Send Message
                            </Button>
                            {status && <p className="text-center mt-4 text-sm">{status}</p>}
                        </form>
                    </div>

                    { /* Info Section */ }
                    <div className="flex-1 flex flex-col items-start order-1 xl:order-none mb-8 xl:mb-0">
                        <h3 className="text-2xl font-semibold text-accent mb-4">Contact Information</h3>
                        <ul className="flex flex-col gap-6">
                            {info.map((item, index) => (
                                <InfoItem key={index} icon={item.icon} title={item.title} description={item.description} />
                            ))}
                        </ul>
                        <h3 className="text-2xl font-semibold text-accent mt-10 mb-5">Connect with Me</h3>
                        <Socials
                            containerStyles="flex gap-8" 
                            iconStyles="w-[52px] h-[52px] border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent
                            hover:text-primary hover:transition-all duration-500 bg-[#202027]"/>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

const InfoItem = ({ icon, title, description }) => (
    <li className="flex items-center gap-4">
        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#202027] text-accent rounded-md flex items-center justify-center shadow-md">
            <div className="text-[28px]">{icon}</div>
        </div>
        <div className="flex-1">
            <p className="text-white/70">{title}</p>
            <h3 className="text-xl font-semibold">{description}</h3>
        </div>
    </li>
);

export default Contact