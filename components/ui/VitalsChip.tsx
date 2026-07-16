import React from 'react';

type VitalsStatus = 'normal' | 'warning' | 'critical';

interface VitalsChipProps {
  label: string;
  value: string | number;
  status?: VitalsStatus;
  trend?: 'up' | 'down' | 'flat';
}

export function VitalsChip({ label, value, status = 'normal', trend }: VitalsChipProps) {
  const borderColors = {
    normal: 'border-tertiary',
    warning: 'border-secondary',
    critical: 'border-error'
  };

  const textColors = {
    normal: 'text-tertiary',
    warning: 'text-secondary',
    critical: 'text-error'
  };

  const trendIcons = {
    up: 'trending_up',
    down: 'trending_down',
    flat: 'trending_flat'
  };

  return (
    <div className={`p-4 bg-surface-container rounded-lg border-l-4 ${borderColors[status]}`}>
      <span className="text-label-bold font-label-bold text-on-surface-variant text-xs uppercase">{label}</span>
      <div className="flex items-baseline gap-2 mt-1">
        <span className={`text-data-mono font-data-mono ${status === 'critical' ? textColors[status] : ''}`}>
          {value}
        </span>
        {trend && (
          <span className={`material-symbols-outlined text-sm ${textColors[status]}`}>
            {trendIcons[trend]}
          </span>
        )}
      </div>
    </div>
  );
}
