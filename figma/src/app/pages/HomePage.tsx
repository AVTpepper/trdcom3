import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Images
const heroImage = "https://images.unsplash.com/photo-1761437855598-a84c2849dc6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdvbGQlMjBsaW5lcyUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzEzNTgyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const meetingImage = "https://images.unsplash.com/photo-1764255120215-9bb4665b44cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBkYXJrJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzEzNjY5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const services = [
  {
    title: "KOMMERSIELL BESLUTNINGSSPRINT",
    desc: "Når retning eller gjennomføring er uklar. På 2–4 uker lander vi valg, risiko/antakelser og en 90-dagers plan – klar for leder/styre.",
    features: ["Prioritert portefølje (3–5 satsinger)", "Beslutningslogg & risiko", "90-dagers plan med eiere"],
    link: "/tjenester/beslutningssprint"
  },
  {
    title: "KOMMÆRSJ FOR HIRE",
    desc: "Interim kommersiell ledelse. Når det virkelig gjelder: få inn et senior ressurs som driver fra strategi til leveranse.",
    features: ["Senior ressurs on-demand", "Strategi til leveranse", "Kritiske endringer/skalering"],
    link: "/tjenester/hire"
  },
  {
    title: "EXECUTIVE SPARRING",
    desc: "Fortrolig sparring for ledere som vil ta bedre beslutninger og få mindre støy i hverdagen. 1–2 økter/mnd.",
    features: ["1–2 økter per måned", "Fokus på prioritering", "Raskere beslutninger"],
    link: "/tjenester/sparring"
  },
  {
    title: "ENTERPRISE SALG – SOM TJENESTE",
    desc: "Skal dere selge til store kunder, men mangler kapasitet, nettverk eller metode? Vi gjør salget for dere.",
    features: ["Posisjonering & møtebooking", "Forhandling & signering", "Lav fastpris + suksesshonorar"],
    link: "/tjenester/enterprise-salg"
  }
];

const processSteps = [
  { step: "1", title: "Diagnose", desc: "Rask innsikt i pipeline, kunder og enhetsøkonomi" },
  { step: "2", title: "Prioritering", desc: "Tydelige valg/ikke-valg og risiko/antakelser" },
  { step: "3", title: "Plan", desc: "90 dager med eiere, milepæler og styringsrytme" },
  { step: "4", title: "Momentum", desc: "Ukentlig takt, beslutningslogg og læring" },
];

const testimonials = [
  "Vi tok tre beslutninger vi hadde utsatt i måneder – på to uker.",
  "Endelig stoppet vi ting som ikke ga avkastning, og frigjorde kapasitet.",
  "Styremøtene ble enklere – vi kom med klare valg og en realistisk plan."
];

const faq = [
  { q: "Hvor fort kan dere starte?", a: "Som regel 1–2 uker. Hastesaker: ring, så prøver vi å rydde plass." },
  { q: "Garanterer dere resultater?", a: "Vi garanterer stram prosess, tydelige leveranser og momentum. Resultater kommer når dette kobles med deres eierskap og gjennomføring." },
  { q: "Må vi ha ferdig strategi?", a: "Nei. Vi starter med de beslutningene som låser opp mest verdi nå." }
];

