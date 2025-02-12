"use client"

import { useEffect, useState } from 'react';

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const projects = [
        {
            title: "Website Latihan Soal SDN 1 Sabahbalau",
            description: "This project is a community service initiative for SDN 1 Sabahbalau, Lampung Selatan, providing a website as an information hub and practice platform for 4th–6th grade students.",
            image: "/assets/project1.png",
            link: "https://website-sdn-1-sabahbalau.vercel.app/",
            tech: ["Next.js", "Tailwind", "Node.js", "MongoDB"]
        },
        {
            title: "Carelories Mobile App",
            description: "Carelories is an innovative mobile application designed to help users easily track their calorie intake by scanning food with their smartphone camera.",
            image: "/assets/project2.jpg",
            link: "https://github.com/Hannntastix/Carelories-Mobile-App",
            tech: ["React Native", "Javascript", "Firebase", "Python", "Tensorflow"]
        },
        {
            title: "Hannn AI",
            description: "I am HannnAI, i am supported by LLama, an AI designed to simulate conversations with humans.",
            image: "/assets/project3.png",
            link: "https://hannn-ai.vercel.app/",
            tech: ["React", "Javascript", "Groq API", "Tailwind"]
        },
        {
            title: "E-commerce Freelance Cutiestuff",
            description: "CutieStuff is a user-friendly website that lets customers create and purchase customized phone cases using their favorite photos.",
            image: "/assets/project4.png",
            link: "https://cutiestuff.vercel.app/",
            tech: ["React", "Next", "Typescript", "PostgreSQL", "Tailwind"]
        },
        {
            title: "Game Dukun vs Demit",
            description: "This is a Final Project for Object Oriented Programming Subject. We Created this project using Python Pygame.",
            image: "/assets/project5.png",
            link: "https://github.com/TawakkalM/Koentji-Production",
            tech: ["Python", "Pygame"]
        },
        {
            title: "Pokepedia",
            description: "This website was created as a source of information about the data and statistics of each Pokémon.",
            image: "/assets/project6.png",
            link: "https://pokepedia-rouge.vercel.app/",
            tech: ["React", "Node JS", "Tailwind", "Poke API"]
        },
    ]

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'));
                    setActiveIndex(index);
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.project-item').forEach((item) => {
            observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="py-20 max-w-screen bg-none">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-20">Projects</h2>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600/80 via-blue-500/30 to-white" />

                    <div className="space-y-32">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                data-index={index}
                                className="project-item opacity-0 translate-y-4 transition-all duration-700 ease-out"
                            >
                                <div className="relative flex flex-col md:flex-row items-center gap-8">
                                    {/* Timeline dot with running light effect */}
                                    <div className={`absolute left-4 md:left-8 top-0 w-4 h-4 transform -translate-x-1/2 flex items-center justify-center before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-r from-purple-500 to-blue-500 before:transition-transform before:duration-500 after:content-[''] after:absolute after:w-8 after:h-8 after:rounded-full after:bg-purple-500/20 ${activeIndex === index ? 'before:scale-125 after:animate-ping' : 'before:scale-75'}`}>
                                        <div className="absolute w-2 h-2 rounded-full bg-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 ml-16 md:ml-24">
                                        <div className="group">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                                className="grid md:grid-cols-2 gap-8 items-center">
                                                <div className="order-2 md:order-1">
                                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech.map((tech, i) => (
                                                            <span key={i}
                                                                className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-700/50">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="order-1 md:order-2 overflow-hidden rounded-lg">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full aspect-video object-cover group-hover:scale-105 transition duration-500 group-hover:saturate-150"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .project-item.active {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
        </section>
    )
}