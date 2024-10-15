'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const Title = dynamic(() => import('./Title'), {
  loading: () => <div>Loading Title...</div>,
});

const HoverEffect = dynamic(
  () =>
    import('@/components/ui/card-hover-effect').then((mod) => mod.HoverEffect),
  {
    loading: () => <div>Loading Hover Effect...</div>,
  },
);

function Skills() {
  const skills = [
    {
      text: 'React',
      icon: SiReact,
      description: 'A JavaScript library for building user interfaces.',
    },
    {
      text: 'Node.js',
      icon: SiNodedotjs,
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      text: 'TypeScript',
      icon: SiTypescript,
      description:
        'A typed superset of JavaScript that compiles to plain JavaScript.',
    },
    {
      text: 'Express',
      icon: SiExpress,
      description: 'A minimal and flexible Node.js web application framework.',
    },
    {
      text: 'MongoDB',
      icon: SiMongodb,
      description:
        'A document-oriented NoSQL database used for high volume data storage.',
    },
    {
      text: 'MySQL',
      icon: SiMysql,
      description: 'An open-source relational database management system.',
    },
    {
      text: 'Next.js',
      icon: SiNextdotjs,
      description:
        'A React framework for server-rendered or statically-exported React apps.',
    },
    {
      text: 'TailwindCSS',
      icon: SiTailwindcss,
      description: 'A utility-first CSS framework for rapid UI development.',
    },
    {
      text: 'Git',
      icon: SiGit,
      description:
        'A distributed version-control system for tracking changes in source code.',
    },
    {
      text: 'NestJS',
      icon: SiNestjs,
      description:
        'A progressive Node.js framework for building efficient, scalable applications.',
    },
    {
      text: 'Socket.IO',
      icon: SiSocketdotio,
      description:
        'A library for real-time, bidirectional, event-based communication.',
    },
    {
      text: 'PostgreSQL',
      icon: SiPostgresql,
      description:
        'An open-source relational database known for its extensibility and SQL compliance.',
    },
  ];

  return (
    <div className='max-w-5xl mx-auto px-8 mt-5'>
      <Title
        text='Skills'
        className='flex flex-col items-center justify-center'
      />
      <p className='text-center text-gray-500 text-lg mt-4'>
        I have experience working with the following technologies and tools.
        <br />
        Hover over the cards to see more details.
      </p>
      <HoverEffect items={skills} />
    </div>
  );
}

export default React.memo(Skills);
