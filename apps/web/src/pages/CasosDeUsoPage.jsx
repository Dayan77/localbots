
import React from 'react';
import { Helmet } from 'react-helmet';
import AnimatedBackground from '@/components/AnimatedBackground';
import GradientText from '@/components/GradientText';
import GlassCard from '@/components/GlassCard';
import { ShoppingCart, Stethoscope, GraduationCap, Home, Scale, Factory, Zap, Users, Clock, TrendingUp } from 'lucide-react';

const CasosDeUsoPage = () => {
  const cases = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      desc: "Recupere carrinhos abandonados automaticamente, rastreie pedidos em tempo real e ofereça suporte pós-venda 24h — tudo pelo WhatsApp, sem intervenção humana.",
      tags: ["Recuperação de carrinho", "Rastreio de pedido", "Suporte pós-venda"],
    },
    {
      icon: Stethoscope,
      title: "Clínicas e Saúde",
      desc: "Agendamento e confirmação de consultas automático, lembretes de retorno, triagem inicial de sintomas e envio de resultados de exames sem sobrecarregar a recepção.",
      tags: ["Agendamento online", "Lembretes", "Triagem inicial"],
    },
    {
      icon: GraduationCap,
      title: "Educação",
      desc: "Capture e qualifique alunos durante lançamentos de cursos, tire dúvidas sobre grades e mensalidades, emita 2ª via de boletos e reduza a evasão com reengajamento automático.",
      tags: ["Captação de alunos", "2ª via de boleto", "Reengajamento"],
    },
    {
      icon: Home,
      title: "Imobiliárias",
      desc: "Qualifique compradores e locatários antes de enviar ao corretor, agende visitas, envie fotos e vídeos de imóveis e acompanhe o funil de vendas em tempo real.",
      tags: ["Qualificação de leads", "Agendamento de visitas", "Funil de vendas"],
    },
    {
      icon: Scale,
      title: "Escritórios e Serviços",
      desc: "Automatize o primeiro contato com clientes em escritórios de advocacia, contabilidade e consultoria — coletando informações, agendando reuniões e enviando propostas.",
      tags: ["Primeiro contato", "Coleta de dados", "Agendamento"],
    },
    {
      icon: Factory,
      title: "Indústria e Distribuidoras",
      desc: "Gerencie comunicação entre departamentos, automatize pedidos de reposição, suporte técnico e atendimento a revendedores com alto volume de mensagens simultâneas.",
      tags: ["Pedidos automáticos", "Suporte técnico", "Multi-departamento"],
    },
  ];

  const benefits = [
    { icon: Clock, title: "Atendimento 24h", desc: "Seu bot nunca dorme. Responde leads, agenda e qualifica em qualquer hora do dia ou da noite." },
    { icon: TrendingUp, title: "Funil de Vendas Ativo", desc: "Qualifique leads automaticamente e passe apenas os prontos para compra para o seu time humano." },
    { icon: Users, title: "Múltiplos Canais", desc: "WhatsApp, Instagram, site e Facebook integrados em uma única plataforma de atendimento." },
    { icon: Zap, title: "Integração com IA", desc: "Agentes treinados com o DNA da sua empresa para respostas precisas e humanizadas." },
  ];

  return (
    <>
      <Helmet>
        <title>Casos de Uso | LocalBots</title>
      </Helmet>
      <AnimatedBackground />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              IA aplicada ao <br/>
              <GradientText glow>Mundo Real</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Veja como diferentes segmentos estão usando a LocalBots para qualificar leads, automatizar atendimentos e escalar vendas pelo WhatsApp — sem contratar mais pessoas.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/image_casos_top.png"
              alt="LocalBots - Suporte ao Cliente"
              className="w-full max-w-sm rounded-2xl drop-shadow-xl"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {benefits.map((b, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} className="flex flex-col items-center text-center gap-3 py-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground">{b.title}</h4>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Cases */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Soluções por <GradientText glow>Segmento</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, idx) => (
              <GlassCard key={idx} delay={idx * 0.08} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Funil em ação */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            O Funil de <GradientText glow>IA em Ação</GradientText>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Nossa IA qualifica o lead, organiza as informações e passa para o humano apenas quando o cliente está pronto para fechar negócio.
          </p>
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
