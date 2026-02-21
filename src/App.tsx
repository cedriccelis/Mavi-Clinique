/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { System } from './components/System';
import { TargetAudience } from './components/TargetAudience';
import { Method } from './components/Method';
import { Positioning } from './components/Positioning';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-stone-900 selection:text-white">
      <Hero />
      <Authority />
      <System />
      <TargetAudience />
      <Method />
      <Positioning />
      <Footer />
    </div>
  );
}
