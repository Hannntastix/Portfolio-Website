"use client"

import { useEffect, useState } from 'react';

function Typewriters({ text }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i === text.length) {
                clearInterval(timer);
            }
        }, 30); // Adjust typing speed here
        return () => clearInterval(timer);
    }, [text]);

    return <p className="select-none text-xl text-gray-300 max-w-2xl mx-auto">{displayedText}</p>;
}

export default Typewriters;