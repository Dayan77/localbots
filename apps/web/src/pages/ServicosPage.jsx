
import React from 'react';
import { Helmet } from 'react-helmet';
import AnimatedBackground from '@/components/AnimatedBackground';
import GradientText from '@/components/GradientText';
import GlassCard from '@/components/GlassCard';
import { MessageSquare, Users, Database, Zap, Shield, Globe } from 'lucide-react';

const ServicosPage = () => {
  const services = [
    { icon: MessageSquare, title: "Chatbots Inteligentes", desc: "Agentes virtuais que conversam naturalmente com seus clientes 24/7.", gradient: "from-primary to-secondary" },
    { icon: Users, title: "Qualificação de Leads", desc: "Identifique e direcione os melhores contatos para sua equipe de vendas.", gradient: "from-secondary to-accent" },
    { icon: Database, title: "Integração CRM", desc: "Sincronização perfeita com suas ferramentas de gestão favoritas.", gradient: "from-accent to-purple" },
    { icon: Zap, title: "Automação de Fluxos", desc: "Crie jornadas complexas de atendimento com nosso construtor visual.", gradient: "from-purple to-primary" },
    { icon: Shield, title: "Segurança de Dados", desc: "Criptografia de ponta a ponta e conformidade total com a LGPD.", gradient: "from-primary to-accent" },
    { icon: Globe, title: "Omnichannel", desc: "Atenda no WhatsApp, Instagram, Site e Facebook em uma única tela.", gradient: "from-secondary to-purple" },
  ];

  return (
    <>
      <Helmet>
        <title>Serviços | LocalBots</title>
      </Helmet>
      <AnimatedBackground />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Nossos <GradientText glow>Serviços</GradientText>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar a comunicação da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} className="group">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${srv.gradient}`}></div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${srv.gradient} flex items-center justify-center mb-6 shadow-md`}>
                <srv.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{srv.title}</h3>
              <p className="text-muted-foreground">{srv.desc}</p>
            </GlassCard>
          ))}
        </div>
      </main>
    </>
  );
};

export default ServicosPage;
