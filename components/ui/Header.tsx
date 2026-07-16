import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  title: string;
  icon?: string;
  children?: React.ReactNode;
}

export function Header({ title, icon = 'medical_services', children }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-mobile h-touch-target-min">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-2xl" data-icon={icon}>
          {icon}
        </span>
        <h1 className="text-title-md font-title-md font-bold text-primary">{title}</h1>
      </div>
      <div className="flex items-center gap-6">
        {children || (
          <>
            <div className="hidden md:flex gap-4 items-center">
              <span className="text-label-bold font-label-bold text-on-surface-variant flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span> 5G Active
              </span>
              <span className="text-label-bold font-label-bold text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" data-icon="satellite_alt">
                  satellite_alt
                </span>{' '}
                Link-12
              </span>
            </div>
            <button
              className="material-symbols-outlined text-primary hover:bg-surface-container-low p-2 rounded-full transition-transform active:scale-95"
              data-icon="timer"
            >
              timer
            </button>
          </>
        )}
      </div>
    </header>
  );
}
