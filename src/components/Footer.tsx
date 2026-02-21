import React from 'react';

export function Footer() {
  return (
    <footer className="bg-mavi-depth text-mavi-primary/80 py-24 border-t border-mavi-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-serif text-mavi-primary tracking-wide">MAVI CLINIQUE</h3>
            <p className="text-sm font-light leading-relaxed text-mavi-primary/60 max-w-xs">
              Luxury Lift & Glow Clinic.<br />
              Strategische huidverbetering voor vrouwen 30+.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-widest text-mavi-primary">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-mavi-primary/60">
              <li>info@maviclinique.be</li>
              <li>+32 (0)3 123 45 67</li>
              <li>Bredabaan 123</li>
              <li>2930 Brasschaat</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-widest text-mavi-primary">Consults</h4>
            <ul className="space-y-4 text-sm font-light text-mavi-primary/60">
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
            <h4 className="text-xs font-medium uppercase tracking-widest text-mavi-primary">Socials</h4>
            <ul className="space-y-4 text-sm font-light text-mavi-primary/60">
              <li><a href="#" className="hover:text-mavi-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-mavi-accent transition-colors">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-mavi-primary/10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-mavi-primary/50">
          <p>&copy; {new Date().getFullYear()} Mavi Clinique Brasschaat. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-mavi-accent transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-mavi-accent transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
