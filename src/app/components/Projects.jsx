"use client"

export default function Projects() {
    const projects = [
        {
            title: "Website Latihan Soal SDN 1 Sabahbalau",
            description: "This project is a community service initiative for SDN 1 Sabahbalau, Lampung Selatan, providing a website as an information hub and practice platform for 4th–6th grade students. Through interviews with staff, we identified a lack of accessible learning resources. To address this, we developed an interactive website featuring school information, curriculum-based practice questions, admin access to manage content, and a dashboard for school information updates. The website uses React.js, Next.js, and Tailwind CSS for the front-end, with Node.js and MongoDB for the back-end. Following Agile methodology, usability is evaluated using the System Usability Scale (SUS). As the coder, I handled front-end and back-end development, ensuring an intuitive and functional interface. This project reflects our commitment to enhancing education through technology.",
            image: "/assets/project1.png",
            link: "https://website-sdn-1-sabahbalau.vercel.app/",
            tech: ["Next.js", "Tailwind", "Node.js", "MongoDB"]
        },
        {
            title: "Carelories Mobile App",
            description: "Carelories is an innovative mobile application designed to help users easily track their calorie intake by scanning food with their smartphone camera. Powered by advanced Convolutional Neural Networks (CNN), it accurately identifies food items and instantly calculates their calorie content. The app provides detailed nutritional information, stores meal history for easy tracking, and offers personalized recommendations to help users meet their health goals.",
            image: "/assets/project2.jpg",
            link: "https://github.com/Hannntastix/Carelories-Mobile-App",
            tech: ["React Native", "Javascript", "Firebase", "Python", "Tensorflow"]
        },
        {
            title: "Hannn AI",
            description: "I am HannnAI, i am supported by LLama, an AI designed to simulate conversations with humans. I'm a type of artificial intelligence called a Large Language Model, which means I'm trained on a massive dataset of text to generate human-like responses. My primary purpose is to assist and interact with users like you through text-based conversations.",
            image: "/assets/project3.png",
            link: "https://hannn-ai.vercel.app/",
            tech: ["React", "Javascript", "Groq API", "Tailwind"]
        },
        {
            title: "E-commerce Freelance Cutiestuff",
            description: "CutieStuff is a user-friendly website that lets customers create and purchase customized phone cases using their favorite photos. It features real-time previews, various case options, high-quality printing, an intuitive interface, and secure payment methods for a seamless experience.",
            image: "/assets/project4.png",
            link: "https://cutiestuff.vercel.app/",
            tech: ["React", "Next", "Typescript", "PostgreSQL", "Tailwind"]
        },
        {
            title: "Game Dukun vs Demit",
            description: "This is a Final Project for Object Oriented Programming Subject. We Created this project using Python Pygame. In this Project i played a role as a programmer, in this project there were 2 roles, designer and programmer. We've done this project as a team with 6 members in it.",
            image: "/assets/project5.png",
            link: "https://github.com/TawakkalM/Koentji-Production",
            tech: ["Python", "Pygame"]
        },
        {
            title: "Pokepedia",
            description: "This website was created as a source of information about the data and statistics of each Pokémon. The project serves as a practice to enhance web development skills, focusing on building interactive and responsive user interfaces using React and Tailwind CSS. It aims to combine functional design with clean and efficient coding practices.",
            image: "/assets/project6.png",
            link: "https://pokepedia-rouge.vercel.app/",
            tech: ["React", "Node JS", "Tailwind", "Poke API"]
        },
    ]

    return (
        <section id="projects" className="py-20 bg-none">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-black/80 border border-purple-800 rounded-lg overflow-hidden hover:border-blue-600 transition group">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="relative aspect-video">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 text-justify">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="bg-purple-900/50 text-purple-200 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}