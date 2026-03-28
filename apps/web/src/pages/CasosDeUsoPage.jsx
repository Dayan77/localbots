
import React from 'react';
import { Helmet } from 'react-helmet';
import AnimatedBackground from '@/components/AnimatedBackground';
import RobotMascot from '@/components/RobotMascot';
import GradientText from '@/components/GradientText';
import GlassCard from '@/components/GlassCard';
import { ShoppingCart, Stethoscope, GraduationCap, Home } from 'lucide-react';

const CasosDeUsoPage = () => {
  const cases = [
    { icon: ShoppingCart, title: "E-commerce", desc: "Recuperação de carrinhos abandonados e rastreio de pedidos automático." },
    { icon: Stethoscope, title: "Clínicas", desc: "Agendamento de consultas, lembretes e triagem inicial de pacientes." },
    { icon: GraduationCap, title: "Educação", desc: "Captação de alunos, dúvidas sobre cursos e emissão de 2ª via de boletos." },
    { icon: Home, title: "Imobiliárias", desc: "Qualificação de interessados em imóveis e agendamento de visitas." },
  ];

  return (
    <>
      <Helmet>
        <title>Casos de Uso | LocalBots</title>
      </Helmet>
      <AnimatedBackground />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              IA aplicada ao <br/>
              <GradientText glow>Mundo Real</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground">
              Veja como diferentes indústrias estão utilizando a LocalBots para revolucionar suas operações diárias.
            </p>
          </div>
          <div className="flex justify-center">
            <RobotMascot 
              src="https://horizons-cdn.hostinger.com/ca336279-bebb-4caf-be4f-febfa5c1580e/ece7c55e14c72f62422b400b773fe25c.png" 
              className="w-full max-w-sm drop-shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>
    </>
  );
};

export default CasosDeUsoPage;
