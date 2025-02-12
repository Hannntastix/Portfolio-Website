"use client"

import { motion, useAnimation } from "framer-motion"
import { ArrowDown } from "lucide-react";
import Typewriter from "./Typewriter";
import Typewriters from "./Typewriters";

const Hero = () => {

    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center relative bg-none">
            {/* Main Content */}
            <div className="text-center px-4 space-y-12">
                {/* Main Title and gradient effect */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold"
                >
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        <Typewriter text="Welcome to M.Raihan's Portfolio" />
                    </div>
                </motion.div>

                {/* Text Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-2xl md:text-3xl text-gray-300"
                >
                    <Typewriters text="Get To Know About Me!" />
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        delay: 2,
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    className="text-gray-400 mt-16"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm">Scroll Down</span>
                        <ArrowDown className="w-6 h-6" />
                    </div>
                </motion.div>
            </div>

            {/* Animated Background Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 1.5 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
            </motion.div>
        </section>
    )
}

export default Hero;