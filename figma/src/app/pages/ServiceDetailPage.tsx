import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Clock, Calendar, Users, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white">
        <h1 className="text-4xl font-bold mb-4">Tjeneste ikke funnet</h1>
        <Link to="/tjenester" className="text-[#d4af37] underline">Tilbake til oversikt</Link>
      </div>
    );
  }

  const icons = [Clock, Calendar, Users, Target];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <Link to="/tjenester" className="inline-flex items-center text-[#cccccc] hover:text-[#d4af37] mb-8 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Tilbake til tjenester
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-sm font-bold tracking-wider uppercase rounded-full mb-6">
            {service.duration}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#cccccc] font-light leading-relaxed">
            {service.shortDesc}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Description */}
            <div className="prose prose-invert prose-lg text-[#cccccc]">
              <p>{service.fullDesc}</p>
            </div>

            {/* What You Get */}
            <div className="bg-[#1a1a1a] p-8 border-l-4 border-[#d4af37] rounded-r-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Hva du får:</h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-[#d4af37] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-lg text-[#e0e0e0]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process / How It Works (Generic for now, or specific if data had it) */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Slik jobber vi</h3>
              <div className="relative border-l border-[#333333] pl-8 space-y-8 ml-4">
                {[
                  "Kartlegging og forankring",
                  "Gjennomføring og workshops",
                  "Leveranse og veien videre"
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-1 w-6 h-6 bg-[#0a0a0a] border-2 border-[#d4af37] rounded-full flex items-center justify-center text-xs font-bold text-[#d4af37]">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-lg mb-2 text-white">{step}</h4>
                    <p className="text-[#cccccc] text-sm">Vi sikrer at prosessen er effektiv og tilpasset deres behov.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: CTA & Summary */}
          <div className="md:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-[#333333]">
                <h3 className="font-bold text-lg mb-4 text-[#d4af37] uppercase tracking-wider">Oppsummering</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-sm text-[#cccccc]">
                    <Clock size={16} className="mr-3 text-[#d4af37]" />
                    {service.duration}
                  </li>
                  <li className="flex items-center text-sm text-[#cccccc]">
                    <Target size={16} className="mr-3 text-[#d4af37]" />
                    Resultatfokusert
                  </li>
                  <li className="flex items-center text-sm text-[#cccccc]">
                    <Users size={16} className="mr-3 text-[#d4af37]" />
                    Tett oppfølging
                  </li>
                </ul>
                <Link 
                  to="/kontakt"
                  className="block w-full text-center py-4 bg-[#d4af37] text-black font-bold text-sm uppercase tracking-wide rounded-sm hover:bg-[#f0e68c] transition-colors"
                >
                  Book Strategisamtale
                </Link>
                <p className="text-xs text-center text-[#666666] mt-4">
                  Uforpliktende 30 min samtale
                </p>
              </div>

              {/* Testimonial Placeholder */}
              <div className="bg-[#0a0a0a] p-6 border border-[#333333] rounded-sm italic text-[#cccccc] text-sm">
                "Vi så resultater allerede etter første uke. Anbefales på det sterkeste."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
