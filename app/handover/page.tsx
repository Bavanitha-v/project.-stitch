'use client';
import React, { useRef, useEffect } from 'react';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';

export default function HospitalHandoverPage() {
  const canvas1Ref = useRef<HTMLCanvasElement>(null);
  const canvas2Ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    [canvas1Ref, canvas2Ref].forEach((ref) => {
      const canvas = ref.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let drawing = false;

      const resize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.strokeStyle = '#071e27';
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
      };
      window.addEventListener('resize', resize);
      resize();

      const getPos = (e: MouseEvent | TouchEvent) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
      };

      canvas.addEventListener('mousedown', (e) => { drawing = true; ctx.beginPath(); const p = getPos(e); ctx.moveTo(p.x, p.y); });
      canvas.addEventListener('mousemove', (e) => { if (!drawing) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); });
      canvas.addEventListener('mouseup', () => { drawing = false; });
      canvas.addEventListener('mouseleave', () => { drawing = false; });
    });
  }, []);

  return (
    <>
      <style jsx global>{`
        body { min-height: max(884px, 100dvh); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; display: inline-block; line-height: 1; text-transform: none; }
        .signature-pad { border: 1px dashed #906f6c; background-image: repeating-linear-gradient(0deg, transparent, transparent 19px, #e4beb9 20px); background-size: 100% 20px; }
      `}</style>

      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 h-[64px] sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button className="w-touch-target-min h-touch-target-min flex items-center justify-center rounded-full hover:bg-surface-container-low active:scale-95 duration-150">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="text-title-md font-bold text-primary">Hospital Handover</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">timer</span>
          <span className="text-label-bold font-bold text-primary">12:44</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-32 pt-6 max-w-2xl mx-auto w-full">
        {/* Patient Identification */}
        <section className="bg-surface-container-lowest border border-outline-variant p-4 mb-6 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-label-bold font-bold text-secondary uppercase tracking-wider">Patient Identification</h2>
            <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-1 text-[12px] font-bold rounded">EMERGENCY PRE-ALERT</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><p className="text-on-surface-variant text-[12px]">Full Name</p><p className="text-title-md font-semibold">John Doe</p></div>
            <div className="text-right"><p className="text-on-surface-variant text-[12px]">Incident ID</p><p className="text-title-md font-semibold text-primary">#492-B</p></div>
            <div><p className="text-on-surface-variant text-[12px]">Age / Sex</p><p className="text-body-lg">42 / Male</p></div>
            <div className="text-right"><p className="text-on-surface-variant text-[12px]">Weight (Est.)</p><p className="text-body-lg">85 kg</p></div>
          </div>
        </section>

        {/* Vitals at Handover */}
        <h2 className="text-label-bold font-bold text-secondary uppercase tracking-wider mb-3 px-1">Vitals at Handover</h2>
        <section className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-outline-variant p-3 rounded-lg flex flex-col justify-between h-24">
            <span className="text-[12px] text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">favorite</span> HR
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-data-mono font-bold text-tertiary">88</span>
              <span className="text-[10px] text-on-surface-variant">BPM</span>
            </div>
          </div>
          <div className="bg-white border border-outline-variant p-3 rounded-lg flex flex-col justify-between h-24">
            <span className="text-[12px] text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">speed</span> BP
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-data-mono font-bold">118/74</span>
              <span className="text-[10px] text-on-surface-variant">mmHg</span>
            </div>
          </div>
          <div className="bg-white border border-outline-variant p-3 rounded-lg flex flex-col justify-between h-24 border-l-4 border-l-primary">
            <span className="text-[12px] text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">air</span> SpO2
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-data-mono font-bold text-primary">94</span>
              <span className="text-[10px] text-on-surface-variant">%</span>
            </div>
          </div>
        </section>

        {/* Care Summary */}
        <h2 className="text-label-bold font-bold text-secondary uppercase tracking-wider mb-3 px-1">Care Summary</h2>
        <section className="bg-surface-container-lowest border border-outline-variant rounded-lg mb-6 overflow-hidden">
          <div className="p-4 space-y-3">
            {[
              { icon: 'vaccines', text: 'IV Access (Left Antecubital)', time: '12:15' },
              { icon: 'masks', text: 'Oxygen (2L/min Nasal Cannula)', time: '12:18' },
              { icon: 'monitor_heart', text: 'ECG 12-lead (Sinus Rhythm)', time: '12:25' },
              { icon: 'pill', text: 'Aspirin 300mg PO', time: '12:30', highlight: true },
            ].map((item, i) => (
              <div key={i} className={`flex items-center justify-between ${i < 3 ? 'border-b border-outline-variant pb-2' : ''}`}>
                <div className={`flex items-center gap-3 ${item.highlight ? 'text-primary font-bold' : ''}`}>
                  <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                  <span className="text-body-md">{item.text}</span>
                </div>
                <span className="text-[12px] text-on-surface-variant font-medium">{item.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* AI Clinical Summary */}
        <section className="bg-surface-container-low border-l-4 border-l-secondary p-4 mb-6 rounded-r-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <h3 className="text-label-bold font-bold text-secondary">AI-Generated Clinical Summary</h3>
          </div>
          <p className="text-body-md leading-relaxed text-on-surface">
            Patient presented with sudden-onset substernal chest pain radiating to left arm (Intensity 8/10). ECG shows non-specific ST changes but no overt elevation. Stable hemodynamics maintained throughout transport. Administered Aspirin and low-flow oxygen. Recommend immediate troponin screening and cardiology consult.
          </p>
        </section>

        {/* Handover Authorization */}
        <h2 className="text-label-bold font-bold text-secondary uppercase tracking-wider mb-3 px-1">Handover Authorization</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold text-on-surface-variant uppercase">Lead Paramedic (Sarah Jenkins)</label>
            <div className="signature-pad w-full h-32 rounded flex items-center justify-center relative overflow-hidden bg-white">
              <span className="text-surface-dim absolute pointer-events-none select-none text-on-surface-variant opacity-50">Sign here</span>
              <canvas ref={canvas1Ref} className="absolute top-0 left-0 w-full h-full cursor-crosshair"></canvas>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold text-on-surface-variant uppercase">Receiving Physician</label>
            <div className="signature-pad w-full h-32 rounded flex items-center justify-center relative overflow-hidden bg-white">
              <span className="text-surface-dim absolute pointer-events-none select-none text-on-surface-variant opacity-50">Sign here</span>
              <canvas ref={canvas2Ref} className="absolute top-0 left-0 w-full h-full cursor-crosshair"></canvas>
            </div>
          </div>
        </section>

        {/* Final Action */}
        <Button variant="primary" className="w-full h-touch-target-min rounded-lg text-lg mb-12 gap-2 shadow-md">
          <span className="material-symbols-outlined">assignment_turned_in</span>
          COMPLETE HANDOVER
        </Button>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface-container border-t border-outline-variant">
        {['dashboard', 'personal_injury', 'ambulance', 'notifications'].map((icon, i) => (
          <div key={icon} className={`flex flex-col items-center justify-center rounded-full px-4 py-1 cursor-pointer duration-200 ${i === 1 ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:bg-surface-variant'}`}>
            <span className="material-symbols-outlined" style={i === 1 ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
            <span className="text-label-bold font-bold text-[10px]">{['Dashboard','Patients','Fleet','Alerts'][i]}</span>
          </div>
        ))}
      </nav>
    </>
  );
}
