import React from 'react';
import { useFilters } from '../context/FilterContext';
import { InteractiveFunnel } from '../components/charts/InteractiveFunnel';
import { getPlacementFunnelData } from '../db/relationalStore';
import {
  Sparkles
} from 'lucide-react';

export const PlacementFunnelPage: React.FC = () => {
  const { filteredStudents, kpiMetrics, setCurrentPage } = useFilters();
  const funnel = getPlacementFunnelData(filteredStudents);

  const interviewDrop = funnel[1].count - funnel[2].count;
  const offerDrop = funnel[2].count - funnel[3].count;
  const acceptanceDrop = funnel[3].count - funnel[4].count;

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Interactive Placement & Hiring Funnel
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Stage-by-stage candidate conversion from academic enrollment to active professional employment
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('opportunities')}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-200" />
          <span>See Funnel Optimization Tools</span>
        </button>
      </div>

      {/* Main Interactive Funnel Widget */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              6-Stage Candidate Pipeline
            </h3>
            <p className="text-xs text-slate-500">
              Click any stage card below to filter the student records at that milestone
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Overall Pipeline Efficiency: <strong className="text-slate-900">{kpiMetrics.totalStudents > 0 ? Math.round((funnel[5].count / funnel[0].count) * 100) : 0}%</strong>
            </span>
          </div>
        </div>

        <InteractiveFunnel />
      </div>

      {/* Conversion Bottlenecks & Analysis Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Bottleneck 1: Seeker to Interview */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Stage 2 → 3 Conversion
            </span>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              {kpiMetrics.interviewConversionRate}% Rate
            </span>
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Resume & Screening Filter</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {interviewDrop > 0
              ? `${interviewDrop} candidates in this sample did not progress from job seeking to an active interview invitation, indicating an initial resume/skill screening barrier.`
              : `All active seekers achieved interview status in this current filtered cohort.`}
          </p>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Proposed Solution:</span>
            <strong className="text-blue-700 font-semibold">AI Resume Analyzer</strong>
          </div>
        </div>

        {/* Bottleneck 2: Interview to Offer */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Stage 3 → 4 Conversion
            </span>
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              {kpiMetrics.offerConversionRate}% Rate
            </span>
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Technical Interview Clearance</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {offerDrop > 0
              ? `${offerDrop} interviewed candidates did not secure a formal job offer, likely reflecting technical coding or system design evaluation gaps.`
              : `High technical clearing rate observed in this filtered cohort.`}
          </p>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Proposed Solution:</span>
            <strong className="text-purple-700 font-semibold">Interview Readiness Score</strong>
          </div>
        </div>

        {/* Bottleneck 3: Offer to Acceptance */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Stage 4 → 5 Conversion
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {kpiMetrics.acceptanceRate}% Rate
            </span>
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Offer Acceptance & Joining</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {acceptanceDrop > 0
              ? `${acceptanceDrop} students declined offers or pivoted to higher studies/other competitive pathways.`
              : `Near 100% acceptance and joining adherence observed among candidates receiving offers.`}
          </p>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Proposed Solution:</span>
            <strong className="text-emerald-700 font-semibold">AI Career Match Engine</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
