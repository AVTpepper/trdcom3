import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';

const officeImage = "https://images.unsplash.com/photo-1569242238748-53628560274c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MTM2NjkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const AboutPage = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-32">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Vi er beslutnings- og gjennomføringspartnere.
          </h1>
          <p className="text-xl text-[#cccccc] mb-8 font-light">
            Ikke "powerpoint-konsulenter". Vi skaper resultater gjennom handling.
          </p>
          <div className="flex items-center space-x-4">
            <div className="bg-[#1a1a1a] px-6 py-4 border-l-2 border-[#d4af37]">
              <span className="block text-2xl font-bold text-[#d4af37]">10+</span>
              <span className="text-sm text-[#cccccc]">År med erfaring</span>
            </div>
            <div className="bg-[#1a1a1a] px-6 py-4 border-l-2 border-[#d4af37]">
              <span className="block text-2xl font-bold text-[#d4af37]">50+</span>
              <span className="text-sm text-[#cccccc]">Prosjekter levert</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <ImageWithFallback 
            src={officeImage} 
            alt="Office Space" 
            className="rounded-sm shadow-2xl shadow-[#d4af37]/10" 
          />
          <div className="absolute -bottom-6 -left-6 bg-[#d4af37] p-8 rounded-sm shadow-lg hidden md:block">
            <p className="text-black font-bold text-lg">TRD Commercial Hub</p>
            <p className="text-black/80 text-sm">Trondheim, Norge</p>
          </div>
        </motion.div>
      </div>

      {/* Philosophy */}
      <div className="bg-[#1a1a1a] py-24 border-y border-[#333333]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Vår Filosofi</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Pragmatisk", desc: "Vi fokuserer på det som fungerer, ikke teorier." },
              { title: "Rask", desc: "Tid er penger. Vi kutter unødvendig byråkrati." },
              { title: "Ærlig", desc: "Vi sier det som det er, selv når det er ubehagelig." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0a0a0a] p-8 rounded-sm border border-[#333333]">
                <CheckCircle className="mx-auto text-[#d4af37] mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#cccccc]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team / Background */}
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Hvem er vi?</h2>
          <p className="text-lg text-[#cccccc] leading-relaxed mb-12">
            Kommærsj er bygget på en kombinasjon av MBA-bakgrunn, CEO-erfaring og tung kommersiell ledererfaring. 
            Vi vet hvordan det er å sitte med ansvaret, og vi vet hva som skal til for å lykkes.
          </p>
          <p className="text-lg text-[#cccccc] leading-relaxed">
            Vi jobber tett med ledergruppen din og gjør det enkelt å ta gode valg – og holde tempoet oppe gjennom hele prosessen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
