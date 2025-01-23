export default function Experience() {
    const experiences = [
        {
            company: "Telkom Indonesia",
            role: "Front End Class Manager",
            period: "Jul 2024 - Oct 2024",
            description: [
                "Guiding and leading 10+ participants during the Digistar Class 2024 mentoring sessions.",
                "Assisting the Digistar Class mentor in conducting mentoring sessions.",
                "Preparing all necessary materials for the mentoring sessions, such as online meeting rooms, virtual backgrounds, and assignment templates for participants over 6 sessions.",
                "Evaluating participants and recording their scores using Microsoft Excel.",
                "Providing additional hands-on sessions on front-end development for the mentees."
            ],
            image: [
                "/assets/exp1.1.jpg",
                "/assets/exp1.2.png",
                "/assets/exp1.3.png"
            ]
        },
        {
            company: "Transfornation ID",
            role: "Video Editor",
            period: "May 2024 - Jun 2024",
            description: [
                "Creating an innovative plan and concept for video content to be used for marketing purposes.",
                "Collaborating with 20+ people from across divisions in organizing a volunteer event to Lombok.",
                "Becoming a committee member for the pre-event of the volunteer activity to Lombok and discussing about the concept for the activities.",
                "Update and posting 3 posters and 1 promotion video on instagram."
            ],
            image: [
                "/assets/exp2.1.png",
                "/assets/exp2.2.png",
                "/assets/exp2.3.jpg"
            ]
        },
        {
            company: "Appfibr",
            role: "Software Creator",
            period: "May 2023 - Nov 2023",
            description: [
                "Collaborating with 4 other developers to meet the company's needs in developing mobile applications.",
                "Improve the design and layout of the mobile application and increase the number of mobile app users by 20% each month.",
                "Designing the content of mobile applications according to user preferences, particularly for promoting users' businesses.",
                "Successfully developed and designed a mobile application for 400+ users within a 7-month timeframe."
            ],
            image: [
                "/assets/exp3.1.jpg",
                "/assets/exp3.2.png",
                "/assets/exp3.3.png"
            ]
        },
    ];

    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Experiences</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border border-purple-800 bg-black/50 p-6 rounded-lg hover:border-blue-600 transition">
                            <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                            <div className="text-purple-400 mb-2">{exp.role}</div>
                            <div className="text-blue-400 mb-4">{exp.period}</div>
                            <ul className="list-disc pl-5 text-gray-300">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="mb-2">{item}</li>
                                ))}
                            </ul>
                            <div className="w-full mx-auto justify-center grid grid-cols-1 md:grid-cols-3 gap-5 px-5 place-items-center md:place-items-stretch">
                                {exp.image.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Documentation ${idx + 1}`}
                                        className="object-cover rounded max-h-36 lg:max-h-40 xl:max-h-48 md:max-h-28 w-96 border border-blue-600 hover:border-blue-800 transition"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
