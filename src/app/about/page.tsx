'use client';
import Brain from '@/components/brain';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import Header from '../../components/Header';
import withFooter from '../withFooter';
// import AAnimation from "@/components/a-animation";
import dynamic from 'next/dynamic';
import ScrollSvg from '../../components/ui/scrollSvg';
import {
  SiAmazonec2,
  SiAmazonwebservices,
  SiAwsorganizations,
  SiDocker,
  SiExpress,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGraphql,
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
  SiTsnode,
  SiTypescript,
} from 'react-icons/si';
import { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa6';
import { GoGitBranch } from 'react-icons/go';
import { MdSettings } from 'react-icons/md';
// const AAnimation = dynamic(() => import("@/components/a-animation"), { ssr: false });

function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  // console.log(scrollYProgress);

  const skillRef = useRef<HTMLDivElement | null>(null);

  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

  const experienceRef = useRef<HTMLDivElement | null>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

  const skills = [
    { name: 'ReactJS', icon: SiReact },
    { name: 'NextJS', icon: SiNextdotjs },
    { name: 'TailwindCSS', icon: SiTailwindcss },
    { name: 'NodeJS', icon: SiNodedotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL ', icon: SiMysql },
    { name: 'Gatsby', icon: SiGatsby },
    { name: 'Javascript', icon: SiJavascript },
    {
      name: 'Amazon Web Services',
      icon: SiAmazonwebservices,
      customStyle: { width: '2rem', height: '2rem' },
    },
    {
      name: 'Git & Github',
      icon: SiGit,
    },
    { name: 'Express', icon: SiExpress },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Socket.IO', icon: SiSocketdotio },
    { name: 'NestJS', icon: SiNestjs },
    { name: 'Docker', icon: SiDocker },
    { name: 'Microservices', icon: SiNestjs },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  interface Skill {
    name: string;
    icon?: IconType;
    customStyle?: React.CSSProperties;
  }

  return (
    // <div>
    <>
      <div className='min-h-screen bg-black overflow-hidden'>
        <motion.div
          className='h-full mt-28'
          // initial={{ y: '-200vh' }}
          // animate={{ y: '0%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* CONTAINER */}
          <div className='h-full lg:flex' ref={containerRef}>
            {/* TEXT CONTAINER */}
            <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 '>
              {/* BIOGRAPHY & IMAGE CONTAINER */}
              <div className='flex flex-col lg:flex-row gap-8 justify-center items-center'>
                {/* BIOGRAPHY IMAGE */}
                <div className='flex justify-center mb-8 lg:mb-0 lg:w-1/3 lg:justify-endblock lg:hidden'>
                  {/* Image container with shadow and hover effect */}
                  <div className='relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-lg transition-all duration-300 lg:top-[150px]'>
                    {/* Gradient overlay for more emphasis */}
                    <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-50'></div>
                    <Image
                      src='/profile.png'
                      alt='Profile Picture'
                      width={600}
                      height={600}
                      className='rounded-full object-cover w-full h-full'
                    />
                  </div>
                </div>
                {/* BIOGRAPHY CONTAINER */}
                <div className='flex flex-col gap-8 justify-center lg:w-2/3 z-10 relative'>
                  {/* BIOGRAPHY IMAGE */}
                  {/* <div className='flex justify-center'>
                  <Image
                    src='/profile.png'
                    alt='Profile Picture'
                    width={150}
                    height={150}
                    className='w-36 h-36 rounded-full object-cover'
                  />
                </div> */}

                  {/* BIO TITLE */}
                  <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
                  {/* BIO TEXT */}
                  <motion.p
                    className='text-lg text-zinc-400'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    I am <span className='text-white'>Anik Malik</span>, a{' '}
                    <span className='text-white'>full-stack</span> developer
                    based in Ahmedabad, India. With over a year of professional
                    experience at NNT Software, I specialize in a range of
                    technologies including React, Express, Node.js, TypeScript,
                    MongoDB, MySQL, and many more. My expertise extends across
                    various a diverse range of{' '}
                    <span className='text-white'>
                      frontend and backend technologies.
                    </span>
                    , showcasing my versatility and capability in web
                    development.
                    <br />
                    <br />
                    In addition to my technical skills, I am passionate about
                    cube solving, a hobby that reflects my{' '}
                    <span className='text-white'>problem-solving mindset</span>.
                    Whether tackling{' '}
                    <span className='text-white'>complex coding</span>{' '}
                    challenges or engaging in innovative projects, I am
                    committed to delivering exceptional results and continually
                    expanding my knowledge.
                    <br />
                    <br />
                    Feel free to{' '}
                    <span className='text-white'>connect with me</span> to
                    explore how we can collaborate on exciting new ventures or
                    to discuss the latest in web development.
                  </motion.p>
                  {/* BIO QUOTE */}
                  <span className='italic'>
                    &quot; Driven by a passion for technology and
                    problem-solving, I thrive on creating impactful solutions
                    and exploring new challenges in the world of web
                    development. &quot;
                  </span>
                  {/* BIO SIGNATURE */}
                  <div className='self-end'>
                    <Image
                      src='/sign.svg'
                      alt='Description of image'
                      width={140}
                      height={140}
                    />
                  </div>

                  {/* SCROLL SVG */}
                  <div className='flex justify-start -mt-16'>
                    <ScrollSvg />
                  </div>
                </div>
                {/* BIOGRAPHY IMAGE */}
                <div className='justify-center mb-8 lg:mb-0 lg:w-1/3 lg:justify-end hidden lg:block'>
                  {/* Image container with shadow and hover effect */}
                  <div className='relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-lg transition-all duration-300 lg:absolute lg:top-[150px]'>
                    {/* Gradient overlay for more emphasis */}
                    <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-50'></div>
                    <Image
                      src='/profile.png'
                      alt='Anik Malik - Profile Picture'
                      width={600}
                      height={600}
                      className='rounded-full object-cover w-full h-full'
                    />
                  </div>
                </div>
              </div>

              {/* SKILLS CONTAINER */}
              <div
                className='flex flex-col gap-8 justify-center -top-11'
                ref={skillRef}
              >
                {/* SKILL TITLE */}
                {/* <motion.h1
                  initial={{ x: '-300px' }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className='font-bold text-2xl'
                > */}
                <motion.h1
                  initial='hidden'
                  animate={isSkillRefInView ? 'visible' : 'hidden'}
                  variants={titleVariants}
                  className='font-bold text-2xl'
                >
                  SKILLS
                </motion.h1>
                {/* SKILL LIST */}
                {/* <motion.div
                  initial={{ x: '-300px' }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  className='flex gap-4 flex-wrap'
                > */}
                <motion.div
                  initial='hidden'
                  animate={isSkillRefInView ? 'visible' : 'hidden'}
                  variants={containerVariants}
                  className='flex gap-4 flex-wrap'
                >
                  {skills.map((skill: Skill, index) => {
                    const Icon = skill.icon || MdSettings;
                    return (
                      // <div
                      //   key={index}
                      //   className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'
                      // >
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className='relative rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-black hover:text-black'
                      >
                        <div className='flex items-center justify-center h-full'>
                          <p className='text-center'>{skill.name}</p>
                        </div>
                        <motion.div
                          className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white p-4 rounded opacity-0 hover:opacity-100 transition-opacity duration-300'
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {Icon && (
                            <Icon className='w-8 h-8 mx-auto text-gray-300' />
                          )}
                        </motion.div>
                      </motion.div>
                      // </div>
                    );
                  })}
                </motion.div>
                {/* SKILL SCROLL */}
                <ScrollSvg />
              </div>

              {/* EXPERIENCE CONTAINER */}
              <div
                className='flex flex-col gap-12 justify-center pb-48 mb-15'
                ref={experienceRef}
              >
                {/* EXPERIENCE TITLE */}
                {/* <motion.h1
                  initial={{ x: '-300px' }}
                  animate={isExperienceRefInView ? { x: '0' } : {}}
                  transition={{ delay: 0.2 }}
                  className='font-bold text-2xl'
                > */}
                <motion.h1
                  initial='hidden'
                  animate={isExperienceRefInView ? 'visible' : 'hidden'}
                  variants={titleVariants}
                  className='font-bold text-2xl'
                >
                  EXPERIENCE
                </motion.h1>
                {/* EXPERIENCE LIST */}
                {/* <motion.div
                  initial={{ x: '-300px' }}
                  animate={isExperienceRefInView ? { x: '0' } : {}}
                  className='py-5 md:py-0'
                > */}
                <motion.div
                  initial='hidden'
                  animate={isExperienceRefInView ? 'visible' : 'hidden'}
                  variants={containerVariants}
                  className='py-5 md:py-0'
                >
                  {/* EXPERIENCE LIST ITEM */}
                  {/* <div className="flex justify-between h-48"> */}
                  {/* LEFT */}
                  {/* <div className="w-1/3 "> */}
                  {/* JOB TITLE */}
                  {/* <div className="bg-stone-800 p-3 font-semibold rounded-b-lg rounded-s-lg"> */}
                  {/* Junior Developer */}
                  {/* </div> */}
                  {/* JOB DESC */}
                  {/* <div className="p-3 text-sm italic">
                        I had the opportunity to work on a range of projects in
                        technologies such as React, Express, and Node.js.
                      </div> */}
                  {/* JOB DATE */}
                  {/* <div className="p-3 text-red-400 text-sm font-semibold">
                        2024 - Present
                      </div> */}
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-stone-800 text-sm font-semibold w-fit">
                        Apple
                      </div>
                    </div> */}
                  {/* CENTER */}
                  {/* <div className="w-1/6 flex justify-center"> */}
                  {/* LINE */}
                  {/* <div className="w-1 h-full bg-gray-600 rounded relative"> */}
                  {/* LINE CIRCLE */}
                  {/* <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-stone-800 -left-2"></div>
                      </div>
                    </div> */}
                  {/* RIGHT */}
                  {/* <div className="w-1/3 "></div>
                  </div> */}
                  {/* EXPERIENCE LIST ITEM */}
                  <div className='flex justify-between h-48'>
                    {/* LEFT */}
                    <div className='w-1/3 '></div>
                    {/* CENTER */}
                    <div className='w-1/6 flex justify-center'>
                      {/* LINE */}
                      <div className='w-1 h-full bg-gray-600 rounded relative'>
                        {/* LINE CIRCLE */}
                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-stone-800 -left-2'></div>
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div className='w-1/3 '>
                      {/* JOB TITLE */}
                      <div className='bg-stone-800 p-3 font-semibold rounded-b-lg rounded-s-lg'>
                        FullStack Developer
                      </div>
                      {/* JOB DESC */}
                      <div className='p-3 text-sm italic'>
                        <p className='hidden md:block'>
                          Led the development of dynamic, high-performance web
                          applications using React, enhancing user experience
                          and interface design. Additionally, contributed to
                          backend development with Node.js, implementing robust
                          and scalable server-side logic.
                        </p>
                        <p className='block md:hidden'>
                          Developed high-performance full-stack web applications
                          using React and Node.js, enhancing user experience and
                          interface design.
                        </p>
                      </div>
                      {/* JOB DATE */}
                      <div className='p-3 text-red-400 text-sm font-semibold'>
                        2023 - Present
                      </div>
                      {/* JOB COMPANY */}
                      <div className='p-1 rounded bg-stone-800 text-sm font-semibold w-fit'>
                        NNT Software
                      </div>
                    </div>
                  </div>
                  {/* EXPERIENCE LIST ITEM */}
                  <div className='flex justify-between h-48'>
                    {/* LEFT */}
                    <div className='w-1/3 '>
                      {/* JOB TITLE */}
                      <div className='bg-stone-800 p-3 font-semibold rounded-b-lg rounded-s-lg'>
                        Junior Developer
                      </div>
                      {/* JOB DESC */}
                      <div className='p-3 text-sm italic'>
                        <p className='hidden md:block'>
                          Gained hands-on experience in full-stack development,
                          working on a variety of projects utilizing React,
                          Express, and Node.js. Developed a strong foundation in
                          both frontend and backend technologies.
                        </p>
                        <p className='block md:hidden'>
                          Gained hands-on experience in full-stack development
                          using React, Express, and Node.js.
                        </p>
                      </div>
                      {/* JOB DATE */}
                      <div className='p-3 text-red-400 text-sm font-semibold'>
                        2023
                      </div>
                      {/* JOB COMPANY */}
                      <div className='p-1 rounded bg-stone-800 text-sm font-semibold w-fit'>
                        NNT Software
                      </div>
                    </div>
                    {/* CENTER */}
                    <div className='w-1/6 flex justify-center'>
                      {/* LINE */}
                      <div className='w-1 h-full bg-gray-600 rounded relative'>
                        {/* LINE CIRCLE */}
                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-stone-800 -left-2'></div>
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div className='w-1/3 '></div>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* SVG CONTAINER */}
          </div>
        </motion.div>
        {/* <AAnimation /> */}
        {/* <div className="my-10 -z-10"> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default React.memo(withFooter(AboutPage));
