'use client';
import React from 'react';
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedis,
  SiSocketdotio,
} from 'react-icons/si';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically load components
const Title = dynamic(() => import('./Title'), {
  loading: () => <div>Loading Title...</div>,
});
const DirectionAwareHover = dynamic(
  () =>
    import('@/components/ui/direction-aware-hover').then(
      (mod) => mod.DirectionAwareHover,
    ),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  },
);

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  const projects = [
    {
      title: 'Student Assessment Platform',
      tech: [SiReact, SiNodedotjs, SiExpress, SiMysql],
      link: 'https://anikmalik.com/blog/building-react-node-student-assessment-platform-full-stack-case-study',
      cover: '/student_assessment.png',
      background: 'bg-gray-300',
    },
    {
      title: 'Real Time Chat Application',
      tech: [SiNestjs, SiSocketdotio, SiRedis, SiMongodb, SiDocker],
      link: 'https://anikmalik.com/blog/building-scalable-chat-application-nestjs-mongodb-redis-websockets-socketio-docker',
      cover: '/real-time-chat-application.png',
      background: 'bg-gray-300',
    },
  ];

  return (
    <div className='py-10 p-5 sm:p-0 mb-10'>
      {/* Title Section */}
      <Title
        text='Projects'
        className='flex flex-col items-center justify-center'
      />
      <p className='text-center text-gray-500 text-lg mt-4'>
        Here are some of my projects that I have worked on.
        <br />
        Click on the cards to view more about the project.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {projects.map((project, index) => (
          <Link
            href={project.link}
            key={project.title}
            className='view'
            aria-label={`Project: ${project.title}`}
          >
            <motion.div
              className={cn('p-2 rounded-md', project.background)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DirectionAwareHover
                imageUrl={project.cover}
                className='w-full space-y-5 cursor-pointer'
              >
                <div className='space-y-5'>
                  <h1 className='text-2xl font-bold'>{project.title}</h1>
                  <div className='flex items-center gap-5'>
                    {project.tech.map((Icon, idx) => (
                      <Icon key={idx} className='w-8 h-8' />
                    ))}
                  </div>
                </div>
              </DirectionAwareHover>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Projects);
