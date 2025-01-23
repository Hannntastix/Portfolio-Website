"use client"

const Organization = () => {
    const organizations = [
        {
            title: "Digistar Club By Telkom Indonesia",
            role: "Member",
            image: "/assets/Digistar club.jpg",
            description: "Brief description of your role and key achievements in the organization.",
            period: "2024 - Now"
        },
        {
            title: "Google Developer Students Club ITB",
            role: "Member",
            image: "/assets/GDSC.jpg",
            description: "Highlight your contributions and impact.",
            period: "2023 - 2024"
        },
        {
            title: "MPK YP UNILA Senior High School",
            role: "Vice Leader",
            image: "/assets/MPK.jpg",
            description: "Highlight your contributions and impact.",
            period: "2020 - 2021"
        },
    ]

    return (
        <section id="organizations" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Organization Experiences</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {organizations.map((org, index) => (
                        <div
                            key={index}
                            className="bg-black/50 border border-purple-800 rounded-lg overflow-hidden hover:border-blue-600 transition group"
                        >
                            <div className="relative aspect-video">
                                <img
                                    src={org.image}
                                    alt={org.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{org.title}</h3>
                                <div className="text-purple-400 mb-2">{org.role}</div>
                                <div className="text-blue-400 mb-4">{org.period}</div>
                                <p className="text-gray-300">{org.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Organization;