import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setResponseMessage(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMessage('Failed to send message');
    }
  };

  const fadeInUpAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={ref}
      id="contact-us"
      className="py-16 bg-gray-800 text-white"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUpAnimation}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ y: -50 }}
          animate={inView ? { y: 0 } : { y: -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Contact Us
        </motion.h2>
        <motion.form
          className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 block w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-lg text-lg transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
          {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
