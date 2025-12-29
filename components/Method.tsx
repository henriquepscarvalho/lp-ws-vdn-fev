import React from 'react';
import { STEPS } from '../constants';

const Method: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">O Que Você Vai Aprender</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            O <strong>Workshop Viver de News</strong> não é um curso teórico. É uma sessão de implementação AO VIVO. 
            Você vai sair com o <span className="text-gold-400">PLANO MESTRE COMPLETO</span> dividido em 6 Etapas:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div key={step.id} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-gold-500/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 border border-slate-700 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-colors">
                <step.icon className="w-6 h-6 text-slate-300 group-hover:text-gold-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                <span className="text-gold-500 mr-2">ETAPA {step.id}:</span>
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
