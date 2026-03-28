
import React from 'react';
import { motion } from 'framer-motion';

const imageUrl = 'https://horizons-cdn.hostinger.com/ca336279-bebb-4caf-be4f-febfa5c1580e/71f6723b117af5fb7e36d829dfcd6b7f.jpg';

const layers = [
  {
    initial: { x: '-5%', y: '5%', scale: 1.15 },
    animate: { x: '5%', y: '-5%' },
    transition: { duration: 22, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
    opacity: 0.15,
  },
  {
    initial: { x: '5%', y: '-5%', scale: 1.25 },
    animate: { x: '-5%', y: '5%' },
    transition: { duration: 28, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
    opacity: 0.1,
  },
  {
    initial: { x: '2%', y: '-8%', scale: 1.1 },
    animate: { x: '-2%', y: '8%' },
    transition: { duration: 35, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
    opacity: 0.2,
  },
];

const AnimatedCtaBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-primary/5">
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute inset-[-15%] w-[130%] h-[130%] mix-blend-luminosity"
          initial={layer.initial}
          animate={layer.animate}
          transition={layer.transition}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: layer.opacity,
            filter: 'grayscale(20%) contrast(110%) brightness(140%)',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default AnimatedCtaBackground;
