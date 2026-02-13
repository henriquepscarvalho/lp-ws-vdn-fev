import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 bg-black text-center border-t border-slate-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          O Grande Garimpo abre dia 28 de Fevereiro.
        </h2>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-8 text-left inline-block">
          <p className="text-slate-400 mb-4 font-medium">Você tem duas opções:</p>
          <ul className="space-y-3">
            <li className="flex gap-2 text-slate-300">
              <span className="text-red-500">1.</span> Continuar catando areia nas redes sociais e dependendo da sorte.
            </li>
            <li className="flex gap-2 text-white font-bold">
              <span className="text-green-500">2.</span> Investir R$ 47 e construir sua própria mina de ouro.
            </li>
          </ul>
        </div>

        <p className="text-red-500 font-semibold mb-8 animate-pulse">
          Restam poucas vagas. O Zoom tem limite técnico de 100 pessoas.
        </p>

        <a 
          href="https://links.viverdeblog.com/workshop-viver-de-news-17-01-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 px-10 rounded-xl text-lg flex items-center justify-center gap-2 mx-auto transition-transform hover:scale-105 w-fit"
        >
          GARANTIR MINHA VAGA AGORA
          <ArrowRight className="w-5 h-5" />
        </a>

        <div className="mt-16 pt-8 border-t border-slate-900 text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Viver de News. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
