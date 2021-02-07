// React
import React from 'react'

// Animation
import { motion } from "framer-motion"

const Swing = ({children}) => { 
    return (
        <motion.div
            animate={{ rotate: [0, 10, -10, 5, -5, 0] }}
            transition={{ yoyo: Infinity, repeatDelay: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
        >
            {children}
        </motion.div>
    )
}

export default Swing