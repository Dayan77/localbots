
import React from 'react';
import { Helmet } from 'react-helmet';
import AnimatedBackground from '@/components/AnimatedBackground';
import RobotMascot from '@/components/RobotMascot';
import GradientText from '@/components/GradientText';
import GlassCard from '@/components/GlassCard';

const SobrePage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | LocalBots</title>
      </Helmet>
      <AnimatedBackground />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Nossa <GradientText glow>História</GradientText>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nascemos para democratizar o acesso à inteligência artificial de alto nível para empresas de todos os tamanhos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <GlassCard>
              <h2 className="text-3xl font-bold mb-6 text-foreground">A Revolução do Atendimento</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  A LocalBots começou com uma visão simples: a tecnologia não deve ser uma barreira, mas uma ponte entre empresas e seus clientes.
                </p>
                <p>
                  Nossa equipe de engenheiros e especialistas em IA desenvolveu uma plataforma que entende o contexto, aprende com as interações e entrega respostas precisas em milissegundos.
                </p>
                <p>
                  Hoje, processamos milhões de mensagens diariamente, ajudando negócios locais e grandes corporações a escalar suas operações sem perder o toque humano.
                </p>
              </div>
            </GlassCard>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <RobotMascot 
              src="https://horizons-cdn.hostinger.com/ca336279-bebb-4caf-be4f-febfa5c1580e/c7c4ca9c7f6416bf9f581b64df95b0f2.png" 
              className="w-full max-w-md drop-shadow-xl"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default SobrePage;
