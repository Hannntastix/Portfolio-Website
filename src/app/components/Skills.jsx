"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const Skills = () => {
    const skillsGroup1 = [
        { name: "HTML", image: "/assets/HTML.png" },
        { name: "CSS", image: "/assets/CSS.png" },
        { name: "JavaScript", image: "/assets/JS.png" },
        { name: "C++", image: "/assets/C++.png" },
        { name: "Python", image: "/assets/Python.png" },
        { name: "Bootstrap", image: "/assets/Bootstrap.png" },
        { name: "React", image: "/assets/React.png" },
        { name: "Next.js", image: "/assets/Next.png" },
    ]

    const skillsGroup2 = [
        { name: "Tailwind CSS", image: "/assets/Tailwind.png" },
        { name: "MongoDB", image: "/assets/Mongodb.png" },
        { name: "MySQL", image: "/assets/Mysql.png" },
        { name: "Xampp", image: "/assets/Xampp.png" },
        { name: "Visual Studio Code", image: "/assets/VScode.png" },
        { name: "Postman", image: "/assets/Postman.png" },
        { name: "Git", image: "/assets/Git.png" },
        { name: "GitHub", image: "/assets/Github.png" },
        { name: "Figma", image: "/assets/Figma.png" },
    ]

    const controls1 = useAnimation()
    const controls2 = useAnimation()
    const [isDraggingTop, setIsDraggingTop] = useState(false)
    const [isDraggingBottom, setIsDraggingBottom] = useState(false)

    useEffect(() => {
        controls1.start({
            x: [0, "-100%"],
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
            },
        })

        controls2.start({
            x: ["-100%", 0],
            transition: {
                duration: 25,
                ease: "linear",
                repeat: Infinity,
            },
        })
    }, [controls1, controls2])

    return (
        <section id="skills" className="py-20 bg-none">
            <div className="max-w-7xl mx-auto px-4">
                <div data-aos="fade-down" className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Skills & Tools</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto"></div>
                </div>

                {/* Top row - moving left */}
                <div className="relative w-full overflow-hidden mb-8 group">
                    <motion.div
                        className="flex space-x-8 cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: -1500, right: 0 }}
                        onDragStart={() => {
                            setIsDraggingTop(true)
                            controls1.stop()
                        }}
                        onDragEnd={() => {
                            setIsDraggingTop(false)
                            if (!isDraggingTop) {
                                controls1.start({
                                    x: [0, "-100%"],
                                    transition: {
                                        duration: 20,
                                        ease: "linear",
                                        repeat: Infinity,
                                    },
                                })
                            }
                        }}
                        animate={controls1}
                        transition={{ duration: 20, repeat: Infinity, linear: true }}
                    >
                        {/* Double the items for infinite scroll effect */}
                        {[...skillsGroup1, ...skillsGroup1].map((skill, index) => (
                            <motion.div
                                key={index}
                                className="shrink-0 bg-zinc-800/80 rounded-lg p-6 text-center border border-zinc-700 hover:border-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-blue-900/40 relative"
                                style={{ minWidth: "180px" }}
                                whileHover={{
                                    y: -5,
                                }}
                            >
                                <div className="bg-gradient-to-br from-blue-900/20 to-black p-4 rounded-md mb-3 flex items-center justify-center">
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        className="w-12 h-12 mx-auto object-contain"
                                    />
                                </div>
                                <p className="text-white font-medium">{skill.name}</p>
                                <div className="absolute inset-0 bg-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                </div>

                {/* Bottom row - moving right */}
                <div className="relative w-full overflow-hidden group">
                    <motion.div
                        className="flex space-x-8 cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: 0, right: 1500 }}
                        onDragStart={() => {
                            setIsDraggingBottom(true)
                            controls2.stop()
                        }}
                        onDragEnd={() => {
                            setIsDraggingBottom(false)
                            if (!isDraggingBottom) {
                                controls2.start({
                                    x: ["-100%", 0],
                                    transition: {
                                        duration: 25,
                                        ease: "linear",
                                        repeat: Infinity,
                                    },
                                })
                            }
                        }}
                        animate={controls2}
                        transition={{ duration: 25, repeat: Infinity, linear: true }}
                    >
                        {/* Double the items for infinite scroll effect */}
                        {[...skillsGroup2, ...skillsGroup2].map((skill, index) => (
                            <motion.div
                                key={index}
                                className="shrink-0 bg-zinc-800/80 rounded-lg p-6 text-center border border-zinc-700 hover:border-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-purple-900/40"
                                style={{ minWidth: "180px" }}
                                whileHover={{
                                    y: -5,
                                }}
                            >
                                <div className="bg-gradient-to-br from-purple-900/20 to-black p-4 rounded-md mb-3 flex items-center justify-center">
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        className="w-12 h-12 mx-auto object-contain"
                                    />
                                </div>
                                <p className="text-white font-medium">{skill.name}</p>
                                <div className="absolute inset-0 bg-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    )
}

export default Skills