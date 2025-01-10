import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
    intial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    },
}

const reverseIndex = (index) => {
    const totalSteps = 6; //Number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
        
        {/* render 6 motion divs, each representing a step of the stairs. 
            
            Each div will have the same animation defined by the starAnimation
            The delay for each div will be calculated based on it's reversed index creating stagger effect 

        */}
        {[...Array(6)].map((_, index) => {
            return (
            <motion.div 
                key={index} 
                variants={stairAnimation} 
                initial="initial"
                animate="animate" 
                exit="exit" 
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1
                }}
                className="h-full w-full bg-accent relative"
            />
            );
        })}

        </>
    )
}

export default Stairs