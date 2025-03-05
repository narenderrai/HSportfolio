import React from 'react';
      import { motion } from 'framer-motion';
      import { Github, Linkedin, Mail } from 'lucide-react';

      const Footer = () => {
          return (
              <footer className="bg-gray-900 py-8">
                  <div className="container mx-auto text-center">
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
                      <p className="text-gray-500 text-sm">
                          &copy; {new Date().getFullYear()} Harsh Sharma. All rights reserved.
                      </p>
                  </div>
              </footer>
          );
      };

      export default Footer;
