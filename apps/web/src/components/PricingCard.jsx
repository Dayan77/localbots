
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingCard = ({ plan, price, period, features, highlighted = false, index = 0, onCTAClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col h-full rounded-2xl p-8 transition-all duration-300 ${
        highlighted 
          ? 'bg-primary text-primary-foreground scale-105 shadow-2xl shadow-primary/20 ring-2 ring-primary' 
          : 'bg-card hover:shadow-xl hover:shadow-black/20'
      }`}
    >
      {highlighted && (
        <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full mb-4 self-start">
          Recomendado
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold" style={{ letterSpacing: '-0.02em' }}>{price}</span>
          {period && <span className={highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}>/{period}</span>}
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-secondary' : 'text-primary'}`} />
            <span className={highlighted ? 'text-primary-foreground' : 'text-foreground'}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Button 
          onClick={onCTAClick}
          className={`w-full group ${
            highlighted 
              ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' 
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
        >
          Começar agora
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
