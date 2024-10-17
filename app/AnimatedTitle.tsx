"use client";

import React, { useEffect, useState } from "react";
import "./AnimatedTitle.css"; // Import CSS file for styles

const AnimatedTitle = () => {
    const words: string[] = ["Talk To Ray", "He is smarter than anyone", "Ask Ray Anything"];
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
    const [displayText, setDisplayText] = useState<string>(words[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayText(""); // Clear the text
            setTimeout(() => {
                setDisplayText(words[currentWordIndex]); // Set new word after clearing
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }, 1000); // Wait before showing new word
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentWordIndex, words]);

    return (
        <h1 className="animated-title">
            {displayText.split("").map((char, index) => (
                <span
                    key={index}
                    className="letter"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    {char === " " ? "\u00A0" : char} {/* Use non-breaking space for visibility */}
                </span>
            ))}
        </h1>
    );
};

export default AnimatedTitle;
