import React from "react";
import StarryNebula from "./StarryNebula";

const LoadingModal = () => {
    return (
        <>
            <StarryNebula />
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-none">
                <div className="relative flex flex-col items-center">
                    {/* Stars background */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute h-1 w-1 bg-white rounded-full animate-twinkle" style={{ top: '10%', left: '20%' }}></div>
                        <div className="absolute h-1 w-1 bg-white rounded-full animate-twinkle delay-75" style={{ top: '30%', left: '70%' }}></div>
                        <div className="absolute h-1 w-1 bg-white rounded-full animate-twinkle delay-150" style={{ top: '70%', left: '30%' }}></div>
                        <div className="absolute h-1 w-1 bg-white rounded-full animate-twinkle delay-300" style={{ top: '50%', left: '80%' }}></div>
                        <div className="absolute h-1 w-1 bg-white rounded-full animate-twinkle delay-500" style={{ top: '20%', left: '40%' }}></div>
                    </div>

                    {/* Planet loader */}
                    <div className="relative w-24 h-24">
                        {/* Orbit ring */}
                        <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-spin-slow"></div>

                        {/* Satellite orbit */}
                        <div className="absolute inset-0 animate-spin">
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
                        </div>

                        {/* Planet */}
                        <div className="absolute inset-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-full shadow-lg shadow-purple-500/50 animate-pulse">
                            <div className="absolute top-2 left-2 w-3 h-3 bg-white/20 rounded-full blur-sm"></div>
                        </div>
                    </div>

                    {/* Loading text */}
                    <p className="mt-8 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse tracking-wider">
                        LOADING...
                    </p>
                </div>

                <style jsx>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.2; }
                }
                
                .animate-twinkle {
                    animation: twinkle 2s infinite;
                }
                
                .delay-75 {
                    animation-delay: 0.75s;
                }
                
                .delay-150 {
                    animation-delay: 1.5s;
                }
                
                .delay-300 {
                    animation-delay: 3s;
                }
                
                .delay-500 {
                    animation-delay: 5s;
                }
                
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
            `}</style>
            </div>
        </>
    );
};

export default LoadingModal;