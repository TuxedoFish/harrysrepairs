// React
import React from 'react'

// Animation
import { motion } from "framer-motion"

const Bounce = ({children, duration, delay, height}) => { 

    return (
        <motion.div
            animate={{ y: [0, -height, 0] }}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                loop: Infinity,
                repeatDelay: delay
            }}
        >
            {children}
        </motion.div>
    )
}

Bounce.defaultProps = {
    duration: 0.75,
    delay: 1, 
    height: 30
}

export default Bounce