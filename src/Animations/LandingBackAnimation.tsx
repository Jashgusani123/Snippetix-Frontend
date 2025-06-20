import React from 'react'
import {motion} from 'framer-motion'

const LandingBackAnimation = () => {
  return (
    <>
        <div className="fixed overflow-hidden inset-0 z-0">
            <motion.div
                className="shape shadow-4xl drop-shadow-white"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1 }}
                style={{ top: "23%", left: "2%", transform: "rotate(1deg)" }} />
            <motion.div
                className="shape shadow-4xl drop-shadow-white"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1 }}
                style={{ top: "-10%", right: "10%", transform: "rotate(-1deg)" }} />
            <motion.div
                className="shape shadow-4xl drop-shadow-white"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1 }}
                style={{ bottom: "-20%", left: "25%", transform: "rotate(10deg)" }} />
            <motion.div
                className="shape shadow-4xl drop-shadow-white"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1 }}
                style={{ top: "50%", right: "8%", transform: "rotate(-1deg)" }} />
        </div>
    </>
  )
}

export default LandingBackAnimation