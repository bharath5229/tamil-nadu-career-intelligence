import React from 'react';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color?: 'blue' | 'emerald' | 'amber' | 'purple' | 'rose' | 'cyan' | 'indigo';
  onClick?: () => void;
  isActive?: boolean;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color = 'blue',
  onClick,
  isActive = false
}) => {
  const colorStyles = {
    blue: {
      bg: 'bg-blue-50/70 text-blue-600',
      activeBorder: 'border-blue-500 ring-2 ring-blue-100',
      pill: 'text-blue-700 bg-blue-50'
    },
    emerald: {
      bg: 'bg-emerald-50/70 text-emerald-600',
      activeBorder: 'border-emerald-500 ring-2 ring-emerald-100',
      pill: 'text-emerald-700 bg-emerald-50'
    },
    amber: {
      bg: 'bg-amber-50/70 text-amber-600',
      activeBorder: 'border-amber-500 ring-2 ring-amber-100',
      pill: 'text-amber-700 bg-amber-50'
    },
    purple: {
      bg: 'bg-purple-50/70 text-purple-600',
      activeBorder: 'border-purple-500 ring-2 ring-purple-100',
      pill: 'text-purple-700 bg-purple-50'
    },
    rose: {
      bg: 'bg-rose-50/70 text-rose-600',
      activeBorder: 'border-rose-500 ring-2 ring-rose-100',
      pill: 'text-rose-700 bg-rose-50'
    },
    cyan: {
      bg: 'bg-cyan-50/70 text-cyan-600',
      activeBorder: 'border-cyan-500 ring-2 ring-cyan-100',
      pill: 'text-cyan-700 bg-cyan-50'
    },
    indigo: {
      bg: 'bg-indigo-50/70 text-indigo-600',
      activeBorder: 'border-indigo-500 ring-2 ring-indigo-100',
      pill: 'text-indigo-700 bg-indigo-50'
    }
  }[color];

  return (
    <div
      onClick={onClick}
      className={`relative p-5 rounded-2xl bg-white border transition-all duration-200 shadow-sm hover:shadow-md ${
        isActive ? colorStyles.activeBorder : 'border-slate-200/80 hover:border-slate-300'
      } ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            {title}
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {value}
            </h3>
          </div>
          {subtitle && (
            <p className="mt-1 text-xs text-slate-500 font-medium">
              {subtitle}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl ${colorStyles.bg} flex items-center justify-center`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      {onClick && (
        <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-1 font-medium">
          <span>Click to filter</span>
          <span>→</span>
        </div>
      )}
    </div>
  );
};
