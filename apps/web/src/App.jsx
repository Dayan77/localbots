
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import SobrePage from '@/pages/SobrePage';
import ServicosPage from '@/pages/ServicosPage';
import CasosDeUsoPage from '@/pages/CasosDeUsoPage';
import PlanosPage from '@/pages/PlanosPage';
import ContatoPage from '@/pages/ContatoPage';
import { Toaster } from 'sonner';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-primary/30 selection:text-primary-foreground">
      <ScrollToTop />
      <Header />
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/sobre" element={<PageWrapper><SobrePage /></PageWrapper>} />
            <Route path="/servicos" element={<PageWrapper><ServicosPage /></PageWrapper>} />
            <Route path="/casos-de-uso" element={<PageWrapper><CasosDeUsoPage /></PageWrapper>} />
            <Route path="/planos" element={<PageWrapper><PlanosPage /></PageWrapper>} />
            <Route path="/contato" element={<PageWrapper><ContatoPage /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><HomePage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
