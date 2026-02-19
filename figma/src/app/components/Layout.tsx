import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Hjem', path: '/' },
    { name: 'Tjenester', path: '/tjenester' },
    { name: 'Om Oss', path: '/om-oss' },
    { name: 'Anmeldelser', path: '/anmeldelser' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-[#d4af37] flex items-center justify-center rounded-sm group-hover:bg-[#f0e68c] transition-colors duration-300">
                <span className="text-black font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-wider text-white group-hover:text-[#d4af37] transition-colors">KOMMÆRSJ</span>
                <span className="text-[10px] text-[#cccccc] tracking-widest uppercase">TRD Commercial Hub</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#d4af37] ${
                    location.pathname === link.path ? 'text-[#d4af37]' : 'text-[#cccccc]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/kontakt"
                className="px-5 py-2.5 bg-[#d4af37] text-black text-sm font-bold tracking-wide rounded-sm hover:bg-[#f0e68c] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                BOOK MØTE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-[#d4af37] focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#1a1a1a] border-b border-[#333333] overflow-hidden"
            >
              <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-medium block py-2 border-b border-[#2a2a2a] ${
                      location.pathname === link.path ? 'text-[#d4af37]' : 'text-[#cccccc]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/kontakt"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 w-full text-center px-5 py-3 bg-[#d4af37] text-black font-bold rounded-sm hover:bg-[#f0e68c]"
                >
                  BOOK STRATEGISAMTALE
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#333333] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-[#d4af37] flex items-center justify-center rounded-sm">
                  <span className="text-black font-bold text-lg">K</span>
                </div>
                <span className="font-bold text-lg text-white">KOMMÆRSJ</span>
              </div>
              <p className="text-[#cccccc] text-sm leading-relaxed mb-6">
                Vi brenner for å utløse det uforløste kommersielle potensialet i Norge og omegn. Kommersiell suksess gjennom praktisk trening og spisskompetanse.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#cccccc] hover:text-[#d4af37] transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-[#cccccc] hover:text-[#d4af37] transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-[#cccccc] hover:text-[#d4af37] transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 tracking-wide">TJENESTER</h3>
              <ul className="space-y-3">
                <li><Link to="/tjenester" className="text-[#cccccc] hover:text-[#d4af37] text-sm transition-colors">Beslutningssprint</Link></li>
                <li><Link to="/tjenester" className="text-[#cccccc] hover:text-[#d4af37] text-sm transition-colors">Kommærsj for Hire</Link></li>
                <li><Link to="/tjenester" className="text-[#cccccc] hover:text-[#d4af37] text-sm transition-colors">Executive Sparring</Link></li>
                <li><Link to="/tjenester" className="text-[#cccccc] hover:text-[#d4af37] text-sm transition-colors">Enterprise Salg</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 tracking-wide">SELSKAP</h3>
              <ul className="space-y-3">
                <li><Link to="/om-oss" className="text-[#cccccc] hover:text-[#d4af37] text-sm transition-colors">Om Oss</Link></li>
                <li><Link to="/anmeldelser" className="text-[#cccccc] hover:text-[#d4af37] text-sm transition-colors">Anmeldelser</Link></li>
                <li><Link to="/kontakt" className="text-[#cccccc] hover:text-[#d4af37] text-sm transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 tracking-wide">KONTAKT</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Mail size={18} className="text-[#d4af37] mt-0.5" />
                  <span className="text-[#cccccc] text-sm">jonas.lounissi@gmail.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone size={18} className="text-[#d4af37] mt-0.5" />
                  <span className="text-[#cccccc] text-sm">+47 970 04 484</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-[#d4af37] mt-0.5" />
                  <span className="text-[#cccccc] text-sm">Thomas von Westens gate 8,<br />Trondheim</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#666666] text-xs">
              © 2025 Kommærsj – TRD Commercial Hub. Alle rettigheter reservert.
            </p>
            <p className="text-[#666666] text-xs mt-2 md:mt-0">
              Spisskompetanse for kommersiell suksess.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
