import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all rounded-lg active:scale-95';
  
  const variants = {
    primary: 'bg-primary text-white hover:brightness-110',
    secondary: 'bg-secondary text-white hover:brightness-110',
    outline: 'bg-white border-2 border-outline-variant text-on-surface hover:border-secondary',
    danger: 'bg-error text-white hover:brightness-110',
    ghost: 'hover:bg-surface-container-low text-primary'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2 rounded-full w-10 h-10'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
