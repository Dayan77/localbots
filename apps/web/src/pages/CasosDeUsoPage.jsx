
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
              src="/image_32c13906.png"
              className="w-full max-w-sm drop-shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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

        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            O Funil de <GradientText glow>IA em Ação</GradientText>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/image_13cc8abb.png" alt="Funil de IA: Qualificação e Transmissão para o Humano" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/image_5f38091f.png" alt="Robô levando leads para a compra final" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CasosDeUsoPage;
