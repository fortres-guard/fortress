import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhatWeDeliver = () => {
  const fadeInScaleUpAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInScaleUpAnimation}
      className="mb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Deliver</h2>
          <ul className="text-lg leading-relaxed list-disc list-inside mb-6">
            <li className="mb-3"><strong>Unparalleled Security:</strong> Utilizing cutting-edge technologies such as zero-knowledge encryption, we ensure that your data remains confidential and accessible only to you.</li>
            <li className="mb-3"><strong>Innovative Solutions:</strong> We are dedicated to disrupting traditional security models with forward-thinking approaches that set new industry standards.</li>
            <li className="mb-3"><strong>Trusted Partnerships:</strong> By delivering reliable and robust cybersecurity solutions, we aim to build long-lasting relationships with major corporations, government entities, and individuals.</li>
            <li className="mb-3"><strong>Comprehensive Support:</strong> Our team provides dedicated support to ensure seamless integration and optimal performance of our security solutions, tailored to meet your specific needs.</li>
          </ul>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/flat-customer-service-week-illustration_23-2149644201.jpg?t=st=1719943145~exp=1719946745~hmac=8eb99ae62469a577abf1efa96dd16de8ee1668e864a4efbcef729167be22494e&w=826"
            alt="Data Security"
            className="w-full h-auto rounded-lg shadow-lg object-cover lg:h-80"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WhatWeDeliver;
