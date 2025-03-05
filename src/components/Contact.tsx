import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [state, handleSubmit] = useForm("your-formspree-id"); // TODO: Replace with your Formspree ID

  if (state.succeeded) {
    return (
      <section id="contact" className="bg-gray-900 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-300">Thank you for your message! I will get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-gray-900 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
