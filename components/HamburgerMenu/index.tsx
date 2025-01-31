'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative h-screen">
      {/* Menu Button */}
      <button onClick={toggleMenu} className="fixed top-10 left-4 p-2 bg-gray-800 text-white rounded-md" style={{top:100}}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sliding Menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-40 left-0 h-full w-64 bg-gray-900 text-white shadow-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-gray-800 rounded-md">Person 1</li>
          <li className="p-2 bg-gray-800 rounded-md">Person 2</li>
          <li className="p-2 bg-gray-800 rounded-md">Person 3</li>
        </ul>
      </motion.div>
    </div>
  );
}