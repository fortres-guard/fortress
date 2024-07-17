import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = ({ features }) => {
  const imgSize = { width: '100%', height: '400px' };

  // Use inView to trigger animations
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
      id="features"
      className="py-12 bg-gray-800 text-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Key Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg text-center"
              variants={cardVariants}
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                style={imgSize}
                className="mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Example features data (replace with your actual data)
const features = [
  {
    title: "Real-time Monitoring",
    description: "Monitor your system's performance in real-time with detailed metrics and analytics. Keep track of resource utilization, response times, and traffic patterns effortlessly.",
    imageUrl: "https://img.freepik.com/free-vector/businesswoman-analyzing-business-data-diagrams_1262-21453.jpg?w=1380&t=st=1719854882~exp=1719855482~hmac=1c91bdb9007100cdee04e214e51652ed91d37d5f26f05340851d2e4ff0049061",
  },
  {
    title: "Automated Alerts",
    description: "Receive automated alerts and notifications for critical events to ensure proactive responses. Set up custom triggers based on performance thresholds and security incidents.",
    imageUrl: "https://img.freepik.com/free-vector/social-media-stalking-invasion-online-privacy-cyberstalking-following-geotagging-guy-with-binoculars-looking-girls-social-profile-vector-isolated-concept-metaphor-illustration_335657-1283.jpg?t=st=1719855226~exp=1719858826~hmac=e4b1e7867c4908522da44f46607adc654106d543fe1d37d80b30fea078f13afe&w=826",
  },
  {
    title: "Secure Data Encryption",
    description: "Utilize robust encryption techniques to secure sensitive data and maintain compliance with industry standards. Protect customer information and intellectual property with ease.",
    imageUrl: "https://cdn.dribbble.com/users/52052/screenshots/1470721/media/31d65e48b7b4782fa9848e010e0c937a.gif",
  },
  {
    title: "Scalable Architecture",
    description: "Built with a scalable architecture that grows with your business needs without compromising performance. Easily handle increasing workloads and user demand seamlessly.",
    imageUrl: "https://img.freepik.com/free-vector/web-background-design_1223-77.jpg?t=st=1719855483~exp=1719859083~hmac=050a005a6d40877ccdd682735526bc6544420af890ad0d5ae1131f8f1c05e302&w=826",
  },
  {
    title: "Integration Capabilities",
    description: "Seamlessly integrate with existing tools and platforms to streamline workflows and maximize efficiency. Connect with popular APIs and third-party applications effortlessly.",
    imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm5pa3Jidmw4cjk0ZHp0d3Z0cW9sYjB0Y3VqZHBxemNhN2QxaHFiYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n6mEMqAuYOQ8l8qcEE/giphy.webp",
  },
  {
    title: "Customizable Dashboards",
    description: "Create personalized dashboards with drag-and-drop widgets to visualize data that matters most to you. Tailor your analytics experience and gain actionable insights at a glance.",
    imageUrl: "https://img.freepik.com/free-vector/environment-data-analytics-abstract-concept-illustration-digital-environmental-analytics-eco-data-technology-environmental-topics-earth-observation-global-business_335657-717.jpg?t=st=1719856201~exp=1719859801~hmac=fc089fe3c2504a0c49672dce17a4af122d40e13e73b24d7cb4837020e32db4c7&w=826",
  },
];

const FeaturesContainer = () => {
  return <Features features={features} />;
};

export default FeaturesContainer;
