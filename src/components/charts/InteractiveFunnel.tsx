import React from 'react';
import { useFilters } from '../../context/FilterContext';
import { getPlacementFunnelData } from '../../db/relationalStore';
import { Users, Briefcase, UserCheck, Award, CheckCircle2, TrendingDown } from 'lucide-react';

export const InteractiveFunnel: React.FC = () => {
  const { filteredStudents, setFilter } = useFilters();
  const funnelData = getPlacementFunnelData(filteredStudents);

  const stageIcons = [
    Users,
    Briefcase,
    UserCheck,
    Award,
    CheckCircle2,
    Briefcase
  ];

  const handleStageClick = (stageName: string) => {
    if (stageName === 'Total Students') {
      // no-op or clear
    } else if (stageName === 'Job Seekers') {
      setFilter('employmentStatus', 'Seeking');
    } else if (stageName === 'Accepted Offers' || stageName === 'Currently Working') {
      setFilter('placementStatus', 'Placed');
      setFilter('employmentStatus', 'Working');
    } else if (stageName === 'Received Offers') {
      setFilter('placementStatus', 'Placed');
    }
  };

  const total = funnelData[0]?.count || 1;

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {funnelData.map((stage, idx) => {
          const Icon = stageIcons[idx] || Users;
          const pctOfTotal = Math.round((stage.count / (total || 1)) * 100);
          const stepConversion = idx === 0 ? 100 : Math.round((stage.count / (funnelData[idx - 1].count || 1)) * 100);

          return (
            <div
              key={stage.stage}
              onClick={() => handleStageClick(stage.stage)}
              className="group relative p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-400">0{idx + 1}</span>
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs"
                  style={{ backgroundColor: stage.color }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {stage.count}
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-0.5 line-clamp-1">
                {stage.stage}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium">{pctOfTotal}% total</span>
                {idx > 0 && (
                  <span className="font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">
                    {stepConversion}% conv
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual horizontal stacked flow */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Cohort Retention & Progression Flow
        </h5>

        <div className="space-y-2.5">
          {funnelData.map((stage, idx) => {
            const widthPct = Math.max(6, Math.round((stage.count / (total || 1)) * 100));
            return (
              <div key={stage.stage} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-800 flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: stage.color }}
                    />
                    {stage.stage}
                  </span>
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
                    <span className="font-semibold text-slate-800">{stage.count}</span>
                    <span>({widthPct}%)</span>
                    {idx > 0 && stage.dropOff > 0 && (
                      <span className="flex items-center text-rose-500 text-[11px]">
                        <TrendingDown className="w-3 h-3 mr-0.5" />
                        -{stage.dropOff}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${widthPct}%`,
                      backgroundColor: stage.color
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
