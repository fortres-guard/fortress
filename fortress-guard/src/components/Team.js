import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.2,     // Adjust as per your needs
  });

  const teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'CEO & Founder',
      imageUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg4NDh8MHwxfGFsbHwxfHx8fHx8fHwxNjE2MTAzNTA1&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      name: 'Bob Smith',
      role: 'CTO',
      imageUrl: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg4NDh8MHwxfGFsbHwzfHx8fHx8fHwxNjE2MTAzNTA1&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      name: 'Carol White',
      role: 'CFO',
      imageUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg4NDh8MHwxfGFsbHw0fHx8fHx8fHwxNjE2MTAzNTA1&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      name: 'David Brown',
      role: 'Head of Marketing',
      imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg4NDh8MHwxfGFsbHw1fHx8fHx8fHwxNjE2MTAzNTA1&ixlib=rb-1.2.1&q=80&w=1080',
    },
  ];

  return (
    <section ref={ref} id="team" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="flex flex-wrap justify-center">
          <AnimatePresence>
            {inView && (
              <>
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <div className="text-center p-6 rounded-lg bg-opacity-30 bg-gray-600 shadow-lg">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-300">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Team;
