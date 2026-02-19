import React from 'react';
import { motion } from 'motion/react';
import { Star, User } from 'lucide-react';

const reviews = [
  {
    name: "CEO, Teknologiselskap",
    quote: "Vi tok tre beslutninger vi hadde utsatt i måneder – på to uker.",
    rating: 5
  },
  {
    name: "Kommersiell Leder, Retail",
    quote: "Endelig stoppet vi ting som ikke ga avkastning, og frigjorde kapasitet.",
    rating: 5
  },
  {
    name: "Styreleder, SMB",
    quote: "Styremøtene ble enklere – vi kom med klare valg og en realistisk plan.",
    rating: 5
  },
  {
    name: "Markedsdirektør, Finans",
    quote: "Veldig verdifullt å få en nøytral part inn som tør å stille de dumme spørsmålene.",
    rating: 5
  }
];

const ReviewsPage = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Hva sier kundene?
        </motion.h1>
        <p className="text-xl text-[#cccccc] max-w-2xl mx-auto">
          Vårt mål er alltid å levere verdi fra dag én. Her er noen tilbakemeldinger.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#1a1a1a] p-10 border border-[#333333] rounded-sm hover:border-[#d4af37] transition-all group"
          >
            <div className="flex text-[#d4af37] mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className="mr-1" />
              ))}
            </div>
            <p className="text-xl md:text-2xl font-serif italic text-[#e0e0e0] mb-8 leading-relaxed">
              "{review.quote}"
            </p>
            <div className="flex items-center mt-auto">
              <div className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center mr-4 group-hover:bg-[#d4af37] transition-colors">
                <User size={20} className="text-[#cccccc] group-hover:text-black" />
              </div>
              <span className="font-bold text-[#cccccc] text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                {review.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-24">
         <p className="text-[#666666] italic mb-8">Flere referanser tilgjengelig på forespørsel.</p>
         <a href="/kontakt" className="inline-block border-b border-[#d4af37] text-[#d4af37] hover:text-[#f0e68c] transition-colors pb-1">Kontakt oss for referanser</a>
      </div>
    </div>
  );
};

export default ReviewsPage;
