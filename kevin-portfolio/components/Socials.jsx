import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

// Define your social links
const socials = [
    { icon: <FaGithub />, path: "https://github.com/KevinVuong2001" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kevin-vuong-b47664235/" }
  ];
  

// Socials component to render the list of social icons
const Socials = ({ containerStyles, iconStyles }) => {
    return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    })}
</div>;
};

export default Socials;