import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
        
        {/* Info Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-5xl font-bold mb-6">Ta kontakt</h1>
            <p className="text-xl text-[#cccccc] max-w-lg mb-8">
              Klar for å øke farten? Vi starter gjerne med en uforpliktende prat.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333333] flex items-center justify-center mr-6 rounded-sm flex-shrink-0 group hover:border-[#d4af37] transition-colors">
                <Mail className="text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">E-post</h3>
                <a href="mailto:jonas.lounissi@gmail.com" className="text-[#cccccc] hover:text-[#d4af37] transition-colors">jonas.lounissi@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333333] flex items-center justify-center mr-6 rounded-sm flex-shrink-0 group hover:border-[#d4af37] transition-colors">
                <Phone className="text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Telefon</h3>
                <a href="tel:+4797004484" className="text-[#cccccc] hover:text-[#d4af37] transition-colors">+47 970 04 484</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333333] flex items-center justify-center mr-6 rounded-sm flex-shrink-0 group hover:border-[#d4af37] transition-colors">
                <MapPin className="text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Lokasjon</h3>
                <p className="text-[#cccccc]">Thomas von Westens gate 8,<br />Trondheim</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="w-full h-64 bg-[#1a1a1a] rounded-sm border border-[#333333] flex items-center justify-center relative overflow-hidden group">
               {/* Map Placeholder */}
               <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Trondheim&zoom=13&size=600x300&key=YOUR_API_KEY')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
               <span className="relative z-10 text-[#d4af37] font-bold tracking-widest uppercase text-sm border border-[#d4af37] px-4 py-2 bg-black/50 backdrop-blur-sm">
                 Kart kommer
               </span>
            </div>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1a1a1a] p-8 md:p-12 rounded-sm border border-[#333333]"
        >
          <h2 className="text-2xl font-bold mb-8 text-[#d4af37]">Send oss en melding</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-[#cccccc] uppercase tracking-wide">Navn</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#0a0a0a] border border-[#333333] text-white p-4 rounded-sm focus:border-[#d4af37] focus:outline-none transition-colors"
                  placeholder="Ditt navn"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-[#cccccc] uppercase tracking-wide">Telefon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-[#0a0a0a] border border-[#333333] text-white p-4 rounded-sm focus:border-[#d4af37] focus:outline-none transition-colors"
                  placeholder="+47 ..."
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-[#cccccc] uppercase tracking-wide">E-post</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-[#0a0a0a] border border-[#333333] text-white p-4 rounded-sm focus:border-[#d4af37] focus:outline-none transition-colors"
                placeholder="din@epost.no"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-[#cccccc] uppercase tracking-wide">Melding</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-[#0a0a0a] border border-[#333333] text-white p-4 rounded-sm focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                placeholder="Hva kan vi hjelpe deg med?"
              />
            </div>

            <button 
              type="button" 
              className="w-full bg-[#d4af37] text-black font-bold text-lg py-4 rounded-sm hover:bg-[#f0e68c] transition-all transform hover:-translate-y-1 flex items-center justify-center shadow-lg"
            >
              SEND MELDING <Send size={18} className="ml-2" />
            </button>
            <p className="text-xs text-center text-[#666666] mt-4">
              Vi svarer vanligvis innen 24 timer.
            </p>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactPage;
