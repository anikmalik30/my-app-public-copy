import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { IconType } from 'react-icons';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    icon: IconType;
    description: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={cn('grid grid-cols-2 lg:grid-cols-3 py-10', className)}>
      {items.map((item, idx) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={idx}
            className='relative group block p-2 h-full w-full'
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            role='button'
            aria-label={item.text}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className='absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg'
                  layoutId='hoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    },
                  }}
                />
              )}
            </AnimatePresence>
            <div className='rounded-md w-full p-4 overflow-hidden bg-black group-hover:ring-2 ring-gray-300 relative z-20 transition-all duration-500 cursor-pointer'>
              <div className='py-10 z-50 relative space-y-5 h-auto md:h-40'>
                <Icon className='w-8 h-8 mx-auto text-gray-300' />
                {hoveredIndex !== idx && (
                  <p className='text-2xl font-bold text-center text-gray-300'>
                    {item.text}
                  </p>
                )}
                {hoveredIndex === idx && (
                  <motion.p
                    className='text-center text-gray-400 mt-4'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
