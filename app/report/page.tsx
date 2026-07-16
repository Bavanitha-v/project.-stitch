'use client';
import React, { useState } from 'react';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';

const INCIDENT_TYPES = [
  { icon: 'car_crash', label: 'Accident' },
  { icon: 'cardiology', label: 'Cardiac' },
  { icon: 'personal_injury', label: 'Trauma' },
  { icon: 'local_fire_department', label: 'Fire/Burn' },
  { icon: 'pulmonology', label: 'Respiratory' },
  { icon: 'more_horiz', label: 'Other' },
];

export default function EmergencyReportPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [victims, setVictims] = useState(1);

  return (
    <>
      <style jsx global>{`
        body { min-height: max(884px, 100dvh); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .emergency-pulse { animation: emergencyPulse 2s infinite; }
        @keyframes emergencyPulse {
          0% { box-shadow: 0 0 0 0 rgba(183, 19, 26, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(183, 19, 26, 0); }
          100% { box-shadow: 0 0 0 0 rgba(183, 19, 26, 0); }
        }
        .scanning-line { height: 2px; background: linear-gradient(90deg, transparent, #54a0fe, transparent); animation: scan 3s linear infinite; }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(4000%); }
        }
      `}</style>

      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-mobile h-touch-target-min">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">medical_services</span>
          <h1 className="text-title-md font-bold text-primary">Incident Response</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 px-3 py-1 bg-surface-container-high rounded-full">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-label-bold font-bold text-on-surface">5G ACTIVE</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">timer</span>
        </div>
      </header>

      <main className="pt-20 px-margin-mobile flex flex-col gap-6 max-w-4xl mx-auto pb-24">
        {/* Hero: Report Emergency Button */}
        <section className="mt-4">
          <button className="emergency-pulse w-full h-32 bg-primary hover:bg-primary-container text-on-primary rounded-xl flex flex-col items-center justify-center gap-2 transition-all active:scale-95 duration-150 ease-in-out shadow-lg">
            <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
            <span className="text-headline-lg-mobile font-bold uppercase tracking-wider">Report Emergency</span>
          </button>
        </section>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Quick Selection (8 cols) */}
          <div className="md:col-span-8 flex flex-col gap-4">
            <h2 className="text-label-bold font-bold text-on-surface-variant uppercase tracking-tight">Select Incident Type</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {INCIDENT_TYPES.map((type, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`group flex flex-col items-center justify-center p-4 border rounded-xl transition-all min-h-[100px] ${selected === i ? 'bg-primary border-primary text-on-primary shadow-lg scale-[1.02]' : 'bg-surface-container-lowest border-outline-variant hover:bg-surface-container-low'}`}
                >
                  <span className={`material-symbols-outlined mb-2 text-[32px] ${selected === i ? 'text-on-primary' : 'text-primary'}`}>{type.icon}</span>
                  <span className="text-label-bold font-bold">{type.label}</span>
                </button>
              ))}
            </div>

            {/* Location Map Preview */}
            <div className="relative w-full h-48 bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant">
              <div className="w-full h-full bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRLZorT5iKXhmWAIeFG_ks3JIue_YaIYBm5WrR7GizxHDo-2gj1vT4TT4OfhtaCmRkecYLA6bEgzEPAiXxH76O0rUAg1DMVlJE_A95rHul-_79m2sqMuhHUyZA9hxJ_ehulec0yPjqIYC7BBsszxY0qG8LgXlBIgWoFAF8OT7XU2e8rluD2zeBAkIeNIPBJ22FDlQMWtx4ESpnLAaOSKWEZJT2o2naf-tbBOyeoXRXc1vN54isB6JETC-15emYVv1A3LzZlAOfWbHo')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="text-white">
                  <p className="text-label-bold font-bold opacity-80">CURRENT LOCATION</p>
                  <p className="font-bold">Market St & 4th St, SF</p>
                </div>
                <button className="bg-secondary text-on-secondary px-4 py-2 rounded-full text-label-bold font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">my_location</span> Refine
                </button>
              </div>
            </div>
          </div>

          {/* AI Analysis Sidebar (4 cols) */}
          <aside className="md:col-span-4 flex flex-col gap-4">
            <div className="p-5 bg-surface-container-low border-l-4 border-secondary-container rounded-r-xl relative overflow-hidden h-full flex flex-col gap-4">
              <div className="scanning-line absolute top-0 left-0 w-full opacity-30"></div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">psychology</span>
                <h3 className="text-label-bold font-bold text-on-surface uppercase tracking-tight">AI Co-Pilot Analysis</h3>
              </div>
              <div className="flex flex-col gap-4 flex-grow">
                <div className="flex gap-3 items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-tertiary shrink-0"></div>
                  <div>
                    <p className="text-label-bold font-bold text-tertiary">Analyzing severity...</p>
                    <p className="text-[12px] text-on-surface-variant leading-tight">Processing report patterns against historical emergency data.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start animate-pulse">
                  <div className="mt-1 w-2 h-2 rounded-full bg-secondary-container shrink-0"></div>
                  <div>
                    <p className="text-label-bold font-bold text-secondary">Predicting resources...</p>
                    <p className="text-[12px] text-on-surface-variant leading-tight">Identifying nearest specialized trauma units and ETA.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start opacity-40">
                  <div className="mt-1 w-2 h-2 rounded-full bg-outline shrink-0"></div>
                  <div>
                    <p className="text-label-bold font-bold">Optimizing route...</p>
                    <p className="text-[12px] text-on-surface-variant leading-tight">Awaiting incident confirmation to calculate live traffic.</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto p-3 bg-white border border-outline-variant rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-secondary text-sm">info</span>
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase">Recommendation</span>
                </div>
                <p className="text-[13px] font-medium text-on-surface">Dispatch Level 2 EMS with Advanced Life Support equipment.</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Additional Actions */}
        <div className="flex flex-col gap-4">
          <h2 className="text-label-bold font-bold text-on-surface-variant uppercase tracking-tight">Detailed Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-surface-container border border-outline-variant rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">group</span>
                <span className="text-body-md">Victims Count</span>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setVictims(v => Math.max(1, v-1))} className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high">-</button>
                <span className="font-bold text-lg">{victims}</span>
                <button onClick={() => setVictims(v => v+1)} className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high">+</button>
              </div>
            </div>
            <div className="p-4 bg-surface-container border border-outline-variant rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">mic</span>
                <span className="text-body-md">Voice Description</span>
              </div>
              <button className="text-secondary font-bold text-label-bold">START RECORDING</button>
            </div>
          </div>
        </div>

        {/* Submit */}
        <Button variant="primary" className="w-full h-touch-target-min rounded-xl text-lg font-bold gap-2 shadow-lg">
          <span className="material-symbols-outlined">send</span>
          SUBMIT EMERGENCY REPORT
        </Button>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container border-t border-outline-variant flex justify-around items-center px-4 py-2">
        {['dashboard', 'personal_injury', 'ambulance', 'notifications'].map((icon, i) => (
          <button key={icon} className={`flex flex-col items-center justify-center transition-all rounded-full px-4 py-1 ${i === 0 ? 'bg-secondary-container text-on-secondary-container shadow-md' : 'text-on-surface-variant hover:bg-surface-variant'}`}>
            <span className="material-symbols-outlined">{icon}</span>
            <span className="text-label-bold font-bold text-[10px]">{['Dashboard','Patients','Fleet','Alerts'][i]}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
