import React from 'react';

type IndicatorStatus = 'active' | 'idle' | 'offline';

interface StatusIndicatorProps {
  label: string;
  status?: IndicatorStatus;
  icon?: string;
}

export function StatusIndicator({ label, status = 'active', icon }: StatusIndicatorProps) {
  const colors = {
    active: 'bg-tertiary',
    idle: 'bg-secondary-container',
    offline: 'bg-error'
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
      {icon ? (
        <span className="material-symbols-outlined text-sm text-on-surface-variant">{icon}</span>
      ) : (
        <span className={`w-2 h-2 rounded-full ${colors[status]} ${status === 'active' ? 'animate-pulse' : ''}`}></span>
      )}
      <span className="text-label-bold font-bold text-on-surface">{label}</span>
    </div>
  );
}
