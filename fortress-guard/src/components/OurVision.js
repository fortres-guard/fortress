import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurVision = () => {
  const slideInRightAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeInOut" 
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
      variants={slideInRightAnimation}
      className="mb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://img.freepik.com/free-vector/businessman-looking-camera-target-it-s-like-business-looking-way-be-successful-vector-business-illustration-concept_1150-60931.jpg?t=st=1719943067~exp=1719946667~hmac=0585cf1ea91279d4d1f3e130a715851a197dfc80084e96892a017ad2008ea5fb&w=1380"
            alt="Vision"
            className="w-full h-auto rounded-lg shadow-lg object-cover lg:h-80"
          />
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed mb-6">
            At FortressGuard, our vision is to be a leader in the cybersecurity industry, recognized for our unwavering commitment to protecting digital assets. We strive to be the trusted partner for businesses, schools, healthcare providers, and individuals, offering solutions that are both advanced and accessible. Our goal is to be synonymous with security, reliability, and innovation.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OurVision;
