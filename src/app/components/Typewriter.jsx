"use client"

import { useEffect, useState } from 'react';

function Typewriter({ text }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i === text.length) {
                clearInterval(timer);
            }
        }, 35); // Adjust typing speed here
        return () => clearInterval(timer);
    }, [text]);

    return <p className='select-none text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6'>{displayedText}</p>;
}

export default Typewriter;