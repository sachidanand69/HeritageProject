import { useState, useEffect } from 'react';

export const useMousePosition = () => {
    const [mousePosition, setMosePosition] = useState<{
        x: number;
        y: number;
        isHover: boolean;
    }>({
        x: 0,
        y: 0,
        isHover: false,
    });

    const updateMousePostion = (e: MouseEvent) => {
        const element = (e.target as HTMLElement).closest('[data-hover]');

        setMosePosition({
            x: e.clientX,
            y: e.clientY,
            isHover: element ? true : false,
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePostion);

        return () => window.removeEventListener('mousemove', updateMousePostion);
    }, []);

    return mousePosition;
};
