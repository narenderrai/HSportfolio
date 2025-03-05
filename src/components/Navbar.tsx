import React, { useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {

    useEffect(() => {
        const handleSmoothScroll = (event: Event, targetId: string) => {
            event.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        navLinks.forEach(link => {
            const targetId = link.getAttribute('href')!;
            link.addEventListener('click', (event) => handleSmoothScroll(event, targetId));
        });

        // Cleanup event listeners on unmount
        return () => {
            navLinks.forEach(link => {
                const targetId = link.getAttribute('href')!;
                link.removeEventListener('click', (event) => handleSmoothScroll(event, targetId));
            });
        };
    }, []);

  return (
    <nav className="bg-gray-800 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-bold text-white"
        >
          Harsh Sharma
        </motion.div>
        <div className="flex space-x-6">
          <motion.a
            href="#about"
            whileHover={{ y: -2 }}
            className="text-gray-300 hover:text-white"
          >
            About
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ y: -2 }}
            className="text-gray-300 hover:text-white"
          >
            Experience
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ y: -2 }}
            className="text-gray-300 hover:text-white"
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            className="text-gray-300 hover:text-white"
          >
            Contact
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/harshda1/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-blue-500"
          >
            <Linkedin />
          </motion.a>
          <motion.a
            href="https://github.com/harshda1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-gray-100"
          >
            <Github />
          </motion.a>
            <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-green-500"
            >
                <Mail />
            </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
