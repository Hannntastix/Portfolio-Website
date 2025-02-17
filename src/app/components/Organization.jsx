"use client"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Organization = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: false,
            offset: 100,
        });
    }, []);

    const organizations = [
        {
            title: "Digistar Club By Telkom Indonesia",
            role: "Member",
            image: "/assets/Digistar club.jpg",
            description: [
                "Attending events about skill development in the field of IT by Telkom Indonesia.",
                "Successfully achieved the award for 'Top 3 Best Portfolio Website' at the Digistar Connect event.",
                "Participating in certified self-development programs by Telkom Indonesia.",
                "Developed networking with 500+ alumni from Digistar Club events.",
            ],
            period: "2024 - Now",
            color: "blue",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: "Google Developer Students Club ITB",
            role: "Member",
            image: "/assets/GDSC.jpg",
            description: [
                "Attending 2+ certified classes on interesting IT topics each month.",
                "Creating programming-related projects assigned to members of the Google Developer Students Club ITB.",
                "Actively interacting with GDSC and GDG members on discord.",
            ],
            period: "2023 - 2024",
            color: "red",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
            )
        },
        {
            title: "MPK YP UNILA Senior High School",
            role: "Vice Leader",
            image: "/assets/MPK.jpg",
            description: [
                "Led more than 10 individuals from various departments to carry out the duties and responsibilities of the Student Council (MPK).",
                "Successfully collaborated with the Student Council (OSIS) to organize 15 events within one year.",
                "Finding solutions for resolving various issues faced by the Student Council (MPK).",
                "Providing guidance and supervision to all members of the Student Council Commission (MPK).",
            ],
            period: "2020 - 2021",
            color: "yellow",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
    ];

    const getColor = (color) => {
        switch (color) {
            case 'blue': return {
                bg: 'from-blue-900/30 to-black',
                text: 'text-blue-400',
                border: 'border-blue-600/50',
                shadow: 'shadow-blue-900/30',
                hover: 'group-hover:border-blue-500',
                svg: 'text-blue-400'
            };
            case 'red': return {
                bg: 'from-red-900/30 to-black',
                text: 'text-red-400',
                border: 'border-red-600/50',
                shadow: 'shadow-red-900/30',
                hover: 'group-hover:border-red-500',
                svg: 'text-red-400'
            };
            case 'yellow': return {
                bg: 'from-yellow-900/30 to-black',
                text: 'text-yellow-400',
                border: 'border-yellow-600/50',
                shadow: 'shadow-yellow-900/30',
                hover: 'group-hover:border-yellow-500',
                svg: 'text-yellow-400'
            };
            default: return {
                bg: 'from-purple-900/30 to-black',
                text: 'text-purple-400',
                border: 'border-purple-600/50',
                shadow: 'shadow-purple-900/30',
                hover: 'group-hover:border-purple-500',
                svg: 'text-purple-400'
            };
        }
    };

    return (
        <section id="organizations" className="py-20 bg-gradient-to-b from-zinc-900 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div data-aos="fade-down" className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Organization Experiences</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto"></div>
                    <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">Building leadership, collaboration, and problem-solving skills through active participation in diverse organizations.</p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {organizations.map((org, index) => {
                        const colorScheme = getColor(org.color);

                        return (
                            <div
                                key={index}
                                data-aos={`fade-up`}
                                data-aos-delay={index * 50}
                                className={`bg-gradient-to-br ${colorScheme.bg} rounded-lg overflow-hidden border ${colorScheme.border} ${colorScheme.hover} transition duration-500 group hover:shadow-lg hover:scale-[1.01] ${colorScheme.shadow}`}
                            >
                                <div className="relative overflow-hidden">
                                    <div className="aspect-video relative">
                                        <img
                                            src={org.image}
                                            alt={org.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-all duration-700 ease-in-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    </div>

                                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-black/80 ${colorScheme.text}`}>
                                            {org.period}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white leading-tight">{org.title}</h3>
                                        <div className={`rounded-full p-2 ${colorScheme.svg} bg-black/60`}>
                                            {org.icon}
                                        </div>
                                    </div>

                                    <div className={`${colorScheme.text} mb-4 font-medium text-lg`}>{org.role}</div>

                                    <ul className="space-y-3 text-gray-300">
                                        {org.description.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 mt-1 flex-shrink-0 ${colorScheme.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Organization;