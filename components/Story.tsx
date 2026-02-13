import React from 'react';
import { XCircle, CheckCircle, Smartphone, Mail } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Mina de Ouro */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"><span className="text-gold-500">A Mina de Ouro Está Aberta</span></h2>
          <p className="text-slate-300 text-lg mb-8">
            Três forças raras se alinham agora para quem quer construir uma newsletter lucrativa:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
              <h3 className="text-white font-bold mb-2">1. Atenção Disponível</h3>
              <p className="text-slate-400 text-sm">As pessoas estão cansadas de algoritmos. E-mail é o canal mais direto para a atenção delas.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
              <h3 className="text-white font-bold mb-2">2. Mercado Aquecido</h3>
              <p className="text-slate-400 text-sm">Newsletters estão gerando milhões. O mercado cresce e ainda tem espaço para quem entra agora.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
              <h3 className="text-white font-bold mb-2">3. Concorrência Dormindo</h3>
              <p className="text-slate-400 text-sm">Enquanto eles "planejam", você constrói.</p>
            </div>
          </div>
        </div>

        {/* Maria vs Joao */}
        <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="w-96 h-96 bg-gold-500 rounded-full blur-[128px]"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 relative z-10">A História de Duas Realidades</h2>
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {/* Maria */}
                <div className="bg-slate-900/80 backdrop-blur border border-red-900/30 rounded-2xl p-8 relative overflow-hidden group hover:border-red-500/50 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Smartphone className="w-24 h-24 text-red-500" />
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                            <XCircle className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">"Maria"</h3>
                    </div>
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex gap-3">
                            <span className="text-red-500 font-bold">•</span>
                            <span>Tem <strong className="text-white">50 mil seguidores</strong> (Vaidade).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-red-500 font-bold">•</span>
                            <span>Trabalha <strong className="text-white">6 horas/dia</strong> criando Reels e Stories.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-red-500 font-bold">•</span>
                            <span>Alcance caiu para 2% (Algoritmo).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-red-500 font-bold">•</span>
                            <span>Fatura R$ 2.000/mês e vive ansiosa.</span>
                        </li>
                    </ul>
                    <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                        <span className="inline-block px-4 py-1 rounded bg-red-500/10 text-red-400 font-bold text-sm">CATAR AREIA (ALUGUEL)</span>
                    </div>
                </div>

                {/* Joao */}
                <div className="bg-slate-900/80 backdrop-blur border border-gold-500/30 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(234,179,8,0.05)] transform md:-translate-y-4 md:scale-105">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Mail className="w-24 h-24 text-gold-500" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
                    
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gold-500/10 rounded-lg">
                            <CheckCircle className="w-8 h-8 text-gold-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">"João"</h3>
                    </div>
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex gap-3">
                            <span className="text-gold-500 font-bold">•</span>
                            <span>Tem apenas <strong className="text-white">3 mil pessoas</strong> na lista.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-gold-500 font-bold">•</span>
                            <span>Trabalha <strong className="text-white">2 horas/semana</strong> escrevendo.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-gold-500 font-bold">•</span>
                            <span>E-mails chegam para 100% da lista.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-gold-500 font-bold">•</span>
                            <span>Fatura <strong className="text-white">R$ 15.000/mês</strong>.</span>
                        </li>
                    </ul>
                    <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                        <span className="inline-block px-4 py-1 rounded bg-gold-500/10 text-gold-400 font-bold text-sm">MINERAR OURO (PROPRIEDADE)</span>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <p className="text-xl text-white font-medium">A diferença não é talento. <span className="text-gold-500">A diferença é propriedade.</span></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
