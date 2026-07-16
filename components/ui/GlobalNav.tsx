'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', icon: 'dashboard', label: 'Dispatch' },
  { href: '/tracking', icon: 'ambulance', label: 'Tracking' },
  { href: '/patient', icon: 'personal_injury', label: 'Patient' },
  { href: '/intake', icon: 'local_hospital', label: 'Intake' },
  { href: '/handover', icon: 'assignment_turned_in', label: 'Handover' },
  { href: '/report', icon: 'emergency', label: 'Report' },
];

export function GlobalNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Side Nav */}
      <nav className="hidden md:flex fixed left-0 top-[48px] h-[calc(100vh-48px)] w-16 flex-col items-center gap-1 bg-surface border-r border-outline-variant py-4 z-40">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 w-14 h-14 rounded-xl transition-all group ${isActive ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
              title={item.label}
            >
              <span className="material-symbols-outlined text-xl" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
              <span className="text-[9px] font-bold leading-none">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container border-t border-outline-variant flex justify-around items-center px-2 py-1">
        {navItems.slice(0, 4).map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center rounded-full px-3 py-1 transition-all ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
              <span className="text-[10px] font-bold">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
