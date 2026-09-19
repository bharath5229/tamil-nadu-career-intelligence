import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'purple' | 'neutral' | 'danger' | 'info';
  size?: 'sm' | 'md';
  onClick?: () => void;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  onClick,
  className = ''
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs font-medium';

  const variantClasses = {
    primary: 'bg-blue-50 text-blue-700 border border-blue-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200',
    purple: 'bg-purple-50 text-purple-700 border border-purple-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    danger: 'bg-rose-50 text-rose-700 border border-rose-200',
    info: 'bg-cyan-50 text-cyan-700 border border-cyan-200'
  }[variant];

  const clickable = onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : '';

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1 rounded-full ${sizeClasses} ${variantClasses} ${clickable} ${className}`}
    >
      {children}
    </span>
  );
};
