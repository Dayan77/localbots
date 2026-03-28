
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const UseCaseCard = ({ industry, description, metrics, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-subtle hover:bg-muted/80 border border-border/50"
    >
      <h3 className="text-xl font-bold mb-3">{industry}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      
      {metrics && metrics.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-border/50">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <TrendingUp className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="text-sm font-medium">{metric}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default UseCaseCard;
