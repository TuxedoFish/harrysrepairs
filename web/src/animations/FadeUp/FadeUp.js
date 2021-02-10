// React
import React from 'react'

// Animation
import { motion } from "framer-motion"

const FadeUp = ({children, duration, height, animate}) => { 

    return (
        <motion.div
            animate={animate}
            variants={{
                open: { opacity: 0, y: height },
                closed: { opacity: 1, y: 0 },
            }}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: [0, 1]
            }}
        >
            {children}
        </motion.div>
    )
}

FadeUp.defaultProps = {
    duration: 0.75,
    height: 10,
    animate: "open"
}

export default FadeUp