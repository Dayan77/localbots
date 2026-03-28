
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Store, Building2, Zap } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import RobotMascot from '@/components/RobotMascot';
import GradientText from '@/components/GradientText';
import NeonButton from '@/components/NeonButton';
import GlassCard from '@/components/GlassCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    { icon: BarChart3, title: "Analytics Avançado", desc: "Métricas em tempo real do seu atendimento.", color: "text-primary" },
    { icon: TrendingUp, title: "Crescimento Escalonável", desc: "Atenda milhares de clientes simultaneamente.", color: "text-secondary" },
    { icon: Store, title: "Negócios Locais", desc: "Soluções perfeitas para o varejo da sua região.", color: "text-accent" },
    { icon: Building2, title: "Enterprise", desc: "Infraestrutura robusta para grandes corporações.", color: "text-purple" },
    { icon: Zap, title: "Eficiência Máxima", desc: "Reduza o tempo de resposta para segundos.", color: "text-primary" },
  ];

  return (
    <>
      <Helmet>
        <title>LocalBots | Automação Inteligente</title>
      </Helmet>
      <AnimatedBackground />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
              O Futuro do <br/>
              <GradientText glow>Atendimento</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Automatize suas conversas, qualifique leads e escale suas vendas com a inteligência artificial mais avançada do mercado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/planos">
                <NeonButton variant="primary">Começar Agora</NeonButton>
              </Link>
              <Link to="/contato">
                <NeonButton variant="outline">Falar com Especialista</NeonButton>
              </Link>
            </div>
          </motion.div>
          
          <div className="relative h-[500px] flex items-center justify-center">
            <RobotMascot 
              src="https://horizons-cdn.hostinger.com/ca336279-bebb-4caf-be4f-febfa5c1580e/45b81f862522ba4bf6720b9269a4c16d.png" 
              className="w-full max-w-md drop-shadow-xl"
            />
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Por que escolher a <GradientText>LocalBots</GradientText>?</h2>
            <p className="text-muted-foreground text-lg">Tecnologia de ponta desenhada para resultados reais.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <GlassCard key={idx} delay={idx * 0.1} className={idx === 3 ? "lg:col-span-2" : ""}>
                <div className={`w-14 h-14 rounded-xl bg-white shadow-sm border border-border flex items-center justify-center mb-6`}>
                  <feat.icon className={`w-7 h-7 ${feat.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feat.title}</h3>
                <p className="text-muted-foreground">{feat.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
