import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowRight, Check } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Våre Tjenester
        </motion.h1>
        <p className="text-xl text-[#cccccc] max-w-2xl mx-auto">
          Fra strategi til gjennomføring. Vi hjelper deg å ta de riktige valgene og få ting gjort.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {services.map((service, idx) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
          >
            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold tracking-widest uppercase rounded-sm border border-[#d4af37]/20">
                {service.duration}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
              <p className="text-lg text-[#cccccc] leading-relaxed">
                {service.shortDesc}
              </p>
              
              <ul className="space-y-3 pt-4">
                {service.features.slice(0, 3).map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="text-[#d4af37] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-[#e0e0e0]">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link 
                  to={`/tjenester/${service.id}`}
                  className="inline-flex items-center text-white bg-[#1a1a1a] border border-[#333333] px-6 py-3 rounded-sm hover:border-[#d4af37] hover:text-[#d4af37] transition-all group"
                >
                  <span className="font-bold">LES MER OM DETTE</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </div>

            {/* Visual / Card Representation */}
            <div className="flex-1 w-full">
              <div className="bg-[#1a1a1a] border border-[#333333] p-8 md:p-12 rounded-sm h-full relative overflow-hidden group hover:border-[#d4af37]/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-[#d4af37] mb-6 border-b border-[#333333] pb-4 inline-block">Hva du får:</h3>
                   <ul className="space-y-4">
                     {service.features.map((feature, fIdx) => (
                       <li key={fIdx} className="text-[#cccccc] flex items-start">
                         <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 mr-3 flex-shrink-0" />
                         {feature}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl font-bold mb-8">Usikker på hva dere trenger?</h2>
        <Link 
          to="/kontakt"
          className="px-8 py-4 bg-[#d4af37] text-black font-bold text-lg rounded-sm hover:bg-[#f0e68c] transition-colors"
        >
          TA EN PRAT MED OSS
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
