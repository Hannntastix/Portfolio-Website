const Competition = () => {
    const competitions = [
        {
            title: "Artificial Intelligence Innovation and Application Competition",
            achievement: "2nd Position in Healthy and Living Beings Subtheme",
            image: "/assets/Competition.jpg",
            description: "This national-level competition challenged us to create AI innovations addressing specific subthemes and develop innovative products from those ideas. It provided an excellent opportunity to push the boundaries of AI and explore its potential to enhance healthcare services and life sciences.",
            link: "https://drive.google.com/drive/folders/1_S537w8z0-Hv68NURenwXJHECZCfLIt4?usp=sharing",
            period: "October 2024"
        }
    ]

    return (
        <section id="competitions" className="py-20 bg-none">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Competition Experiences</h2>
                <div className="grid md:grid-cols-1 gap-8">
                    {competitions.map((comp, index) => (
                        <a
                            href={comp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="bg-black/50 border border-purple-800 rounded-lg overflow-hidden hover:border-blue-600 transition group"
                        >
                            <div className="relative aspect-video">
                                <img
                                    src={comp.image}
                                    alt={comp.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition duration-300 zoom-in-50"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{comp.title}</h3>
                                <div className="text-purple-400 mb-2">{comp.achievement}</div>
                                <div className="text-blue-400 mb-4">{comp.period}</div>
                                <p className="text-gray-300">{comp.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Competition;