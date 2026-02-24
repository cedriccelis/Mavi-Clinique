/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { Problem } from './components/Problem';
import { System } from './components/System';
import { TargetAudience } from './components/TargetAudience';
import { Method } from './components/Method';
import { FAQ } from './components/FAQ';
import { Positioning } from './components/Positioning';
import { Footer } from './components/Footer';
import { Consult } from './pages/Consult';
import { ContourProtocol } from './pages/ContourProtocol';
import { CollagenProtocol } from './pages/CollagenProtocol';
import { MaintenanceProtocol } from './pages/MaintenanceProtocol';
import { StructuralRenewalProgram } from './pages/StructuralRenewalProgram';
import { LaserProgram } from './pages/LaserProgram';
import { SkinAnalysis } from './pages/SkinAnalysis';
import { BeautyServices } from './pages/BeautyServices';
import { Manicure } from './pages/Manicure';
import { Pedicure } from './pages/Pedicure';
import { Brows } from './pages/Brows';
import { Waxing } from './pages/Waxing';
import { LEDTherapy } from './pages/LEDTherapy';
import { Dermaplaning } from './pages/Dermaplaning';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  useEffect(() => {
    console.log('Event: view_home');
  }, []);

  return (
    <>
      <Hero />
      <Authority />
      <Problem />
      <System />
      <Method />
      <TargetAudience />
      <FAQ />
      <Positioning />
      <Footer />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const isConsultPage = location.pathname === '/consult';

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-stone-900 selection:text-white">
      {!isConsultPage && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/protocols/contour" element={<ContourProtocol />} />
        <Route path="/protocols/collagen" element={<CollagenProtocol />} />
        <Route path="/protocols/maintenance" element={<MaintenanceProtocol />} />
        <Route path="/protocols/renewal" element={<StructuralRenewalProgram />} />
        <Route path="/protocols/led" element={<LEDTherapy />} />
        <Route path="/protocols/dermaplaning" element={<Dermaplaning />} />
        <Route path="/laser" element={<LaserProgram />} />
        <Route path="/analysis" element={<SkinAnalysis />} />
        <Route path="/beauty" element={<BeautyServices />} />
        <Route path="/beauty/manicure" element={<Manicure />} />
        <Route path="/beauty/pedicure" element={<Pedicure />} />
        <Route path="/beauty/brows" element={<Brows />} />
        <Route path="/beauty/waxing" element={<Waxing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
