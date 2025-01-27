'use client';

import React, { useState, useEffect } from 'react';
import './slider.css';

const images: string[] = [
    '/images/global/image-3.webp',
    '/images/global/image-7.webp',
    '/images/global/image-8.webp',
];

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Automatically change the image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="slider-container relative w-full h-[400px] overflow-hidden">
            {/* Slider Images */}
            <div
                className="slider flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                ))}
            </div>

            {/* Indicators */}
            <div className="indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-white' : 'bg-gray-400'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;

