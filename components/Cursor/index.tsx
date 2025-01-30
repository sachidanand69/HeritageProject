'use client';

import { useMousePosition } from '@/utils/useMousePosition';
import { motion } from 'framer-motion';

export const Cursor = () => {
    const { x, y, isHover } = useMousePosition();

    const size = isHover ? 64 : 12;

    return (
        <motion.div
            className={`blend fixed bg-white z-[999] rounded-full pointer-events-none grid place-content-center text-xs`}
            animate={{
                width: size,
                height: size,
                x: x - size / 2,
                y: y - size / 2,
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.4 }}
        ></motion.div>
    );
};
