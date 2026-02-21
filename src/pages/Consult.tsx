import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND } from '../constants/brand';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';

const questions = [
  {
    id: 'age',
    title: 'In welke leeftijdscategorie val je?',
    options: ['30–35', '35–45', '45–55', '55+']
  },
  {
    id: 'goal',
    title: 'Wat is je primaire doel?',
    options: ['Kaaklijn / Onderkin / Hals', 'Textuur / Fijne lijntjes', 'Glow / Onderhoud', 'Weet ik niet zeker, ik wil advies']
  },
  {
    id: 'timeline',
    title: 'Wat is je tijdlijn?',
    options: ['Specifiek event binnenkort', 'Binnen 3 maanden', 'Lange termijn opbouw']
  },
  {
    id: 'experience',
    title: 'Heb je ervaring met klinische huidverbetering?',
    options: ['Nee, dit is mijn eerste keer', 'Ja, ik heb al behandelingen gehad']
  },
  {
    id: 'medical',
    title: 'Zijn er medische bijzonderheden?',
    subtitle: 'Bijv. zwangerschap, pacemaker, roaccutane',
    options: ['Nee', 'Ja (bespreken we tijdens het consult)']
  },
  {
    id: 'budget',
    title: 'Hoe sta je tegenover investeren in je huid?',
    options: ['Ik wil een strategisch plan / traject', 'Ik zoek een eenmalige, voordelige behandeling']
  }
];

export function Consult() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    console.log('Event: start_consult_form');
  }, []);

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: option });
    
    // Track event (mock)
    console.log(`Event: form_step_${currentStep + 1}_completed`);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track event (mock)
    console.log('Event: submit_consult_form', answers);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 shadow-xl shadow-stone-200/50 border border-stone-100"
        >
          <div className="w-16 h-16 bg-[#E8DDD4] rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8 text-stone-900" />
          </div>
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Aanvraag Ontvangen</h2>
          <p className="text-stone-600 font-light mb-8">
            Bedankt voor je interesse. We hebben je antwoorden ontvangen en bereiden je Skin Strategy Consult voor.
          </p>
          <div className="space-y-4">
            <button 
              onClick={() => console.log('Event: click_booking')}
              className="w-full py-4 bg-stone-900 text-white text-sm uppercase tracking-widest hover:bg-stone-800 transition-colors"
            >
              Kies je moment in de agenda
            </button>
            <a 
              href="https://wa.me/32400000000" 
              target="_blank" 
              rel="noreferrer"
              onClick={() => console.log('Event: click_whatsapp')}
              className="block w-full py-4 bg-transparent border border-stone-200 text-stone-900 text-sm uppercase tracking-widest hover:bg-stone-50 transition-colors"
            >
              Contact via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentStep];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header */}
      <header className="py-8 px-6 border-b border-stone-200 bg-white">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-serif tracking-wide text-stone-900">{BRAND.name}</a>
          <div className="text-xs uppercase tracking-widest text-stone-400 font-medium">
            Stap {currentStep + 1} van {questions.length + 1}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-stone-200">
        <motion.div 
          className="h-full bg-stone-900"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep) / (questions.length)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            {currentStep < questions.length ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-2">{question.title}</h1>
                {question.subtitle && (
                  <p className="text-stone-500 font-light mb-8">{question.subtitle}</p>
                )}
                <div className="space-y-3 mt-8">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={`w-full text-left p-6 border transition-all duration-200 flex justify-between items-center group
                        ${answers[question.id] === option 
                          ? 'border-stone-900 bg-stone-900 text-white' 
                          : 'border-stone-200 bg-white text-stone-600 hover:border-stone-400'
                        }`}
                    >
                      <span className="font-light">{option}</span>
                      {answers[question.id] === option && <Check className="w-5 h-5" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8">Laatste stap</h1>
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 border border-stone-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Voornaam</label>
                      <input required type="text" className="w-full p-4 border border-stone-200 bg-stone-50 focus:outline-none focus:border-stone-900 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Achternaam</label>
                      <input required type="text" className="w-full p-4 border border-stone-200 bg-stone-50 focus:outline-none focus:border-stone-900 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">E-mailadres</label>
                    <input required type="email" className="w-full p-4 border border-stone-200 bg-stone-50 focus:outline-none focus:border-stone-900 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Telefoonnummer</label>
                    <input required type="tel" className="w-full p-4 border border-stone-200 bg-stone-50 focus:outline-none focus:border-stone-900 transition-colors" />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-stone-900 text-white text-sm uppercase tracking-widest hover:bg-stone-800 transition-colors mt-8"
                  >
                    {BRAND.cta.main}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            {currentStep > 0 && (
              <button 
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center text-sm uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Vorige
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
