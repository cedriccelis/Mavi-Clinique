import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BRAND } from '../constants/brand';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [protocolsOpen, setProtocolsOpen] = useState(false);
  const [beautyOpen, setBeautyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProtocolsOpen(false);
    setBeautyOpen(false);
  }, [location]);

  const skinPrograms = [
    { name: 'Contour Protocol', path: '/protocols/contour' },
    { name: 'Collagen Reset', path: '/protocols/collagen' },
    { name: 'Structural Renewal', path: '/protocols/renewal' },
    { name: 'Maintenance Plan', path: '/protocols/maintenance' },
    { name: 'LED Therapy', path: '/protocols/led' },
    { name: 'Dermaplaning', path: '/protocols/dermaplaning' },
  ];

  const beautyServices = [
    { name: 'Manicure & Gelnagels', path: '/beauty/manicure' },
    { name: 'Pedicure', path: '/beauty/pedicure' },
    { name: 'Brows', path: '/beauty/brows' },
    { name: 'Waxing', path: '/beauty/waxing' },
  ];

  const mainLinks = [
    { name: 'Skin Analysis', path: '/analysis' },
    { name: 'Laser Program', path: '/laser' },
  ];

  const secondaryLinks = [
    { name: 'Over Mavi', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif tracking-wide text-stone-900 shrink-0 mr-8">
            {BRAND.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-6 flex-1 justify-center">
            {/* Skin Programs Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center text-[11px] uppercase tracking-widest font-medium transition-colors py-2 ${
                  isScrolled ? 'text-stone-900' : 'text-stone-800 hover:text-stone-500'
                }`}
              >
                Skin Programs <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 mt-0 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="bg-white border border-stone-200 shadow-xl py-2">
                  {skinPrograms.map((p) => (
                    <Link 
                      key={p.name} 
                      to={p.path}
                      className="block px-6 py-3 text-[11px] uppercase tracking-widest text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Links */}
            {mainLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-[11px] uppercase tracking-widest font-medium transition-colors ${
                  isScrolled ? 'text-stone-900' : 'text-stone-800 hover:text-stone-500'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Beauty Services Dropdown (Subtler) */}
            <div className="relative group">
              <button 
                className={`flex items-center text-[10px] uppercase tracking-widest transition-colors py-2 ${
                  isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Beauty Services <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 mt-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="bg-white border border-stone-200 shadow-xl py-2">
                  {beautyServices.map((p) => (
                    <Link 
                      key={p.name} 
                      to={p.path}
                      className="block px-6 py-3 text-[10px] uppercase tracking-widest text-stone-500 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary Links */}
            {secondaryLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-[11px] uppercase tracking-widest transition-colors ${
                  isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:block shrink-0 ml-8">
            <Link 
              to="/consult"
              className={`inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
                isScrolled 
                  ? 'bg-stone-900 text-white hover:bg-stone-800' 
                  : 'bg-stone-900 text-white hover:bg-stone-800 shadow-lg shadow-[#E8DDD4]/20'
              }`}
            >
              {BRAND.cta.main}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden p-2 -mr-2 text-stone-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-stone-100">
              <Link to="/" className="text-2xl font-serif tracking-wide text-stone-900" onClick={() => setMobileMenuOpen(false)}>
                {BRAND.name}
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 -mr-2 text-stone-900">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6">
              <div className="space-y-6">
                {/* Skin Programs */}
                <div>
                  <button 
                    onClick={() => setProtocolsOpen(!protocolsOpen)}
                    className="flex items-center justify-between w-full text-sm uppercase tracking-widest font-medium text-stone-900 py-2"
                  >
                    Skin Programs
                    <ChevronDown className={`w-5 h-5 transition-transform ${protocolsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {protocolsOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 pl-4 border-l border-stone-200 mt-2 space-y-4">
                          {skinPrograms.map((p) => (
                            <Link 
                              key={p.name} 
                              to={p.path}
                              className="block text-xs uppercase tracking-widest text-stone-600"
                            >
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Main Links */}
                {mainLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className="block text-sm uppercase tracking-widest font-medium text-stone-900 py-2"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Beauty Services */}
                <div>
                  <button 
                    onClick={() => setBeautyOpen(!beautyOpen)}
                    className="flex items-center justify-between w-full text-sm uppercase tracking-widest font-medium text-stone-600 py-2"
                  >
                    Beauty Services
                    <ChevronDown className={`w-5 h-5 transition-transform ${beautyOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {beautyOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 pl-4 border-l border-stone-200 mt-2 space-y-4">
                          {beautyServices.map((p) => (
                            <Link 
                              key={p.name} 
                              to={p.path}
                              className="block text-xs uppercase tracking-widest text-stone-500"
                            >
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Secondary Links */}
                {secondaryLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className="block text-sm uppercase tracking-widest text-stone-600 py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-stone-100 bg-stone-50">
              <Link 
                to="/consult"
                className="flex items-center justify-center w-full py-4 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium"
              >
                {BRAND.cta.main}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