const HomePage = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <ImageWithFallback src={heroImage} alt="Abstract Gold Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#d4af37] text-lg font-bold tracking-[0.2em] mb-4 uppercase">Sprinten</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Mindre prat,<br />mer fart.
            </h1>
            <p className="text-xl md:text-2xl text-[#cccccc] max-w-2xl mx-auto mb-10 font-light">
              Vi gjør prioriteringene tydelige, kutter støy og setter en enkel rytme som holder trykket oppe.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                to="/kontakt"
                className="px-8 py-4 bg-[#d4af37] text-black text-lg font-bold rounded-sm hover:bg-[#f0e68c] transition-all transform hover:-translate-y-1"
              >
                BOOK STRATEGISAMTALE
              </Link>
              <Link 
                to="/tjenester"
                className="px-8 py-4 border border-[#d4af37] text-[#d4af37] text-lg font-bold rounded-sm hover:bg-[#d4af37]/10 transition-all"
              >
                SE TJENESTER
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-wide">HVORFOR VELGER KUNDER OSS?</h2>
            <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Beslutninger først", desc: "Vi forankrer valg hos de som faktisk må leve med dem." },
              { title: "Gjør det ordentlig", desc: "Vi foreslår færre tiltak, men de som flytter tall. Eller ikke i det hele tatt." },
              { title: "Du får resultater", desc: "3–5 prioriterte satsinger med klare ja/nei-kriterier. Synliggjort risiko og hva vi tester først." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-[#333333] bg-[#1a1a1a] rounded-sm hover:border-[#d4af37]/50 transition-colors group"
              >
                <div className="w-12 h-12 mb-6 bg-[#333333] group-hover:bg-[#d4af37] transition-colors rounded-sm flex items-center justify-center">
                   <Check className="text-[#d4af37] group-hover:text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors">{item.title}</h3>
                <p className="text-[#cccccc] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#1a1a1a] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-[#d4af37] font-bold tracking-widest mb-2 uppercase text-sm">VÅRE TJENESTER</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Det vi tilbyr</h3>
            </div>
            <Link to="/tjenester" className="hidden md:flex items-center text-[#d4af37] font-bold hover:text-[#f0e68c] transition-colors group">
              SE ALLE TJENESTER <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0a0a0a] border border-[#333333] p-8 rounded-sm hover:border-[#d4af37] transition-all group cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                <p className="text-[#cccccc] mb-6 min-h-[48px]">{service.desc}</p>
                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-[#888888]">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="text-[#d4af37] font-bold text-sm tracking-wide uppercase group-hover:underline">
                  Les mer &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link to="/tjenester" className="inline-flex items-center text-[#d4af37] font-bold">
              SE ALLE TJENESTER <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">SLIK JOBBER VI</h2>
            <p className="text-[#cccccc]">Enkelt og effektivt.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-8xl font-black text-[#1a1a1a] absolute -top-10 -left-4 z-0 opacity-50 select-none">
                  {step.step}
                </div>
                <div className="relative z-10 pt-4 pl-4">
                  <h3 className="text-xl font-bold mb-2 text-[#d4af37]">{step.title}</h3>
                  <p className="text-[#cccccc] text-sm leading-relaxed">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#333333] to-transparent translate-x-1/2 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[#d4af37] font-bold tracking-widest mb-12 uppercase text-sm">HVA KUNDENE OPPLEVER</h2>
          
          <div className="grid gap-8">
            {testimonials.map((quote, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0a] p-8 border border-[#333333] relative italic text-lg md:text-xl text-[#e0e0e0]"
              >
                <span className="text-[#d4af37] text-6xl absolute top-4 left-4 opacity-20 font-serif">"</span>
                {quote}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-[#666666] text-sm">
            (Referanser/case på forespørsel)
          </div>
        </div>
      </section>

      {/* Checklist / Is this for us? */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <ImageWithFallback 
              src={meetingImage} 
              alt="Strategy Meeting" 
              className="rounded-sm shadow-2xl shadow-[#d4af37]/10 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">PASSER DETTE FOR OSS?</h2>
            <div className="space-y-6">
              {[
                "Dere har mange initiativer, men lite fokus",
                "Strategi finnes, men gjennomføringen halter",
                "Dere skal inn i nye markeder/kunder og må levere raskt",
                "Dere vil ha ærlig sparring og et team som faktisk får ting gjort"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-black" />
                  </div>
                  <p className="text-lg text-[#cccccc]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">OFTE STILTE SPØRSMÅL</h2>
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <div key={idx} className="border border-[#333333] bg-[#0a0a0a] rounded-sm overflow-hidden">
                <details className="group p-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-lg list-none text-white group-hover:text-[#d4af37] transition-colors">
                    <span>{item.q}</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown />
                    </span>
                  </summary>
                  <div className="text-[#cccccc] mt-4 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-[#d4af37] text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Klar for mer fart?</h2>
          <p className="text-xl mb-10 font-medium">Book en uforpliktende strategisamtale (30 min)</p>
          <Link 
            to="/kontakt"
            className="inline-block px-10 py-5 bg-black text-white text-lg font-bold rounded-sm hover:bg-[#333333] transition-all transform hover:-translate-y-1 shadow-lg"
          >
            KONTAKT OSS NÅ
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
