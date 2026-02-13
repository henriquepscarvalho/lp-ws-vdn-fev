import React from 'react';
import { Gift, Check, ShieldCheck, Clock } from 'lucide-react';
import { BONUSES } from '../constants';

const Offer: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Bonuses */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Bônus Exclusivos <span className="text-gold-500">(Valor Total: R$ 1.085)</span>
          </h2>
          <div className="space-y-4">
            {BONUSES.map((bonus) => (
              <div key={bonus.id} className="bg-slate-900 p-4 sm:p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex-shrink-0 p-3 bg-gold-500/10 rounded-lg">
                  <Gift className="w-6 h-6 text-gold-500" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-white font-bold text-lg">{bonus.title}</h3>
                  <p className="text-slate-400 text-sm">{bonus.description}</p>
                </div>
                <div className="flex-shrink-0 text-slate-500 font-mono text-sm border border-slate-800 px-3 py-1 rounded">
                  Valor: {bonus.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-gold-500 rounded-3xl p-8 sm:p-12 text-center shadow-[0_0_50px_rgba(234,179,8,0.1)] relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-gold-500 text-slate-950 font-bold px-6 py-2 rounded-full uppercase tracking-wider text-sm shadow-lg">
              Oferta Especial
            </span>
          </div>

          <h3 className="text-2xl text-slate-300 mb-4">O Investimento</h3>

          {/* Progress bar - vagas vendidas */}
          <div className="max-w-sm mx-auto mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gold-500 font-semibold">18% vendido</span>
              <span className="text-slate-500">100 vagas</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5">
              <div className="bg-gold-500 h-2.5 rounded-full" style={{ width: '18%' }}></div>
            </div>
          </div>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">
            O valor real de tudo isso (Workshop + Bônus) passa de <span className="line-through decoration-red-500 decoration-2">R$ 1.500</span>.
            Mas para criar uma barreira de entrada baixa, seu investimento hoje é:
          </p>

          <div className="flex flex-col items-center justify-center mb-4">
             <div className="text-6xl sm:text-8xl font-black text-white tracking-tighter drop-shadow-lg">
               R$ 47
             </div>
             <div className="text-slate-500 text-sm mt-2 font-medium bg-slate-900 px-4 py-1 rounded-full border border-slate-800">
               (Menos que um Uber ou um almoço no shopping)
             </div>
          </div>

          <a 
             href="https://links.viverdeblog.com/workshop-viver-de-news-17-01-2026"
             target="_blank"
             rel="noopener noreferrer"
             className="w-full sm:w-auto min-w-[300px] bg-green-500 hover:bg-green-400 text-white font-bold py-5 px-8 rounded-xl text-xl shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] transition-all transform hover:scale-105 mb-8 inline-flex justify-center items-center"
          >
            QUERO MINERAR OURO POR R$ 47
          </a>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-8 mt-4">
             <div className="flex items-center justify-center gap-2">
               <ShieldCheck className="w-5 h-5 text-gold-500" />
               <span>Garantia de 7 dias Incondicional</span>
             </div>
             <div className="flex items-center justify-center gap-2">
               <Clock className="w-5 h-5 text-gold-500" />
               <span>Garantia "1ª Hora" Condicional</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
