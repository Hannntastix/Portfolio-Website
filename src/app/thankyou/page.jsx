"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import StarryBackground from '../components/StarryBackground';
import LoadingModal from '../components/LoadingModal';
import { Github, Instagram, Linkedin } from "lucide-react"

const ThankYouPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleBackToHome = () => {
    router.push('/');
  };

  if (isLoading) {
    return <LoadingModal />;
  }

  return (
    <main className="min-h-screen bg-black relative px-1">
      <StarryBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8 max-w-lg bg-black bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg shadow-blue-500/20 p-8 md:border md:border-indigo-900">
          {/* Animated Icons Section */}
          <div className="relative h-48 w-48 mx-auto">
            {/* Saturn-like Planet */}
            <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
              <svg viewBox="0 0 24 24" className="w-16 h-16" fill="none">
                <circle cx="12" cy="12" r="8" fill="#6366F1" />
                <ellipse cx="12" cy="12" rx="12" ry="3" transform="rotate(20 12 12)" fill="none" stroke="#A5B4FC" strokeWidth="0.5" />
                <ellipse cx="12" cy="12" rx="11" ry="2.5" transform="rotate(20 12 12)" fill="none" stroke="#A5B4FC" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Thumbs Up in Center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
              <svg className="w-16 h-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>

            {/* Star */}
            <div className="absolute bottom-0 right-0 animate-pulse">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-yellow-300" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-blue-400 select-none">Thank You!</h1>
            <h2 className="text-xl font-semibold text-indigo-300">Your feedback has been received! I truly appreciate your time and thoughts.</h2>
            <p className="text-blue-200 max-w-md mx-auto">
              Your support helps me grow and improve my portfolio!
            </p>

            {/* Back to Home Button */}
            <button
              onClick={handleBackToHome}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 inline-flex items-center space-x-2 shadow-md shadow-blue-500/30"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2.5c-2.2 0-4 1.8-4 4v8l-4 4v3h16v-3l-4-4v-8c0-2.2-1.8-4-4-4z" />
              </svg>
              <span className="select-none">Back To Homepage</span>
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com/Hannntastix" target="_blank" rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-400 transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mraihan-athalah/" target="_blank" rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-400 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/m.raihanathalah/" target="_blank" rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-400 transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;