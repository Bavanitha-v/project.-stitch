'use client';
import React, { useState } from 'react';
import { Header } from '@/components/ui/Header';

export default function AmbulanceTrackingPage() {
  const [arrivedAtScene, setArrivedAtScene] = useState(false);

  return (
    <>
      <style jsx global>{`
        body { min-height: max(884px, 100dvh); overflow: hidden; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .map-pulse { animation: mapPulse 2s ease-in-out infinite; }
        @keyframes mapPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,95,175,0.5); }
          50% { box-shadow: 0 0 0 12px rgba(0,95,175,0); }
        }
      `}</style>

      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile h-touch-target-min z-50 sticky top-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">medical_services</span>
          <h1 className="text-title-md font-bold text-primary">Incident Response</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
            <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
            <span className="text-label-bold font-bold text-on-surface">Satellite 5G Connected</span>
          </div>
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-transform active:scale-95">timer</button>
        </div>
      </header>

      <main className="flex-1 relative flex flex-col md:flex-row overflow-hidden" style={{ height: 'calc(100vh - 112px)' }}>
        {/* Map Canvas (Main View) */}
        <section className="absolute inset-0 z-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-NQs0BWQ95UH2ZYKqLONgdwjUPNZvNtOFgYBwpgovfjis0o3hiWpntw1aMVkXmJi3zN4ObCF227CvU0vSYmV9_W-p92r58myAWF_6zrsK0qBBoMgLmX43bwRLPjTosTsELDxeHoXSsBLljHCmN9j8Hx823x9uFnnVYEeEyg3FcDxn2u3TUoDja9Jq17Mk0cvEWRxZuGwEu5bCfMP7hwERWyC9TEH8JDQoVx_VAa0xRyrzhQNaHILAnvrS7_ERbFgpqJuLI7nsxY6g')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(0.2) contrast(1.1)',
            }}
          ></div>
          {/* AI Route Overlay SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <path d="M 100,500 L 300,450 L 450,200 L 600,150 L 800,100" fill="none" stroke="#005faf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" opacity="0.8" />
          </svg>
          {/* Ambulance Marker */}
          <div className="absolute top-[490px] left-[90px] transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-secondary p-2 rounded-full shadow-lg map-pulse">
              <span className="material-symbols-outlined text-white text-[24px]">ambulance</span>
            </div>
          </div>
          {/* Emergency Marker */}
          <div className="absolute top-[90px] left-[790px] transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-primary p-2 rounded-full shadow-lg">
              <span className="material-symbols-outlined text-white text-[24px]">emergency</span>
            </div>
          </div>
        </section>

        {/* UI Overlay Layer */}
        <div className="relative z-10 w-full h-full pointer-events-none flex flex-col justify-between p-4 md:p-6">
          {/* Top HUD: ETA & Status */}
          <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-start">
            {/* ETA Cards */}
            <div className="flex gap-3 pointer-events-auto">
              <div className="bg-white border border-outline-variant p-4 rounded-xl shadow-sm min-w-[180px]">
                <p className="text-on-surface-variant text-label-bold font-bold mb-1">ETA TO PATIENT</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-display-lg font-bold text-secondary">04:12</span>
                  <span className="text-title-md text-on-surface-variant">MIN</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-tertiary">
                  <span className="material-symbols-outlined text-[16px]">trending_down</span>
                  <span className="text-label-bold font-bold">-2m (AI Optimized)</span>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md border border-outline-variant p-4 rounded-xl shadow-sm min-w-[180px]">
                <p className="text-on-surface-variant text-label-bold font-bold mb-1">ETA TO HOSPITAL</p>
                <div className="flex items-baseline gap-2 opacity-60">
                  <span className="text-display-lg font-bold text-on-surface">18:45</span>
                  <span className="text-title-md">MIN</span>
                </div>
                <p className="text-label-bold font-bold text-on-surface-variant mt-2">Northshore Medical</p>
              </div>
            </div>

            {/* AI Insight: Route Optimization */}
            <div className="pointer-events-auto max-w-sm">
              <div className="bg-surface-container-high border-l-4 border-secondary p-4 rounded-r-xl shadow-md">
                <div className="flex items-center gap-2 mb-2 text-secondary">
                  <span className="material-symbols-outlined">auto_awesome</span>
                  <span className="text-label-bold font-bold uppercase tracking-wider">Route Optimization</span>
                </div>
                <p className="text-body-md text-on-surface">
                  Heavy traffic detected on 5th Ave. Rerouting via Clark St bridge to save <span className="font-bold">140 seconds</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Dashboard: Patient Info & Actions */}
          <div className="flex flex-col md:flex-row gap-4 w-full items-end pointer-events-none">
            {/* Patient Summary Card */}
            <div className="w-full md:max-w-md pointer-events-auto">
              <div className="bg-white border border-outline-variant p-5 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-title-md font-semibold text-on-surface">Case #882-Alpha</h3>
                    <p className="text-on-surface-variant text-body-md">Residential Emergency</p>
                  </div>
                  <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-label-bold font-bold">CRITICAL</span>
                </div>
                <div className="grid grid-cols-3 gap-4 border-y border-outline-variant py-4 my-4">
                  <div><p className="text-on-surface-variant text-label-bold font-bold">AGE</p><p className="text-title-md font-semibold">64 Y/O</p></div>
                  <div><p className="text-on-surface-variant text-label-bold font-bold">GENDER</p><p className="text-title-md font-semibold">Male</p></div>
                  <div><p className="text-on-surface-variant text-label-bold font-bold">STATUS</p><p className="text-title-md font-semibold">Severe</p></div>
                </div>
                <div className="flex gap-3 mb-4">
                  <div className="bg-surface-variant px-3 py-2 rounded-lg flex-1">
                    <p className="text-on-surface-variant text-[10px] font-bold uppercase">Chief Complaint</p>
                    <p className="text-body-md text-on-surface leading-tight mt-1">Acute Chest Pain, Shortness of Breath</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-surface-container-highest text-on-surface font-bold py-3 rounded-lg hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">history</span> Patient History
                  </button>
                  <button className="flex-1 bg-surface-container-highest text-on-surface font-bold py-3 rounded-lg hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">chat</span> Dispatch Comms
                  </button>
                </div>
              </div>
            </div>

            {/* Major Action Cluster */}
            <div className="w-full md:flex-1 pointer-events-auto flex flex-col gap-3">
              <div className="flex gap-4">
                <button
                  onClick={() => setArrivedAtScene(true)}
                  className={`flex-1 text-white font-bold py-6 rounded-xl shadow-xl hover:brightness-110 active:scale-95 transition-all flex flex-col items-center justify-center gap-1 group ${arrivedAtScene ? 'bg-tertiary' : 'bg-secondary'}`}
                >
                  <span className="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  {arrivedAtScene ? 'ARRIVED ✓' : 'ARRIVED AT SCENE'}
                </button>
                <button
                  disabled={!arrivedAtScene}
                  className={`flex-1 font-bold py-6 rounded-xl shadow-xl transition-all flex flex-col items-center justify-center gap-1 ${arrivedAtScene ? 'bg-secondary text-white hover:brightness-110 active:scale-95' : 'bg-tertiary-container text-on-tertiary-container opacity-50 cursor-not-allowed'}`}
                >
                  <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_pin</span>
                  PATIENT ONBOARD
                </button>
              </div>
              <div className="bg-inverse-surface text-inverse-on-surface p-4 rounded-xl flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed">notification_important</span>
                  <p className="text-body-md">Nearest ER (St. Jude) is at <span className="font-bold text-primary-fixed">Diversion Capacity</span>. Rerouting to Northshore.</p>
                </div>
                <button className="text-secondary-fixed font-bold underline ml-2">DETAILS</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="bg-surface-container border-t border-outline-variant fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2">
        {['dashboard', 'personal_injury', 'ambulance', 'notifications'].map((icon, i) => (
          <button key={icon} className={`flex flex-col items-center justify-center rounded-full px-4 py-1 transition-all ${i === 2 ? 'bg-secondary-container text-on-secondary-container shadow-md scale-95' : 'text-on-surface-variant hover:bg-surface-variant'}`}>
            <span className="material-symbols-outlined" style={i === 2 ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
            <span className="text-label-bold font-bold text-[10px]">{['Dashboard','Patients','Fleet','Alerts'][i]}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
