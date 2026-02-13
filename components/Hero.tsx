import React from 'react';
import { ArrowRight, Calendar, Clock, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse"></span>
          Workshop Ao Vivo • 28 de Fevereiro
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Monte em um único dia o plano mestre que irá desbloquear sua newsletter para faturar <span className="text-gold-400">seus primeiros R$ 6.000/mês</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 mb-10 font-light leading-relaxed">
          Pare de catar areia nas redes sociais. <br className="hidden sm:block"/>
          <strong className="text-white font-semibold">Comece a minerar ouro na caixa de entrada.</strong>
        </p>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold-500" />
              <span>4 horas de imersão</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gold-500" />
              <span>28 de Fev (09h - 13h)</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-gold-500" />
              <span>Apenas 100 vagas</span>
            </div>
          </div>
        </div>

        <a 
          href="https://links.viverdeblog.com/workshop-viver-de-news-17-01-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-slate-950 text-lg sm:text-xl font-bold py-5 px-10 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
        >
          QUERO GARANTIR MINHA VAGA POR R$ 47
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <p className="mt-4 text-sm text-slate-500">
          *Oferta por tempo limitado. O Zoom tem limite técnico.
        </p>
      </div>
    </section>
  );
};

export default Hero;
