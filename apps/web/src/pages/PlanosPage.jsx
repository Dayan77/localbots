
import React from 'react';
import { Helmet } from 'react-helmet';
import AnimatedBackground from '@/components/AnimatedBackground';
import GradientText from '@/components/GradientText';
import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';
import { Check } from 'lucide-react';

const PlanosPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "R$ 297",
      desc: "Ideal para pequenos negócios iniciando na automação.",
      features: ["1.000 conversas/mês", "1 Canal (WhatsApp)", "Respostas Básicas", "Suporte por Email"],
      popular: false
    },
    {
      name: "Pro",
      price: "R$ 697",
      desc: "Para empresas em crescimento que precisam de escala.",
      features: ["5.000 conversas/mês", "3 Canais Integrados", "Qualificação de Leads", "Integração CRM", "Suporte Prioritário"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Soluções sob medida para grandes operações.",
      features: ["Conversas Ilimitadas", "Canais Ilimitados", "IA Personalizada", "Gerente de Conta", "SLA Garantido"],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planos | LocalBots</title>
      </Helmet>
      <AnimatedBackground />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Planos que <GradientText glow>Crescem</GradientText> com Você
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o momento da sua empresa. Sem surpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <GlassCard 
              key={idx} 
              delay={idx * 0.1} 
              className={`flex flex-col h-full ${plan.popular ? 'border-primary/30 shadow-[0_12px_40px_hsl(var(--primary)/0.15)] scale-105 z-10 bg-white/90' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-b-lg text-sm font-bold tracking-wider shadow-sm">
                  MAIS POPULAR
                </div>
              )}
              <div className="mb-8 mt-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="text-4xl font-display font-bold mb-4"><GradientText>{plan.price}</GradientText><span className="text-lg text-muted-foreground font-normal">/mês</span></div>
                <p className="text-muted-foreground">{plan.desc}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <NeonButton variant={plan.popular ? 'primary' : 'outline'} className="w-full mt-auto">
                Assinar {plan.name}
              </NeonButton>
            </GlassCard>
          ))}
        </div>
      </main>
    </>
  );
};

export default PlanosPage;
