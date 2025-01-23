"use client"

export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1",
            image: "/project1.png",
            link: "https://project1.com",
            tech: ["Next.js", "Tailwind", "Node.js"]
        },
        {
            title: "Project 2",
            description: "Description of project 2",
            image: "/project2.png",
            link: "https://project2.com",
            tech: ["React", "TypeScript", "Firebase"]
        }
    ]

    return (
        <section id="projects" className="py-20 bg-none">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-black/50 border border-purple-800 rounded-lg overflow-hidden hover:border-blue-600 transition group">
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
                                    <p className="text-gray-300 mb-4">{project.description}</p>
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