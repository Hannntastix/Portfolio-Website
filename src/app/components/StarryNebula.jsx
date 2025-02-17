"use client"

import React, { useEffect, useState } from 'react';

const StarryNebula = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            for (let i = 0; i < 100; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 2 + 1,
                    duration: Math.random() * 3 + 2
                });
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="fixed inset-0 bg-black/90 z-50">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white animate-twinkle"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
            ))}
            
            {/* Nebula effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
            
            <style jsx>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(0.8); }
                }
                
                .animate-twinkle {
                    animation: twinkle var(--duration, 3s) infinite;
                }
            `}</style>
        </div>
    );
};

export default StarryNebula;