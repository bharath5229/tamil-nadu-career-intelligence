import React from 'react';
import { useFilters } from '../context/FilterContext';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setCurrentPage, kpiMetrics } = useFilters();

  const personas = [
    {
      role: 'CareerTech Managers',
      desc: 'Discover hiring bottlenecks, drop-off rates across placement funnels, and assess target career readiness.',
      badge: 'Product Strategy'
    },
    {
      role: 'Career Analysts',
      desc: 'Explore empirical associations between skills, degree specializations, and startup vs MNC hiring.',
      badge: 'Data Science'
    },
    {
      role: 'College Placement Teams',
      desc: 'Benchmark institutional outcomes, on-campus vs off-campus placements, and time-to-employment.',
      badge: 'Institutions'
    },
    {
      role: 'Career Coaches & Mentors',
      desc: 'Pinpoint candidate-level skill gaps and recommend personalized bridging roadmaps.',
      badge: 'Coaching'
    },
    {
      role: 'Product & Ops Teams',
      desc: 'Identify validated opportunities for AI Career Gap Analyzers, Resume Screeners, and Match Engines.',
      badge: 'Innovation'
    }
  ];

  return (
    <div className="space-y-10 animate-fade-in pb-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white p-8 sm:p-12 shadow-xl border border-slate-700/50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          {/* Highlight Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              100 Sample Records
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              2025–2026 Graduates
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              Interactive Career Analytics
            </span>
          </div>

          {/* Core Headline & Subheading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              What happens to students after graduation?
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              A data-driven prototype exploring graduation, placement, employment and career outcomes through anonymized student data.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentPage('opportunities')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Explore Product Opportunities</span>
            </button>
          </div>

          {/* Metric Teaser Bar */}
          <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div>
              <span className="text-2xl sm:text-3xl font-bold text-white block">
                {kpiMetrics.placementRate}%
              </span>
              <span className="text-xs text-slate-400 font-medium">Sample Placement Rate</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold text-white block">
                {kpiMetrics.startupEmploymentRate}%
              </span>
              <span className="text-xs text-slate-400 font-medium">Startup Absorption</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold text-white block">
                {kpiMetrics.skillGapRate}%
              </span>
              <span className="text-xs text-slate-400 font-medium">Observed Skill Gaps</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold text-white block">
                {kpiMetrics.avgTimeToEmployment} mo
              </span>
              <span className="text-xs text-slate-400 font-medium">Avg Time to Employment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Relational Chain Architecture Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Interconnected Educational & Career Pathways
            </h2>
            <p className="text-xs text-slate-500">
              Explore dynamic multi-dimensional relationships across Tamil Nadu higher education
            </p>
          </div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Relational Model: 8 Tables
          </span>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-x-auto">
          <div className="flex items-center min-w-[750px] justify-between text-xs font-semibold text-slate-700 py-2">
            {[
              'Students',
              'Colleges',
              'Universities',
              'Degrees',
              'Skills',
              'Graduation Year',
              'Placement Status',
              'Employment Status',
              'Company Type',
              'Job Role',
              'Industry',
              'Career Outcomes'
            ].map((node, i, arr) => (
              <React.Fragment key={node}>
                <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-xs">
                  <span className="text-slate-800 font-semibold block">{node}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-blue-500 font-bold px-1 text-sm">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Target User Personas Grid */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Built for Five Key CareerTech Stakeholders
          </h2>
          <p className="text-xs text-slate-500">
            Tailored views designed to solve real-world problems in student placement, career coaching, and tech hiring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((p, idx) => (
            <div
              key={p.role}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">0{idx + 1}</span>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                  {p.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{p.role}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {/* Quick jump card */}
          <div
            onClick={() => setCurrentPage('opportunities')}
            className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm flex flex-col justify-between cursor-pointer hover:opacity-95 transition"
          >
            <div>
              <span className="text-[11px] font-bold text-blue-200 uppercase tracking-wider block mb-1">
                From Data to Action
              </span>
              <h3 className="text-base font-bold text-white">AI Career Gap Analyzer</h3>
              <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                Test our proposed CareerTech product prototype that turns candidate skill gaps into custom learning roadmaps.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-white">
              <span>Try Interactive Prototype</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prototype & Methodology Notice */}
      <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block text-sm text-amber-950">
              Prototype & Research Disclaimer
            </span>
            <p className="text-amber-800 text-xs mt-0.5">
              This system operates on an anonymized sample of 102 records calibrated for prototype demonstration. It is not statistically representative of all Tamil Nadu higher education students. No PII is collected or stored.
            </p>
          </div>
        </div>
        <button
          onClick={() => setCurrentPage('methodology')}
          className="shrink-0 px-3.5 py-1.5 rounded-xl bg-amber-200/80 hover:bg-amber-300 text-amber-950 font-bold text-xs transition cursor-pointer"
        >
          View Methodology
        </button>
      </div>
    </div>
  );
};
