"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageCarousel({ onVideoChange }) {
    const content = [

        {
            id: 1,
            image: "/hero_background/image_1.gif",
            video: "/about/rain.mp4",
            title: "HIGHEST PEAK",
            category: "NARRATIVE",
            description: "A cinematic story about nature and human connection.",
        },
        {
            id: 2,
            image: "/hero_background/image_2.gif",
            video: "/about/rain.mp4",
            title: "HIGHEST PEAK",
            category: "NARRATIVE",
            description: "A cinematic story about nature and human connection.",
        },
        {
            id: 3,
            image: "/hero_background/image_3.jpg",
            video: "/about/rain.mp4",
            title: "HIGHEST PEAK",
            category: "NARRATIVE",
            description: "A cinematic story about nature and human connection.",
        },
        {
            id: 4,
            image: "/hero_background/image_4.png",
            video: "/about/rain.mp4",
            title: "HIGHEST PEAK",
            category: "NARRATIVE",
            description: "A cinematic story about nature and human connection.",
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    // Tell Hero which video belongs to current background
    useEffect(() => {
        onVideoChange(content[currentIndex]);
    }, [currentIndex, onVideoChange]);

    // Automatic slide
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);

            setCurrentIndex((prev) =>
                prev === content.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setDirection(1);

        setCurrentIndex((prev) =>
            prev === content.length - 1 ? 0 : prev + 1
        );
    };

    const previousImage = () => {
        setDirection(-1);

        setCurrentIndex((prev) =>
            prev === 0 ? content.length - 1 : prev - 1
        );
    };

    return (

        <div className=" absolute inset-0 overflow-hidden">

            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    className="absolute inset-0"
                    initial={{
                        x: direction > 0 ? "100%" : "-100%",
                    }}
                    animate={{
                        x: 0,
                    }}
                    exit={{
                        x: direction > 0 ? "-100%" : "100%",
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src={content[currentIndex].image}
                        alt="Hero background"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
            </AnimatePresence>

            {/* Previous */}

            <button
                onClick={previousImage}
                className="absolute left-6 top-1/2 z-20 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 hover:text-amber-600 transition-all duration-300">
                <svg className="w-13 h-13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 5l-7 7 7 7" />
                </svg>
            </button>


            {/* Next */}
            <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 z-20 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 hover:text-amber-600 transition-all duration-300"
            >
                <svg className="w-13 h-13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
            </button>

        </div>
    );
}