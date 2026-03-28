
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AnimatedBackground from '@/components/AnimatedBackground';
import GradientText from '@/components/GradientText';
import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const ContatoPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      e.target.reset();
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contato | LocalBots</title>
      </Helmet>
      <AnimatedBackground />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Fale <GradientText glow>Conosco</GradientText>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar sua empresa a dar o próximo passo na automação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <GlassCard>
            <h2 className="text-2xl font-bold mb-8 text-foreground">Envie uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nome Completo</label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-white/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">E-mail Corporativo</label>
                <input 
                  required 
                  type="email" 
                  className="w-full bg-white/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <textarea 
                  required 
                  rows={4}
                  className="w-full bg-white/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-muted-foreground"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <NeonButton type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </NeonButton>
            </form>
          </GlassCard>

          <div className="space-y-8">
            <GlassCard className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">E-mail</h3>
                <p className="text-muted-foreground">contato@localbots.com.br</p>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-secondary/10 text-secondary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Telefone</h3>
                <p className="text-muted-foreground">+55 (11) 99999-9999</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-accent/10 text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Endereço</h3>
                <p className="text-muted-foreground">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContatoPage;
