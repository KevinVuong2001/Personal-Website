"use client"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries} from 'react-icons/ci'

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "capabilities",
        path: "/capabilities",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "about me",
        path: "/aboutme",
    },
    {
        name: "contact me",
        path: "/contact"
    }
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle>
                    <span className="sr-only">Navigation Menu</span>
                </SheetTitle>
                {/* logo */ }
                <div className='mt-30 mb-40 text-center text-2xl'>
                    <Link href="/" />
                        <h1 className="text-4xl font-semibold">
                            Kevin<span className="text-accent">.</span>
                        </h1>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} 
                            text-xl capitalize hover:text-accent-hover transition-all`}>
                            {link.name}
                        </Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
export default MobileNav