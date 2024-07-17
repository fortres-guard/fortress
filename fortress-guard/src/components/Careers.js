import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Careers = ({ jobListings }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="careers"
      className="py-12 bg-gray-900 text-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Join Our Team
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {jobListings.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const JobCard = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <motion.div
        className="bg-gray-700 p-6 rounded-lg text-left w-full"
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
      >
        <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
        <p className="text-gray-400 mb-2">
          <strong>Summary:</strong> {job.summary}
        </p>
        <p className="text-gray-400 mb-4">
          <strong>Primary Skills:</strong> {job.primarySkills.join(', ')}
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 inline-block bg-transparent text-teal-500 border border-teal-500 py-2 px-4 rounded hover:bg-teal-500 hover:text-white transition duration-300"
          >
            {showDetails ? 'Hide Details' : 'Read More'}
          </button>
          <a
            href={job.applyLink}
            className="mt-4 inline-block bg-transparent text-teal-500 border border-teal-500 py-2 px-4 rounded hover:bg-teal-500 hover:text-white transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </motion.div>
      
      {showDetails && (
        <motion.div
          className="bg-gray-800 p-4 rounded-lg mt-4 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-bold">Job Description</h2>
          <p>{job.fullDescription}</p>
          <h2 className="font-bold mt-2">Responsibilities</h2>
          <ul className="list-disc list-inside">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2 className="font-bold mt-2">Skills</h2>
          <ul className="list-disc list-inside">
            {job.skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};


const jobListings = [
  {
    title: "Software Engineer",
    summary: "We are looking for a skilled React.js Developer.",
    primarySkills: ["React", "Redux", "Node", "HTML", "CSS"],
    fullDescription: "You will be responsible for developing and implementing user interface components using React.js concepts.",
    responsibilities: [
      "Developing new user-facing features using React.js.",
      "Building reusable components and front-end libraries for future use.",
      "Translating designs and wireframes into high-quality code."
    ],
    skills: [
      "Strong proficiency in JavaScript.",
      "Thorough understanding of React.js and its core principles.",
      "Experience with popular React.js workflows (such as Redux or Hooks)."
    ],
    applyLink: "#",
  },
  {
    title: "Software Engineer",
    summary: "We are looking for a skilled React.js Developer.",
    primarySkills: ["React", "Redux", "Node", "HTML", "CSS"],
    fullDescription: "You will be responsible for developing and implementing user interface components using React.js concepts.",
    responsibilities: [
      "Developing new user-facing features using React.js.",
      "Building reusable components and front-end libraries for future use.",
      "Translating designs and wireframes into high-quality code."
    ],
    skills: [
      "Strong proficiency in JavaScript.",
      "Thorough understanding of React.js and its core principles.",
      "Experience with popular React.js workflows (such as Redux or Hooks)."
    ],
    applyLink: "#",
  },
  {
    title: "Software Engineer",
    summary: "We are looking for a skilled React.js Developer.",
    primarySkills: ["React", "Redux", "Node", "HTML", "CSS"],
    fullDescription: "You will be responsible for developing and implementing user interface components using React.js concepts.",
    responsibilities: [
      "Developing new user-facing features using React.js.",
      "Building reusable components and front-end libraries for future use.",
      "Translating designs and wireframes into high-quality code."
    ],
    skills: [
      "Strong proficiency in JavaScript.",
      "Thorough understanding of React.js and its core principles.",
      "Experience with popular React.js workflows (such as Redux or Hooks)."
    ],
    applyLink: "#", 
  },
];

const CareersContainer = () => {
  return <Careers jobListings={jobListings} />;
};

export default CareersContainer;
