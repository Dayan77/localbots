
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';
import NeonButton from '@/components/NeonButton';
import GradientText from '@/components/GradientText';

const Hero = () => {
  const navigate = useNavigate();
  
  const handleCTAClick = () => {
    navigate('/contato');
  };
  
  const handleViewWorkClick = () => {
    navigate('/casos-de-uso');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedHeroBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Inteligência Artificial Avançada</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-foreground"
          >
            Transforme seu
            <span className="block"><GradientText glow>Atendimento</GradientText></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Automatize conversas, qualifique leads e escale suas vendas com a plataforma de IA mais inteligente do mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center mb-16"
          >
            <NeonButton
              onClick={handleCTAClick}
              variant="primary"
              className="flex items-center justify-center gap-2"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
            <NeonButton
              onClick={handleViewWorkClick}
              variant="outline"
            >
              Ver Casos de Uso
            </NeonButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex justify-center"
          >
            <img
              src="/image_home.png"
              alt="LocalBots - Automação Empresarial Simples e Rápida"
              className="w-full max-w-2xl rounded-2xl drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
