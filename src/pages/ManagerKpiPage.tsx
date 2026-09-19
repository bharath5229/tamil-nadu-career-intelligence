import React from 'react';
import { useFilters } from '../context/FilterContext';
import { allEnrichedStudents, calculateKpiMetrics } from '../db/relationalStore';
import { EnrichedStudent } from '../types/database';
import { KpiCard } from '../components/common/KpiCard';
import {
  Award,
  UserCheck,
  CheckCircle,
  Briefcase,
  Rocket,
  Clock,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Sparkles
} from 'lucide-react';

export const ManagerKpiPage: React.FC = () => {
  const { kpiMetrics, setCurrentPage } = useFilters();

  const cohort2025 = allEnrichedStudents.filter((s: EnrichedStudent) => s.graduation_year === 2025);
  const cohort2026 = allEnrichedStudents.filter((s: EnrichedStudent) => s.graduation_year === 2026);

  const m2025 = calculateKpiMetrics(cohort2025);
  const m2026 = calculateKpiMetrics(cohort2026);

  const managerMetrics = [
    {
      name: 'Placement Rate',
      overall: `${kpiMetrics.placementRate}%`,
      y2025: `${m2025.placementRate}%`,
      y2026: `${m2026.placementRate}%`,
      delta: m2026.placementRate - m2025.placementRate,
      icon: Award,
      desc: 'Percentage of enrolled students receiving & accepting offers'
    },
    {
      name: 'Interview Conversion',
      overall: `${kpiMetrics.interviewConversionRate}%`,
      y2025: `${m2025.interviewConversionRate}%`,
      y2026: `${m2026.interviewConversionRate}%`,
      delta: m2026.interviewConversionRate - m2025.interviewConversionRate,
      icon: UserCheck,
      desc: 'Active job seekers shortlisted for technical & HR interviews'
    },
    {
      name: 'Offer Conversion',
      overall: `${kpiMetrics.offerConversionRate}%`,
      y2025: `${m2025.offerConversionRate}%`,
      y2026: `${m2026.offerConversionRate}%`,
      delta: m2026.offerConversionRate - m2025.offerConversionRate,
      icon: CheckCircle,
      desc: 'Interviewed candidates receiving formal employment offers'
    },
    {
      name: 'Employment Rate',
      overall: `${kpiMetrics.employmentRate}%`,
      y2025: `${m2025.employmentRate}%`,
      y2026: `${m2026.employmentRate}%`,
      delta: m2026.employmentRate - m2025.employmentRate,
      icon: Briefcase,
      desc: 'Graduates currently in active employment'
    },
    {
      name: 'Startup Employment',
      overall: `${kpiMetrics.startupEmploymentRate}%`,
      y2025: `${m2025.startupEmploymentRate}%`,
      y2026: `${m2026.startupEmploymentRate}%`,
      delta: m2026.startupEmploymentRate - m2025.startupEmploymentRate,
      icon: Rocket,
      desc: 'Share of working cohort placed in early/growth stage startups'
    },
    {
      name: 'Avg Time to Employment',
      overall: `${kpiMetrics.avgTimeToEmployment} mo`,
      y2025: `${m2025.avgTimeToEmployment} mo`,
      y2026: `${m2026.avgTimeToEmployment} mo`,
      delta: parseFloat((m2026.avgTimeToEmployment - m2025.avgTimeToEmployment).toFixed(1)),
      icon: Clock,
      desc: 'Months elapsed from graduation cycle to job commencement'
    },
    {
      name: 'Skill Gap Rate',
      overall: `${kpiMetrics.skillGapRate}%`,
      y2025: `${m2025.skillGapRate}%`,
      y2026: `${m2026.skillGapRate}%`,
      delta: m2026.skillGapRate - m2025.skillGapRate,
      icon: AlertTriangle,
      desc: 'Students with missing core competencies for target career goals'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Manager & Executive KPI Center
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Operational funnel conversion metrics, time-to-employment benchmarks, and YoY graduation cohort comparisons
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('opportunities')}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Product Interventions</span>
        </button>
      </div>

      {/* 7 Core Manager KPIs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Placement Rate"
          value={`${kpiMetrics.placementRate}%`}
          subtitle="Target threshold: >75%"
          icon={Award}
          color="emerald"
        />
        <KpiCard
          title="Interview Conversion"
          value={`${kpiMetrics.interviewConversionRate}%`}
          subtitle="Seekers to interviews"
          icon={UserCheck}
          color="blue"
        />
        <KpiCard
          title="Offer Conversion"
          value={`${kpiMetrics.offerConversionRate}%`}
          subtitle="Interviews to offers"
          icon={CheckCircle}
          color="purple"
        />
        <KpiCard
          title="Employment Rate"
          value={`${kpiMetrics.employmentRate}%`}
          subtitle="Active workforce entry"
          icon={Briefcase}
          color="cyan"
        />
        <KpiCard
          title="Startup Employment"
          value={`${kpiMetrics.startupEmploymentRate}%`}
          subtitle="Tech startup ecosystem"
          icon={Rocket}
          color="indigo"
        />
        <KpiCard
          title="Avg Time to Employment"
          value={`${kpiMetrics.avgTimeToEmployment} mo`}
          subtitle="From campus season"
          icon={Clock}
          color="amber"
        />
        <KpiCard
          title="Skill Gap Rate"
          value={`${kpiMetrics.skillGapRate}%`}
          subtitle="Candidates with gaps"
          icon={AlertTriangle}
          color="rose"
        />
      </div>

      {/* Year-over-Year (YoY) 2025 vs 2026 Trend Matrix Table */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              Graduation Cohort Comparison: 2025 vs 2026
            </h3>
            <p className="text-xs text-slate-500">
              Comparative benchmark of operational KPIs between the graduated 2025 class and the current 2026 cohort
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
              2025 Cohort: <strong>{cohort2025.length}</strong>
            </span>
            <span className="font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
              2026 Cohort: <strong>{cohort2026.length}</strong>
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4">Performance KPI</th>
                <th className="py-3.5 px-4">Description</th>
                <th className="py-3.5 px-4 text-center">2025 Class</th>
                <th className="py-3.5 px-4 text-center">2026 Class</th>
                <th className="py-3.5 px-4 text-center">YoY Delta</th>
                <th className="py-3.5 px-4 text-center">Status Observation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {managerMetrics.map(item => {
                const Icon = item.icon;
                const isPositive = item.delta > 0;
                const isNegative = item.delta < 0;

                return (
                  <tr key={item.name} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.name}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 max-w-xs">
                      {item.desc}
                    </td>
                    <td className="py-3.5 px-4 text-center font-semibold text-slate-800 font-mono text-sm">
                      {item.y2025}
                    </td>
                    <td className="py-3.5 px-4 text-center font-semibold text-slate-900 font-mono text-sm">
                      {item.y2026}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span
                        className={`inline-flex items-center gap-1 font-bold text-xs px-2 py-0.5 rounded-full ${
                          item.name === 'Skill Gap Rate' || item.name === 'Avg Time to Employment'
                            ? (isNegative ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700')
                            : (isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700')
                        }`}
                      >
                        {isPositive ? <TrendingUp className="w-3 h-3" /> : (isNegative ? <TrendingDown className="w-3 h-3" /> : null)}
                        {item.delta > 0 ? `+${item.delta}` : item.delta}
                        {item.name.includes('Rate') || item.name.includes('Conversion') ? '%' : ''}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="text-[11px] text-slate-500 font-medium">
                        {item.name === 'Placement Rate'
                          ? '2026 cycle currently active'
                          : (item.name === 'Startup Employment' ? 'Increased startup absorption' : 'Aligned with sample pattern')}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
