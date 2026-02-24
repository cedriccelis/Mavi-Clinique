import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-serif text-white tracking-wide uppercase">{BRAND.name}</h3>
            <p className="text-sm font-light leading-relaxed text-stone-400 max-w-xs">
              {BRAND.tagline}<br />
              Strategische huidverbetering voor vrouwen 30+.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-widest text-white">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-stone-400">
              <li>{BRAND.contact.email}</li>
              <li>{BRAND.contact.phone}</li>
              <li>{BRAND.contact.address.split(',')[0]}</li>
              <li>{BRAND.contact.address.split(',')[1].trim()}</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-widest text-white">Consults</h4>
            <ul className="space-y-4 text-sm font-light text-stone-400">
              <li className="flex justify-between">
                <span>Maandag - Vrijdag</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Zaterdag</span>
                <span>Op afspraak</span>
              </li>
              <li className="flex justify-between">
                <span>Zondag</span>
                <span>Gesloten</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-widest text-white">Explore</h4>
            <ul className="space-y-4 text-sm font-light text-stone-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Over Mavi</Link></li>
              <li><Link to="/beauty" className="hover:text-white transition-colors">Beauty Services (Nagels, Brows)</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs font-light text-stone-500">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
