import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Experience() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);

    const experiences = [
        {
            company: "PT Telekomunikasi Indonesia (Persero) Tbk",
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
            ],
            color: "blue"
        },
        {
            company: "Transfornation ID (Non-Government Organization)",
            role: "Video Editor Internship",
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
            ],
            color: "purple"
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
            ],
            color: "green"
        },
    ];

    const getGlowColor = (color) => {
        switch (color) {
            case 'blue': return 'hover:shadow-blue-700/60';
            case 'purple': return 'hover:shadow-purple-700/60';
            case 'green': return 'hover:shadow-green-700/60';
            default: return 'hover:shadow-blue-700/60';
        }
    };

    const getBorderColor = (color) => {
        switch (color) {
            case 'blue': return 'border-blue-600/50 group-hover:border-blue-400';
            case 'purple': return 'border-purple-600/50 group-hover:border-purple-400';
            case 'green': return 'border-green-600/50 group-hover:border-green-400';
            default: return 'border-blue-600/50 group-hover:border-blue-400';
        }
    };

    const getTextColor = (color) => {
        switch (color) {
            case 'blue': return 'text-blue-400';
            case 'purple': return 'text-purple-400';
            case 'green': return 'text-green-400';
            default: return 'text-blue-400';
        }
    };

    const getBgGradient = (color) => {
        switch (color) {
            case 'blue': return 'bg-gradient-to-br from-blue-900/20 to-black';
            case 'purple': return 'bg-gradient-to-br from-purple-900/20 to-black';
            case 'green': return 'bg-gradient-to-br from-green-900/20 to-black';
            default: return 'bg-gradient-to-br from-blue-900/20 to-black';
        }
    };

    return (
        <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div data-aos="fade-down" className="relative mb-16 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Experiences</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto"></div>
                </div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            className={`group rounded-xl overflow-hidden transition-all duration-500 transform 
                                hover:scale-[1.01] hover:shadow-xl ${getBgGradient(exp.color)} ${getGlowColor(exp.color)}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-stretch">
                                {/* Left side - Experience details */}
                                <div className="w-full md:w-2/3 p-6 sm:p-8">
                                    <div className="mb-6 sm:mb-8">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">{exp.company}</h3>
                                        <div className={`text-lg sm:text-xl ${getTextColor(exp.color)} mb-2 font-semibold`}>{exp.role}</div>
                                        <div className="text-gray-300 mb-6 flex items-center text-sm sm:text-base">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {exp.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-3 mt-0.5 flex-shrink-0 ${getTextColor(exp.color)}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                </svg>
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right side - Images */}
                                <div className="w-full md:w-1/3 p-6 bg-black/50 flex items-center justify-center">
                                    <div className="grid grid-cols-1 gap-4 w-full">
                                        {exp.image.map((img, idx) => (
                                            <div key={idx}
                                                data-aos="zoom-in"
                                                data-aos-delay={idx * 100}
                                                className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Documentation ${idx + 1}`}
                                                    className={`object-cover w-full h-24 sm:h-32 rounded-lg border transition-all duration-500 transform group-hover:scale-105 ${getBorderColor(exp.color)}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}