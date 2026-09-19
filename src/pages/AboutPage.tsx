import React from 'react';
import { useFilters } from '../context/FilterContext';
import {
  ArrowRight,
  Database,
  BarChart3,
  Lightbulb,
  AlertCircle,
  Rocket,
  FlaskConical,
  Trophy
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useFilters();

  const frameworkSteps = [
    {
      step: 1,
      title: 'Data',
      icon: Database,
      color: 'blue',
      desc: 'Normalized academic records, college cohorts, skills matrices, and employment events across Tamil Nadu.'
    },
    {
      step: 2,
      title: 'Analytics',
      icon: BarChart3,
      color: 'indigo',
      desc: 'Dynamic relational joins, cross-dimensional filters, multi-stage funnel drop-off telemetry.'
    },
    {
      step: 3,
      title: 'Insight',
      icon: Lightbulb,
      color: 'emerald',
      desc: 'Observing empirical associations without false causality (e.g. tool proficiencies, startup absorption patterns).'
    },
    {
      step: 4,
      title: 'User Problem',
      icon: AlertCircle,
      color: 'rose',
      desc: 'Pinpointing where candidates falter: resume screening rejection, missing modern framework skills, or opaque roadmaps.'
    },
    {
      step: 5,
      title: 'Product Opportunity',
      icon: Rocket,
      color: 'purple',
      desc: 'Formulating targeted CareerTech software: AI Career Gap Analyzers, ATS Keyword Correctors, Readiness Indexes.'
    },
    {
      step: 6,
      title: 'Experiment',
      icon: FlaskConical,
      color: 'amber',
      desc: 'Deploying high-fidelity prototypes, testing interactive gap calculators with pilot college cohorts.'
    },
    {
      step: 7,
      title: 'Outcome',
      icon: Trophy,
      color: 'cyan',
      desc: 'Higher verified placement velocity, reduced time-to-employment, and aligned employer satisfaction.'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Founder Message Hero */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white shadow-xl border border-slate-700/50">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Founder's Note
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Hi, I'm Bharath S.
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/30 text-blue-300 border border-blue-400/40">
                Product Manager Aspirant
              </span>
            </div>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              I'm an aspiring Product Manager who wants to grow and build impactful solutions. I created this prototype as a simple project for student placement management to understand career outcomes and practice connecting real-world data to user problems.
            </p>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              For me, this project is a stepping stone to learn, grow, and explore how to turn raw information into meaningful products:
            </p>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-sm font-semibold text-blue-200">
              Data → Insights → Candidate Problems → Potential Product Opportunities
            </div>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={() => setCurrentPage('opportunities')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition cursor-pointer"
            >
              <span>Explore Product Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition cursor-pointer"
            >
              <span>Return to Dashboard</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section: From Data to Product */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            From Data to Product
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            The core methodology driving our product development philosophy
          </p>
        </div>

        {/* 7-Step Visual Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
          {frameworkSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-3 relative group hover:border-blue-300 hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-400">0{s.step}</span>
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-blue-600 group-hover:text-white transition">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{s.title}</h4>
                  <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Phase {s.step} of 7</span>
                  {idx < 6 && <span className="text-blue-500 font-bold hidden lg:inline">→</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Philosophy Statement Card */}
      <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
        <h4 className="font-bold text-slate-900 text-sm">
          Why Prototype In Tamil Nadu's Higher Education Context?
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          Tamil Nadu is home to one of India's largest concentrations of engineering and technical institutions, graduating hundreds of thousands of candidates annually across premier universities (Anna University, University of Madras, Bharathiar, Madurai Kamaraj, Bharathidasan) and top colleges in Chennai, Coimbatore, Madurai, and Trichy.
        </p>
        <p className="text-xs text-slate-600 leading-relaxed">
          While campus placement cell numbers are frequently cited in press releases, deep granular telemetry on <em>why</em> students face interview drop-offs or how their curriculum mismatches modern SaaS / AI startup requirements has remained siloed. This prototype demonstrates how actionable data analytics directly seeds next-generation CareerTech software ventures.
        </p>
      </div>
    </div>
  );
};
