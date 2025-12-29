import React from 'react';
import { MENTORS } from '../constants';

const Mentors: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Quem são seus mentores?</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {MENTORS.map((mentor, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold-500/30 mb-6 shadow-xl">
                <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
              <p className="text-gold-500 text-sm font-semibold uppercase tracking-wide mb-4">{mentor.role}</p>
              <p className="text-slate-400 leading-relaxed">
                {mentor.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
