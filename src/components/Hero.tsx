import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 py-24">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Harsh Sharma
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Solution-Oriented Engineer | IT Infrastructure Expert
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-300 text-sm md:text-base mb-4"
        >
          Ghaziabad, UP | Email: <a href="mailto:lucky5666@aol.com" className="text-blue-400">lucky5666@aol.com</a> | Mobile: +91 99998 80529
          <div className="flex justify-center items-center gap-4 mt-2">
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
                  href="mailto:lucky5666@aol.com"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-green-500"
              >
                  <Mail />
              </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="/resume.pdf" // TODO: Create resume.pdf in /public or replace with the correct URL
            download
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-block transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
