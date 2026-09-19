import React from 'react';
import { Info, Filter } from 'lucide-react';

interface ChartContainerProps {
  title: string;
  subtitle?: string;
  tooltipText?: string;
  filterHint?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  subtitle,
  tooltipText,
  filterHint = 'Click data points to filter',
  action,
  children,
  className = ''
}) => {
  return (
    <div className={`p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between ${className}`}>
      <div className="flex items-start justify-between mb-3 gap-2">
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-semibold text-slate-800 text-sm sm:text-base">
              {title}
            </h4>
            {tooltipText && (
              <div className="group relative cursor-pointer inline-flex items-center text-slate-400 hover:text-slate-600">
                <Info className="w-3.5 h-3.5" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block w-48 p-2 bg-slate-800 text-slate-100 text-xs rounded-lg shadow-lg z-50 pointer-events-none">
                  {tooltipText}
                </div>
              </div>
            )}
          </div>
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>

        <div className="flex items-center gap-2">
          {filterHint && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
              <Filter className="w-2.5 h-2.5 text-slate-400" />
              {filterHint}
            </span>
          )}
          {action}
        </div>
      </div>

      <div className="w-full flex-1 min-h-[260px] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
