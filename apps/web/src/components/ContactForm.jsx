
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import apiServerClient from '@/lib/apiServerClient';

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }
    
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      const response = await apiServerClient.fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao enviar mensagem');
      }

      toast({
        title: "Mensagem enviada com sucesso",
        description: "Entraremos em contato em breve."
      });

      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <Label htmlFor="nome" className="text-foreground">Nome completo</Label>
        <Input
          id="nome"
          name="nome"
          type="text"
          value={formData.nome}
          onChange={handleChange}
          className="mt-2 bg-muted border-border text-foreground placeholder:text-muted-foreground"
          placeholder="Seu nome"
        />
        {errors.nome && <p className="text-sm text-destructive mt-1">{errors.nome}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="text-foreground">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-2 bg-muted border-border text-foreground placeholder:text-muted-foreground"
          placeholder="seu@email.com"
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <Label htmlFor="telefone" className="text-foreground">Telefone</Label>
        <Input
          id="telefone"
          name="telefone"
          type="tel"
          value={formData.telefone}
          onChange={handleChange}
          className="mt-2 bg-muted border-border text-foreground placeholder:text-muted-foreground"
          placeholder="(00) 00000-0000"
        />
        {errors.telefone && <p className="text-sm text-destructive mt-1">{errors.telefone}</p>}
      </div>

      <div>
        <Label htmlFor="mensagem" className="text-foreground">Mensagem</Label>
        <Textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          rows={5}
          className="mt-2 bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none"
          placeholder="Como podemos ajudar?"
        />
        {errors.mensagem && <p className="text-sm text-destructive mt-1">{errors.mensagem}</p>}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar mensagem
            <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
