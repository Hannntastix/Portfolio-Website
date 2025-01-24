"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const Skills = () => {
    const skills = [
        { name: "HTML", image: "/html.png" },
        { name: "CSS", image: "/css.png" },
        { name: "JavaScript", image: "/javascript.png" },
        { name: "C++", image: "/javascript.png" },
        { name: "Bootstrap", image: "/javascript.png" },
        { name: "React", image: "/react.png" },
        { name: "Next.js", image: "/nextjs.png" },
        { name: "Tailwind CSS", image: "/tailwind.png" },
        { name: "MongoDB", image: "/tailwind.png" },
        { name: "MySQL", image: "/tailwind.png" },
        { name: "Xampp", image: "/tailwind.png" },
        { name: "Visual Studio Code", image: "/tailwind.png" },
        { name: "Postman", image: "/tailwind.png" },
        { name: "VirtualBox", image: "/tailwind.png" },
        { name: "Git", image: "/git.png" },
        { name: "GitHub", image: "/github.png" },
        { name: "Figma", image: "/figma.png" },
    ]

    const controls = useAnimation()
    const [isDragging, setIsDragging] = useState(false)

    // Start automatic animation
    const startAutoAnimation = () => {
        controls.start({
            x: ["30%", "-230%"],
            transition: {
                duration: 15,
                ease: "linear",
                repeat: Infinity,
            },
        })
    }

    useEffect(() => {
        startAutoAnimation()
    }, [])

    return (
        <section id="skills" className="py-20 bg-black bg-transparent">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Skills & Tools
                </h2>
                <div className="relative w-full overflow-hidden md:hidden">
                    <motion.div
                        className="flex space-x-8 cursor-grab"
                        drag="x"
                        dragConstraints={{ left: -3600, right: 0 }}
                        onDragStart={() => {
                            setIsDragging(true)
                            controls.stop()
                        }}
                        onDragEnd={() => {
                            setIsDragging(false)
                            // startAutoAnimation()
                        }}
                        animate={controls}
                        initial={{ x: "100%" }}
                        transition={{ duration: 20, repeat: Infinity, linear: true }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="shrink-0 bg-black/50 border border-purple-800 rounded-lg p-6 text-center hover:border-blue-600 transition"
                                style={{ minWidth: "200px" }}
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-12 h-12 mx-auto mb-4"
                                />
                                <p className="text-white">{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="relative w-full overflow-hidden hidden md:block lg:hidden">
                    <motion.div
                        className="flex space-x-8 cursor-grab"
                        drag="x"
                        dragConstraints={{ left: -3210, right: 0 }}
                        onDragStart={() => {
                            setIsDragging(true)
                            controls.stop() // Stop animation while dragging
                        }}
                        onDragEnd={() => {
                            setIsDragging(false)
                            // startAutoAnimation() // Restart animation after dragging
                        }}
                        animate={controls}
                        initial={{ x: "100%" }}
                        transition={{ duration: 20, repeat: Infinity, linear: true }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="shrink-0 bg-black/50 border border-purple-800 rounded-lg p-6 text-center hover:border-blue-600 transition"
                                style={{ minWidth: "200px" }} // Ensure consistent size
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-12 h-12 mx-auto mb-4"
                                />
                                <p className="text-white">{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="relative w-full overflow-hidden hidden lg:block xl:hidden">
                    <motion.div
                        className="flex space-x-8 cursor-grab"
                        drag="x"
                        dragConstraints={{ left: -2950, right: 0 }}
                        onDragStart={() => {
                            setIsDragging(true)
                            controls.stop() // Stop animation while dragging
                        }}
                        onDragEnd={() => {
                            setIsDragging(false)
                            // startAutoAnimation() // Restart animation after dragging
                        }}
                        animate={controls}
                        initial={{ x: "100%" }}
                        transition={{ duration: 20, repeat: Infinity, linear: true }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="shrink-0 bg-black/50 border border-purple-800 rounded-lg p-6 text-center hover:border-blue-600 transition"
                                style={{ minWidth: "200px" }} // Ensure consistent size
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-12 h-12 mx-auto mb-4"
                                />
                                <p className="text-white">{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="relative w-full overflow-hidden xl:block hidden">
                    <motion.div
                        className="flex space-x-8 cursor-grab"
                        drag="x"
                        dragConstraints={{ left: -2700, right: 0 }}
                        onDragStart={() => {
                            setIsDragging(true)
                            controls.stop() // Stop animation while dragging
                        }}
                        onDragEnd={() => {
                            setIsDragging(false)
                            // startAutoAnimation() // Restart animation after dragging
                        }}
                        animate={controls}
                        initial={{ x: "100%" }}
                        transition={{ duration: 20, repeat: Infinity, linear: true }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="shrink-0 bg-black/50 border border-purple-800 rounded-lg p-6 text-center hover:border-blue-600 transition"
                                style={{ minWidth: "200px" }} // Ensure consistent size
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-12 h-12 mx-auto mb-4"
                                />
                                <p className="text-white">{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills