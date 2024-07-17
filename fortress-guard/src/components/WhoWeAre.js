import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhoWeAre = () => {
  const slideInLeftAnimation = {
    hidden: { opacity: 0, x: -100 },
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
      variants={slideInLeftAnimation}
      className="mb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?t=st=1719942354~exp=1719945954~hmac=4d7b0e892c40687e6f53a1abb73947c14f7a32b425a9dbded59e9756693e9d48&w=1380"
            alt="Team Collaboration"
            className="w-full h-auto rounded-lg shadow-lg object-cover lg:h-80"
          />
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed mb-6">
            Founded by a visionary developer with a deep passion for cybersecurity, FortressGuard brings together a team of experts committed to innovation and excellence. With experience spanning various industries, including healthcare and education, we understand the unique challenges and requirements of data protection. Our commitment to security and trust drives us to create solutions that empower our clients to thrive in a digital age.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhoWeAre;
