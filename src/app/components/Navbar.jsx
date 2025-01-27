"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false)
        }
    };

    const menuItems = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'profile', label: 'About Me', icon: '👤' },
        { id: 'experience', label: 'Experiences', icon: '💼' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'certifications', label: 'Certifications', icon: '📜' },
        { id: 'footer', label: 'Contact', icon: '📞' }
    ]

    const MobileMenu = () => (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden fixed top-16 left-0 w-full bg-black/90 backdrop-blur-md border-t border-purple-800 shadow-2xl"
            >
                <div className="flex flex-col space-y-2 p-4">
                    {menuItems.map((item) => (
                        <motion.button
                            key={item.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection(item.id)}
                            className="flex items-center space-x-3 w-full text-left text-white hover:bg-purple-900/50 rounded-lg p-3 transition"
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-md">{item.label}</span>
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    )

    return (
        <nav className="fixed w-full bg-black/80 backdrop-blur-md border-b border-purple-800 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold select-none sm:px-0 px-5">Portfolio</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 px-5">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="select-none text-white hover:text-blue-400 transition"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden px-5">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && <MobileMenu />}
        </nav>
    )
}

export default Navbar;