"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StarryBackground from "./components/StarryBackground";
import LoadingModal from "./components/LoadingModal";

export default function NotFound() {

    const [isLoading, setIsLoading] = useState(true);
    
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000)

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingModal />
    }


    const handleBackToHome = () => {
        router.push("/");
    };

    return (
        <main className="min-h-screen bg-black relative px-1">
            <StarryBackground />
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="text-center space-y-8">
                    {/* Animated Icons Section */}
                    <div className="relative h-48 w-48 mx-auto">
                        {/* Moon */}
                        <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                            <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
                                {/* Base moon circle */}
                                <circle cx="12" cy="12" r="10" fill="#D1D5DB" />
                                {/* Craters */}
                                <circle cx="8" cy="9" r="1.5" fill="#9CA3AF" />
                                <circle cx="15" cy="11" r="2" fill="#9CA3AF" />
                                <circle cx="11" cy="14" r="1.8" fill="#9CA3AF" />
                                <circle cx="16" cy="15" r="1.2" fill="#9CA3AF" />
                                <circle cx="7" cy="13" r="1" fill="#9CA3AF" />
                                {/* Subtle highlight */}
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                                    fill="#F3F4F6"
                                    opacity="0.3"
                                />
                            </svg>
                        </div>

                        {/* Rocket */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
                            <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2.5c-2.2 0-4 1.8-4 4v8l-4 4v3h16v-3l-4-4v-8c0-2.2-1.8-4-4-4z" />
                                <path d="M12 0c-1.1 0-2 .9-2 2v2h4V2c0-1.1-.9-2-2-2z" />
                                <path d="M9 18v3h6v-3H9z" />
                            </svg>
                        </div>

                        {/* Star */}
                        <div className="absolute bottom-0 right-0 animate-pulse">
                            <svg viewBox="0 0 24 24" className="w-10 h-10 text-indigo-300" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4">
                        <h1 className="text-6xl font-bold text-blue-500 select-none">404</h1>
                        <h2 className="text-2xl font-semibold text-red-500">Oops, We Have a Problem!</h2>
                        <p className="text-blue-300 max-w-md mx-auto font-semibold">
                            Looks like this page is not exist. Let's get you back to the main page.
                        </p>

                        {/* Back to Home Button */}
                        <button
                            onClick={handleBackToHome}
                            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 inline-flex items-center space-x-2"
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2.5c-2.2 0-4 1.8-4 4v8l-4 4v3h16v-3l-4-4v-8c0-2.2-1.8-4-4-4z" />
                            </svg>
                            <span className="select-none">Return to Home</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
