
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import GradientText from './GradientText';

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border bg-white/50 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-display font-bold tracking-tighter">
                <GradientText glow>LocalBots</GradientText>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Transformando o atendimento ao cliente com inteligência artificial e automação de ponta. O futuro da comunicação empresarial começa aqui.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Sobre', 'Serviços', 'Casos de Uso', 'Planos'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} LocalBots. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
