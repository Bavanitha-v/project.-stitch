'use client';
import React from 'react';
import { Header } from '@/components/ui/Header';
import { VitalsChip } from '@/components/ui/VitalsChip';

export default function IntakeDashboard() {
  return (
    <>
      <style jsx global>{`
        body { min-height: max(884px, 100dvh); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cfe6f2; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #906f6c; }
        .scroll-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .vitals-pulse {
            animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-ring {
            0% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(186, 26, 26, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(186, 26, 26, 0); }
            100% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(186, 26, 26, 0); }
        }
      `}</style>

      {/* TopAppBar */}
      <Header title="Incident Response">
        <div className="hidden md:flex gap-6 items-center px-4">
          <button className="text-on-surface-variant hover:bg-surface-container-low px-3 py-1 rounded transition-colors text-label-bold font-label-bold">Dashboard</button>
          <button className="text-primary font-bold hover:bg-surface-container-low px-3 py-1 rounded transition-colors text-label-bold font-label-bold">Patients</button>
          <button className="text-on-surface-variant hover:bg-surface-container-low px-3 py-1 rounded transition-colors text-label-bold font-label-bold">Fleet</button>
          <button className="text-on-surface-variant hover:bg-surface-container-low px-3 py-1 rounded transition-colors text-label-bold font-label-bold">Alerts</button>
        </div>
        <span className="material-symbols-outlined text-primary">timer</span>
      </Header>

      <main className="pt-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-7xl mx-auto space-y-gutter pb-20">
        {/* Hero Header: High Visibility Countdown */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-wider">Next Arrival</h2>
              <div className="flex items-baseline gap-4 mt-2">
                <span className="text-display-lg font-display-lg text-primary">04:22</span>
                <span className="text-title-md font-title-md text-secondary">AMB-702 (Trauma 1)</span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-error-container text-on-error-container rounded-full">
                <span className="material-symbols-outlined text-xl">priority_high</span>
                <span className="text-label-bold font-label-bold">Triage Level: Critical</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high text-on-surface rounded-full">
                <span className="material-symbols-outlined text-xl">location_on</span>
                <span className="text-label-bold font-label-bold">ETA: Central & Main</span>
              </div>
            </div>
          </div>
          <div className="bg-secondary text-on-secondary p-6 rounded-xl flex flex-col items-center justify-center text-center">
            <h3 className="text-label-bold font-label-bold uppercase opacity-80">Assigned Bay</h3>
            <span className="text-[80px] leading-none font-bold mt-2">T-01</span>
            <p className="text-body-md mt-2">Emergency Department West Wing</p>
          </div>
        </section>

        {/* Bento Grid Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left: Incoming Ambulances (4/12) */}
          <div className="lg:col-span-4 space-y-gutter">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
              <div className="p-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
                <h3 className="text-title-md font-title-md">Incoming Fleet</h3>
                <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded">4 Active</span>
              </div>
              <div className="divide-y divide-outline-variant max-h-[600px] overflow-y-auto scroll-hide">
                {/* Unit 1 */}
                <div className="p-4 hover:bg-surface-container transition-colors cursor-pointer border-l-4 border-error">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-label-bold font-label-bold">AMB-702</span>
                    <span className="text-error font-bold">04:22</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant line-clamp-1">Severe Trauma - MVA</p>
                  <div className="mt-3 flex gap-2">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-error text-on-error rounded">Level 1</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-surface-variant text-on-surface-variant rounded">Bay T-01</span>
                  </div>
                </div>
                {/* Unit 2 */}
                <div className="p-4 hover:bg-surface-container transition-colors cursor-pointer border-l-4 border-tertiary-container">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-label-bold font-label-bold">AMB-415</span>
                    <span className="text-on-surface font-bold">12:05</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant line-clamp-1">Chest Pain - Stable</p>
                  <div className="mt-3 flex gap-2">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-tertiary-container text-on-tertiary-container rounded">Level 3</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-surface-variant text-on-surface-variant rounded">Bay E-04</span>
                  </div>
                </div>
                {/* Unit 3 */}
                <div className="p-4 hover:bg-surface-container transition-colors cursor-pointer border-l-4 border-secondary-container">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-label-bold font-label-bold">AMB-229</span>
                    <span className="text-on-surface font-bold">18:40</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant line-clamp-1">Respiratory Distress</p>
                  <div className="mt-3 flex gap-2">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded">Level 2</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-surface-variant text-on-surface-variant rounded">Bay T-03</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Vitals & Checklist (8/12) */}
          <div className="lg:col-span-8 space-y-gutter">
            {/* Live Vitals Monitoring */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
              <div className="p-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-error rounded-full vitals-pulse"></div>
                  <h3 className="text-title-md font-title-md">Live Patient Vitals (AMB-702)</h3>
                </div>
                <span className="text-label-bold font-label-bold text-on-surface-variant">Telemetry Active • 5G Stable</span>
              </div>
              <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <VitalsChip label="HR (BPM)" value="128" status="critical" trend="up" />
                <VitalsChip label="BP (mmHg)" value="90/62" status="warning" trend="down" />
                <VitalsChip label="SpO2 (%)" value="92" status="warning" trend="down" />
                <VitalsChip label="Resp Rate" value="28" status="critical" trend="up" />
              </div>
              
              {/* AI Insight Box */}
              <div className="px-6 pb-6">
                <div className="bg-error-container border border-error p-4 rounded-lg flex items-start gap-3">
                  <span className="material-symbols-outlined text-error">warning</span>
                  <div>
                    <h4 className="font-bold text-on-error-container">AI Alert: Hemodynamic Instability Detected</h4>
                    <p className="text-sm text-on-error-container opacity-90 mt-1">
                      Rapidly decreasing blood pressure correlated with rising heart rate. High probability of internal bleeding based on MVA mechanism of injury. Recommend immediate blood typing upon arrival.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Checklist */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
              <div className="p-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
                <h3 className="text-title-md font-title-md">Trauma Bay Preparation</h3>
                <span className="text-secondary font-bold text-label-bold">2/5 Completed</span>
              </div>
              <div className="p-2">
                {/* Checklist Item 1 (Done) */}
                <div className="flex items-center gap-3 p-3 hover:bg-surface-container transition-colors rounded-lg cursor-pointer opacity-70">
                  <span className="material-symbols-outlined text-tertiary">check_circle</span>
                  <span className="flex-grow text-body-md line-through text-on-surface-variant">Notify Trauma Surgeon On-Call</span>
                  <span className="text-xs text-on-surface-variant">02:14m ago</span>
                </div>
                {/* Checklist Item 2 (Done) */}
                <div className="flex items-center gap-3 p-3 hover:bg-surface-container transition-colors rounded-lg cursor-pointer opacity-70">
                  <span className="material-symbols-outlined text-tertiary">check_circle</span>
                  <span className="flex-grow text-body-md line-through text-on-surface-variant">Reserve Massive Transfusion Protocol (MTP)</span>
                  <span className="text-xs text-on-surface-variant">01:05m ago</span>
                </div>
                {/* Checklist Item 3 (Pending) */}
                <div className="flex items-center gap-3 p-3 hover:bg-surface-container transition-colors rounded-lg cursor-pointer bg-secondary-container">
                  <span className="material-symbols-outlined text-secondary">radio_button_unchecked</span>
                  <span className="flex-grow text-body-md font-bold text-on-surface">Prep FAST Ultrasound in Bay T-01</span>
                </div>
                {/* Checklist Item 4 (Pending) */}
                <div className="flex items-center gap-3 p-3 hover:bg-surface-container transition-colors rounded-lg cursor-pointer">
                  <span className="material-symbols-outlined text-outline">radio_button_unchecked</span>
                  <span className="flex-grow text-body-md text-on-surface">Clear CT Scanner for immediate priority</span>
                </div>
                {/* Checklist Item 5 (Pending) */}
                <div className="flex items-center gap-3 p-3 hover:bg-surface-container transition-colors rounded-lg cursor-pointer">
                  <span className="material-symbols-outlined text-outline">radio_button_unchecked</span>
                  <span className="flex-grow text-body-md text-on-surface">Assemble airway management tray</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
