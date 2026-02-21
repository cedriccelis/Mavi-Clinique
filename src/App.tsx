/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-stone-900 selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consult" element={<Consult />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
