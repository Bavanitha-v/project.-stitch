'use client';
import React, { useState } from 'react';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';

export default function PatientDetailsPage() {
  const [activeTab, setActiveTab] = useState('30m');
  const [liveShare, setLiveShare] = useState(true);

  return (
    <>
      <style jsx global>{`
        body { min-height: max(884px, 100dvh); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .pulse-red { animation: pulseRed 2s infinite; }
        @keyframes pulseRed { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f3faff; }
        ::-webkit-scrollbar-thumb { background: #c7dde9; border-radius: 3px; }
      `}</style>

      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile h-touch-target-min z-50 sticky top-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">medical_services</span>
          <h1 className="text-title-md font-bold text-primary">Incident Response</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6">
            <button className="text-primary font-bold text-label-bold">Dashboard</button>
            <button className="text-on-surface-variant text-label-bold hover:bg-surface-container-low px-2 py-1 rounded">Patients</button>
            <button className="text-on-surface-variant text-label-bold hover:bg-surface-container-low px-2 py-1 rounded">Fleet</button>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">timer</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet py-8 pb-24">
        {/* Patient Header & Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-2">
              <span>Active Incidents</span>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-primary font-semibold">Incident #492-B</span>
            </nav>
            <h2 className="font-bold text-[32px] leading-10 text-on-surface flex items-center gap-3">
              John Doe, 42
              <span className="bg-secondary-container text-on-secondary-container text-label-bold px-3 py-1 rounded-full text-sm">STABLE</span>
            </h2>
            <p className="text-on-surface-variant mt-1">Male • 84kg • No Priority Comorbidities Reported</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex-1 md:flex-none flex flex-col items-end">
              <span className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Live Link</span>
              <div className="flex items-center gap-2">
                <span className="text-tertiary font-bold text-label-bold">{liveShare ? 'SHARING ACTIVE' : 'SHARING OFF'}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input checked={liveShare} onChange={() => setLiveShare(!liveShare)} className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
            </div>
            <Button variant="primary" className="px-6 h-touch-target-min gap-2">
              <span className="material-symbols-outlined">emergency_share</span>
              HOSPITAL HANDOVER
            </Button>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Vitals Monitoring (8 cols) */}
          <div className="lg:col-span-8 space-y-gutter">
            {/* Real-time Vitals Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Heart Rate */}
              <div className="bg-white border border-outline-variant rounded-xl p-4 flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant text-label-bold uppercase">HR</span>
                  <span className="material-symbols-outlined text-secondary">favorite</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[48px] font-bold text-on-surface leading-none">78</span>
                  <span className="text-on-surface-variant text-sm font-bold">BPM</span>
                </div>
                <div className="h-8 bg-surface-container-low rounded flex items-center justify-center text-xs text-on-surface-variant">
                  Normal Range
                </div>
              </div>
              {/* Blood Pressure */}
              <div className="bg-white border border-outline-variant rounded-xl p-4 flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant text-label-bold uppercase">BP</span>
                  <span className="material-symbols-outlined text-secondary">monitor_heart</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-bold text-on-surface leading-none">118/76</span>
                </div>
                <div className="flex items-center gap-1 text-tertiary">
                  <span className="material-symbols-outlined text-xs">trending_flat</span>
                  <span className="text-xs font-bold">Normal Range</span>
                </div>
              </div>
              {/* SpO2 */}
              <div className="bg-white border border-outline-variant rounded-xl p-4 flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant text-label-bold uppercase">SpO2</span>
                  <span className="material-symbols-outlined text-secondary">air</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[48px] font-bold text-on-surface leading-none">98</span>
                  <span className="text-on-surface-variant text-sm font-bold">%</span>
                </div>
                <div className="h-8 bg-surface-container-low rounded flex items-center justify-center text-xs text-tertiary font-bold">
                  Excellent
                </div>
              </div>
              {/* Temp */}
              <div className="bg-white border-2 border-error rounded-xl p-4 flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant text-label-bold uppercase">Temp</span>
                  <span className="material-symbols-outlined text-error pulse-red">thermostat</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[48px] font-bold text-error leading-none">38.4</span>
                  <span className="text-on-surface-variant text-sm font-bold">°C</span>
                </div>
                <div className="text-error text-xs font-bold">Pyrexia Detected</div>
              </div>
            </div>

            {/* Live Vitals Graph Card */}
            <div className="bg-white border border-outline-variant rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-title-md font-semibold">Vitals Timeline (Last 30m)</h3>
                <div className="flex gap-2">
                  {['15m', '30m', '1h'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-3 py-1 rounded-lg text-sm font-bold transition-colors ${activeTab === tab ? 'bg-secondary text-on-secondary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>{tab}</button>
                  ))}
                </div>
              </div>
              <div className="h-64 w-full bg-surface-container-low rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#906f6c 1px, transparent 1px), linear-gradient(90deg, #906f6c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                {/* Mock sparklines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <polyline points="0,25 10,20 20,22 30,18 40,20 50,15 60,18 70,20 80,17 90,19 100,20" fill="none" stroke="#005faf" strokeWidth="0.5" opacity="0.7" />
                  <polyline points="0,30 10,28 20,27 30,26 40,28 50,27 60,29 70,26 80,28 90,27 100,26" fill="none" stroke="#006b1b" strokeWidth="0.5" opacity="0.7" />
                  <polyline points="0,20 10,21 20,19 30,22 40,23 50,20 60,21 70,19 80,22 90,21 100,20" fill="none" stroke="#b7131a" strokeWidth="0.5" opacity="0.5" />
                </svg>
                <div className="z-10 bg-white/80 backdrop-blur px-4 py-2 rounded-lg border border-outline-variant shadow-sm text-sm">
                  <span className="font-bold text-secondary">Interactive Grid:</span> Long-press to mark event
                </div>
              </div>
            </div>

            {/* Documentation & Media */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Photo Upload */}
              <div className="bg-white border border-outline-variant rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-title-md font-semibold">Injury Documentation</h3>
                  <button className="text-secondary font-bold text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">add_a_photo</span> CAPTURE
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-surface-container-highest rounded-lg overflow-hidden border border-outline-variant cursor-pointer hover:opacity-90 transition-opacity">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_f3mAz8HHqDx2HEdpBVEcMN34qdMUmtKGR9Ne-_K2RYU3te_-eOF9NXCjW9iodftGR--2ZXM8FEuqF-q71z_bYMPMj6yKnzo6cKj7P0HE6w1Bvc26PZHFh1gZonW1NTCrL2Q1zNZ55_6br3TiBYmjaQGDhna3CJOI1syugF1W0_7V09lnzIW7ioGivqGFWrD4yZvK_WEajrXoptjJ3nu-FfkgJb-Oox5BS3UIuXbUdroLgUcBspWasS2pozhOIlBsHQLD2TlbdpuP" alt="Injury documentation" />
                  </div>
                  {[1,2].map(i => (
                    <div key={i} className="aspect-square bg-surface-container rounded-lg border-2 border-dashed border-outline-variant flex items-center justify-center cursor-pointer hover:bg-surface-container-low transition-colors">
                      <span className="material-symbols-outlined text-outline text-2xl">add_photo_alternate</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Recommendations */}
              <div className="bg-surface-container-low border-l-4 border-secondary p-6 rounded-r-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <h3 className="text-label-bold font-bold text-secondary uppercase tracking-tight">AI Recommendations</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    { text: '10mg IV Metoprolol for rate control', status: 'warning' },
                    { text: '500ml Normal Saline bolus', status: 'normal' },
                    { text: 'Prepare 12-lead ECG repeat in 15min', status: 'normal' },
                  ].map((rec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`material-symbols-outlined text-sm mt-0.5 ${rec.status === 'warning' ? 'text-primary' : 'text-secondary'}`}>
                        {rec.status === 'warning' ? 'warning' : 'check_circle'}
                      </span>
                      <span className="text-body-md text-on-surface">{rec.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Case Info (4 cols) */}
          <div className="lg:col-span-4 space-y-gutter">
            {/* Case Info */}
            <div className="bg-white border border-outline-variant rounded-xl p-6">
              <h3 className="text-title-md font-semibold mb-4">Case Information</h3>
              <div className="space-y-4">
                {[
                  { label: 'Complaint', value: 'Acute Chest Pain (8/10)' },
                  { label: 'Onset', value: '~30 minutes ago' },
                  { label: 'Mechanism', value: 'Non-traumatic' },
                  { label: 'Allergies', value: 'NKDA' },
                ].map(item => (
                  <div key={item.label} className="border-b border-outline-variant pb-3 last:border-0 last:pb-0">
                    <p className="text-[11px] font-bold text-on-surface-variant uppercase">{item.label}</p>
                    <p className="text-body-md font-medium text-on-surface mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medications Administered */}
            <div className="bg-white border border-outline-variant rounded-xl p-6">
              <h3 className="text-title-md font-semibold mb-4">Medications Given</h3>
              <div className="space-y-3">
                {[
                  { drug: 'Aspirin 300mg PO', time: '12:30', color: 'tertiary' },
                  { drug: 'GTN 0.4mg SL', time: '12:35', color: 'secondary' },
                ].map((med, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border-l-4 ${med.color === 'tertiary' ? 'border-tertiary bg-surface-container-low' : 'border-secondary bg-surface-container-low'}`}>
                    <span className="material-symbols-outlined text-on-surface-variant">pill</span>
                    <div className="flex-grow">
                      <p className="text-body-md font-bold text-on-surface">{med.drug}</p>
                    </div>
                    <span className="text-[11px] text-on-surface-variant">{med.time}</span>
                  </div>
                ))}
                <button className="w-full py-2 border-2 border-dashed border-outline-variant rounded-lg text-secondary font-bold text-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">add</span> Log Medication
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col gap-3">
              <Button variant="secondary" className="w-full h-touch-target-min gap-2">
                <span className="material-symbols-outlined">local_hospital</span>
                Pre-Alert Hospital
              </Button>
              <Button variant="outline" className="w-full h-touch-target-min gap-2">
                <span className="material-symbols-outlined">description</span>
                Generate PCR
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container border-t border-outline-variant flex justify-around items-center px-4 py-2">
        {['dashboard', 'personal_injury', 'ambulance', 'notifications'].map((icon, i) => (
          <button key={icon} className={`flex flex-col items-center justify-center rounded-full px-4 py-1 transition-all ${i === 0 ? 'text-primary' : 'text-on-surface-variant hover:bg-surface-variant'}`}>
            <span className="material-symbols-outlined">{icon}</span>
            <span className="text-label-bold font-bold text-[10px]">{['Dashboard','Patients','Fleet','Alerts'][i]}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
