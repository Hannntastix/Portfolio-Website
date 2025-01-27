"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const Skills = () => {
    const skills = [
        { name: "HTML", image: "/assets/HTML.png" },
        { name: "CSS", image: "/assets/CSS.png" },
        { name: "JavaScript", image: "/assets/JS.png" },
        { name: "C++", image: "/assets/C++.png" },
        { name: "Python", image: "/assets/Python.png" },
        { name: "Bootstrap", image: "/assets/Bootstrap.png" },
        { name: "React", image: "/assets/React.png" },
        { name: "Next.js", image: "/assets/Next.png" },
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
                                className="shrink-0 bg-zinc-900 rounded-lg p-6 text-center hover:border-blue-600 transition"
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
                            controls.stop()
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
                                className="shrink-0 bg-zinc-900 rounded-lg p-6 text-center hover:border-blue-600 transition"
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
                <div className="relative w-full overflow-hidden hidden lg:block xl:hidden">
                    <motion.div
                        className="flex space-x-8 cursor-grab"
                        drag="x"
                        dragConstraints={{ left: -2950, right: 0 }}
                        onDragStart={() => {
                            setIsDragging(true)
                            controls.stop()
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
                                className="shrink-0 bg-zinc-900 rounded-lg p-6 text-center hover:border-blue-600 transition"
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
                <div className="relative w-full overflow-hidden xl:block hidden">
                    <motion.div
                        className="flex space-x-8 cursor-grab"
                        drag="x"
                        dragConstraints={{ left: -2700, right: 0 }}
                        onDragStart={() => {
                            setIsDragging(true)
                            controls.stop()
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
                                className="shrink-0 bg-zinc-900 rounded-lg p-6 text-center hover:border-blue-600 transition"
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
            </div>
        </section>
    )
}

export default Skills