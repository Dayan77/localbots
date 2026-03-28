
import React from 'react';
import { motion } from 'framer-motion';

const NeonButton = ({ children, onClick, variant = 'primary', className = "", type = "button", disabled = false }) => {
  const variants = {
    primary: "bg-primary text-primary-foreground neon-glow-primary hover:bg-primary/90 hover:shadow-[0_6px_25px_hsl(var(--primary)/0.4)]",
    secondary: "bg-secondary text-secondary-foreground neon-glow-secondary hover:bg-secondary/90 hover:shadow-[0_6px_25px_hsl(var(--secondary)/0.5)]",
    accent: "bg-accent text-accent-foreground neon-glow-accent hover:bg-accent/90 hover:shadow-[0_6px_25px_hsl(var(--accent)/0.4)]",
    outline: "bg-white/80 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary/5 neon-glow-primary",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-4 rounded-xl font-semibold tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default NeonButton;
