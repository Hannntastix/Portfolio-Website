export default function Certifications() {
    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2023",
            image: "/cert1.png"
        },
    ]

    return (
        <section id="certifications" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="border border-purple-800 bg-black/50 p-6 rounded-lg hover:border-blue-600 transition">
                            <div className="aspect-video relative mb-4">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="object-cover rounded"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                            <div className="text-purple-400">{cert.issuer}</div>
                            <div className="text-blue-400">{cert.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}