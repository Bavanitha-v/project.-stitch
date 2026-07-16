'use client';
import React, { useState } from 'react';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import Head from 'next/head';

export default function DispatchDashboard() {
  const [showRecommendation, setShowRecommendation] = useState(true);

  return (
    <>
      <style jsx global>{`
        body { min-height: max(884px, 100dvh); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cfe6f2; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #906f6c; }
      `}</style>

      {/* TopAppBar */}
      <Header title="Incident Response" />

      {/* Main Content Area: Responsive Grid */}
      <main className="flex-grow pt-16 pb-20 md:pb-0 flex flex-col md:flex-row h-screen overflow-hidden">
        {/* Left Sidebar: Pending Emergencies & Fleet List */}
        <aside className="w-full md:w-80 lg:w-96 bg-white border-r border-outline-variant overflow-y-auto flex flex-col shrink-0">
          <div className="p-margin-mobile border-b border-outline-variant bg-surface-container-low">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-wider">Pending Alerts</h2>
              <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold">4 LIVE</span>
            </div>
            
            {/* Priority Emergency Card */}
            <div className="bg-error-container border-2 border-error p-3 rounded-xl mb-3 cursor-pointer hover:brightness-95 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="text-primary font-bold text-label-bold">AI Priority: 9.8</span>
                <span className="text-[10px] text-on-error-container font-mono">02:41 Elapsed</span>
              </div>
              <p className="text-on-error-container font-bold mb-1">Cardiac Arrest - Zone 4</p>
              <p className="text-[12px] text-on-error-container opacity-80">82 year old male, unresponsive. Caller performing CPR.</p>
            </div>
            
            {/* Secondary Emergency Card */}
            <div className="bg-white border border-outline-variant p-3 rounded-xl cursor-pointer hover:border-secondary transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="text-tertiary font-bold text-label-bold">AI Priority: 6.2</span>
                <span className="text-[10px] text-on-surface-variant font-mono">05:12 Elapsed</span>
              </div>
              <p className="text-on-surface font-bold mb-1">MVA - Multi Vehicle</p>
              <p className="text-[12px] text-on-surface-variant">Intersection 5th & Main. 2 ambulatory patients reported.</p>
            </div>
          </div>
          
          {/* Fleet Status */}
          <div className="p-margin-mobile flex-grow overflow-y-auto">
            <h2 className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-wider mb-4">Fleet Status</h2>
            <div className="space-y-3">
              {/* Available Unit */}
              <div className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors">
                <div className="w-2 h-10 bg-tertiary rounded-full"></div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <span className="font-bold text-on-surface">MED-14</span>
                    <span className="text-[11px] text-tertiary font-bold uppercase">Available</span>
                  </div>
                  <span className="text-[12px] text-on-surface-variant">Stn 02 • Fuel: 88%</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">ambulance</span>
              </div>
              {/* Busy Unit */}
              <div className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors">
                <div className="w-2 h-10 bg-error rounded-full"></div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <span className="font-bold text-on-surface">MED-09</span>
                    <span className="text-[11px] text-error font-bold uppercase">On Scene</span>
                  </div>
                  <span className="text-[12px] text-on-surface-variant">Case #8821 • ETA Hosp: 12m</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">ambulance</span>
              </div>
            </div>
            
            {/* Hospital Capacity Indicators */}
            <div className="mt-8 pt-4 border-t border-outline-variant">
              <h2 className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-wider mb-4">Hospital Beds</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[12px] mb-1">
                    <span className="font-bold">General Memorial</span>
                    <span className="text-error font-bold">85% Full</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="bg-error h-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[12px] mb-1">
                    <span className="font-bold">City Trauma Center</span>
                    <span className="text-tertiary font-bold">42% Full</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Center: Interactive Map Area */}
        <section className="flex-grow relative bg-surface-container">
          {/* Map Simulation Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full grayscale opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYqNf_pnFrgTz8-xpq-MtUGyMoFBdB9bp4QWrnfInYRt3hdL9qZYiSoaeXHO0_Af-C9o9SFBafYX1FbAdq_JH8X_Rnt9oOX1s2Rjx5mNfQ7Vo8G5VCT12RjddlmbWZyENjBXQN7hdOUnV2x3gdRmC1p2q1AmBuqKYLWAurTVNIOaTE9_rx3janoNg-O_2jPSdlUdAJ0976T8O26DuLoAPMtazXUdIF4jsA07mPADOd2nEBbtEfsCskOU2tWvsjD9CJ6lditqyWjvrN')" }}></div>
            {/* Mock Map Elements */}
            <div className="absolute top-1/4 left-1/3 group">
              <div className="relative">
                <div className="absolute -top-10 -left-12 bg-white px-2 py-1 rounded shadow-sm text-[10px] font-bold border border-outline whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">MED-14 (IDLE)</div>
                <span className="material-symbols-outlined text-tertiary text-4xl drop-shadow-md cursor-pointer animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
            </div>
            <div className="absolute bottom-1/3 right-1/4">
              <span className="material-symbols-outlined text-error text-4xl drop-shadow-md cursor-pointer" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div className="absolute top-1/2 left-1/2">
              <span className="material-symbols-outlined text-secondary text-5xl drop-shadow-lg" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
            </div>
          </div>
          
          {/* Floating Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <Button variant="ghost" size="icon" className="bg-white border border-outline-variant shadow-sm hover:bg-surface-container-low text-on-surface">
              <span className="material-symbols-outlined">add</span>
            </Button>
            <Button variant="ghost" size="icon" className="bg-white border border-outline-variant shadow-sm hover:bg-surface-container-low text-on-surface">
              <span className="material-symbols-outlined">remove</span>
            </Button>
            <Button variant="ghost" size="icon" className="bg-white border border-outline-variant shadow-sm hover:bg-surface-container-low text-on-surface">
              <span className="material-symbols-outlined">layers</span>
            </Button>
          </div>
          
          {/* Recommended Assignment Popup (AI Insight Card) */}
          {showRecommendation && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md z-20 px-4 transition-all duration-300 transform scale-100 opacity-100">
              <div className="bg-white border-l-4 border-secondary shadow-2xl rounded-xl p-5 transform transition-all hover:scale-[1.01]">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary-container p-3 rounded-full">
                    <span className="material-symbols-outlined text-on-secondary-container">psychology</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-label-bold font-label-bold text-secondary flex items-center gap-2">
                      AI RECOMMENDED ASSIGNMENT
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                    </h3>
                    <p className="text-body-md font-body-md font-bold text-on-surface mt-1">Assign MED-14 to Cardiac Call #8892</p>
                    <p className="text-[12px] text-on-surface-variant mt-2">
                      <span className="font-bold">Reasoning:</span> MED-14 is 1.2 miles away (ETA 4m). City Trauma Center has specialty cardiology bay available (Wait: 0m).
                    </p>
                    <div className="flex gap-3 mt-4">
                      <Button variant="secondary" className="flex-grow w-full py-2">
                        Confirm Dispatch
                      </Button>
                      <Button variant="outline" className="px-4 py-2">
                        Details
                      </Button>
                    </div>
                  </div>
                  <button 
                    className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors" 
                    onClick={() => setShowRecommendation(false)}
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container border-t border-outline-variant flex justify-around items-center px-4 py-2">
        <div className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-label-bold uppercase">Dashboard</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">personal_injury</span>
          <span className="text-[10px] font-label-bold uppercase">Patients</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 scale-90">
          <span className="material-symbols-outlined">ambulance</span>
          <span className="text-[10px] font-label-bold uppercase">Fleet</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">notifications</span>
          <span className="text-[10px] font-label-bold uppercase">Alerts</span>
        </div>
      </nav>
    </>
  );
}
