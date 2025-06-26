"use client"

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type TypewriterProps = {
    text: string;
    speed?: number;
    className?: string;
    as?: React.ElementType;
}

const Typewriter = ({ text, speed = 120, className, as: Tag = 'h1' }: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        setDisplayedText('');
        setIsComplete(false);
        
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(intervalId);
                setIsComplete(true);
            }
        }, speed);

        return () => clearInterval(intervalId);

    }, [text, speed]);

    return (
        <Tag className={cn(className, "relative")}>
            <span className="min-h-[1.2em] inline-block">
                {displayedText}
                {!isComplete && <span className="blinking-cursor ml-1">|</span>}
            </span>
        </Tag>
    );
};

export default Typewriter;
