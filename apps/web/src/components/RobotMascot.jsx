
import React from 'react';
import { motion } from 'framer-motion';

const RobotMascot = ({ src, alt = "LocalBots Mascot", className = "" }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 animate-glow-pulse"></div>
      <img 
        src={src} 
        alt={alt} 
        className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(0,102,255,0.3)]"
      />
    </motion.div>
  );
};

export default RobotMascot;
