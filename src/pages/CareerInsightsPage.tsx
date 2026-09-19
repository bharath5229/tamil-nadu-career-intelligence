import React from 'react';
import { useFilters } from '../context/FilterContext';
import { generateNonCausalInsights } from '../db/relationalStore';
import {
  Lightbulb,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export const CareerInsightsPage: React.FC = () => {
  const { filteredStudents, setCurrentPage } = useFilters();
  const insights = generateNonCausalInsights(filteredStudents);

  const getAccentStyles = (accent: string) => {
    switch (accent) {
      case 'blue': return 'bg-blue-50 border-blue-200 text-blue-900 border-l-4 border-l-blue-600';
      case 'indigo': return 'bg-indigo-50 border-indigo-200 text-indigo-900 border-l-4 border-l-indigo-600';
      case 'emerald': return 'bg-emerald-50 border-emerald-200 text-emerald-900 border-l-4 border-l-emerald-600';
      case 'amber': return 'bg-amber-50 border-amber-200 text-amber-900 border-l-4 border-l-amber-600';
      case 'purple': return 'bg-purple-50 border-purple-200 text-purple-900 border-l-4 border-l-purple-600';
      case 'rose': return 'bg-rose-50 border-rose-200 text-rose-900 border-l-4 border-l-rose-600';
      default: return 'bg-slate-50 border-slate-200 text-slate-900 border-l-4 border-l-slate-600';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Automated Descriptive Career Insights
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Empirical statistical associations generated dynamically from current filtered records
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('opportunities')}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Translate to Product Features</span>
        </button>
      </div>

      {/* Non-Causality Methodological Notice */}
      <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300 text-amber-950 flex items-start gap-3 shadow-xs">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs">
          <h4 className="font-bold text-amber-950 text-sm">
            Methodological Standards: Non-Causal Descriptive Reporting
          </h4>
          <p className="text-amber-800 leading-relaxed">
            All analytical findings presented below describe statistical co-occurrences and observational frequencies within this 102-record prototype dataset. 
            <strong> Causation is not inferred or asserted</strong>. Terms such as <em>"Among this sample..."</em>, <em>"Observed in this dataset..."</em>, and <em>"Association observed in the sample..."</em> are applied strictly to preserve analytical integrity.
          </p>
        </div>
      </div>

      {/* Dynamic Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((item, idx) => {
          return (
            <div
              key={item.title}
              className={`p-5 rounded-2xl border shadow-xs space-y-2.5 transition hover:shadow-md ${getAccentStyles(item.accent)}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/70 border border-current/20">
                  {item.tag}
                </span>
                <span className="text-xs font-mono font-bold opacity-60">
                  Observation #{idx + 1}
                </span>
              </div>

              <h3 className="text-base font-bold tracking-tight">
                {item.title}
              </h3>

              <p className="text-xs leading-relaxed opacity-90 font-medium">
                "{item.text}"
              </p>

              <div className="pt-2 border-t border-current/10 flex items-center justify-between text-[11px] opacity-75">
                <span>Dynamically computed from active filters</span>
                <span className="font-semibold">Sample Scope: {filteredStudents.length} Records</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytical Synthesis Card */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <h3 className="font-bold text-slate-900 text-base">
            Executive Synthesis & Product Thesis
          </h3>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          The statistical co-occurrences in this sample reveal three actionable patterns for educational and CareerTech products:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h5 className="font-bold text-slate-900">1. Core Tooling Alignment</h5>
            <p className="text-slate-600">
              Proficiency in industry-standard tooling (SQL, Python, React) has strong descriptive co-occurrence with confirmed placements.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h5 className="font-bold text-slate-900">2. Startup Talent Absorption</h5>
            <p className="text-slate-600">
              Startups represent a significant placement destination, creating opportunities for practical full-stack and product-oriented skill certifications.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h5 className="font-bold text-slate-900">3. Targeted Bridge Curriculum</h5>
            <p className="text-slate-600">
              The high prevalence of candidate skill gaps relative to target career goals provides immediate commercial validation for personalized gap analyzers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
