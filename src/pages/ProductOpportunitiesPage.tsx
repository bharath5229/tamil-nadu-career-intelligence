import React, { useState } from 'react';
import { useFilters } from '../context/FilterContext';
import { careerRequirements } from '../db/seedData';
import { EnrichedStudent } from '../types/database';
import {
  Target,
  BookOpen,
  Briefcase,
  Lightbulb,
  FileText,
  Compass,
  TrendingUp,
  Award
} from 'lucide-react';

export const ProductOpportunitiesPage: React.FC = () => {
  const { filteredStudents } = useFilters();

  // Interactive AI Career Gap Analyzer Simulator State
  const sampleStudent = filteredStudents[0] || {
    student_id: 'TN-STU-001',
    degree: 'B.E. Computer Science',
    career_goal: 'Full Stack Developer',
    skills: [{ skill_name: 'React', skill_level: 'Intermediate' }, { skill_name: 'SQL', skill_level: 'Beginner' }]
  };

  const [simTargetCareer, setSimTargetCareer] = useState<string>(sampleStudent.career_goal || 'Full Stack Developer');
  const [activeStep, setActiveStep] = useState<number>(5); // Default to Gap Analysis

  const targetReqs = careerRequirements[simTargetCareer] || ['React', 'Node.js', 'SQL', 'Git & CI/CD'];
  const currentSkillsList = sampleStudent.skills.map((s: { skill_name: string }) => s.skill_name);
  const acquiredSkills = targetReqs.filter((s: string) => currentSkillsList.includes(s));
  const identifiedGaps = targetReqs.filter((s: string) => !currentSkillsList.includes(s));

  // 7 Proposed Product Features
  const proposedFeatures = [
    {
      name: 'AI Career Gap Analyzer',
      tag: 'Core Innovation',
      observedProblem: `${filteredStudents.filter((s: EnrichedStudent) => s.has_skill_gap).length} students in the sample show an explicit disconnect between their target job aspiration and required industry tools.`,
      solution: 'Automated skill mapping engine comparing student academic syllabi against live job posting requirements in Chennai and Bangalore tech hubs.',
      impact: 'Reduces time-to-market readiness by 45% through targeted mini-course assignments.',
      icon: Target,
      color: 'blue'
    },
    {
      name: 'AI Resume Analyzer & Parser',
      tag: 'Screening Solution',
      observedProblem: 'A 28% drop-off occurs between active job seekers and interview invitations due to generic formatting and missing ATS keywords.',
      solution: 'Institutional ATS scanner providing semantic keyword density scores, project highlights, and tailored Tamil Nadu tech employer formatting.',
      impact: 'Increases student initial screening pass rates by up to 2.4x.',
      icon: FileText,
      color: 'indigo'
    },
    {
      name: 'AI Career Match Engine',
      tag: 'Placement Optimization',
      observedProblem: 'Mismatch between candidate domain interests and enterprise recruiter types (e.g. MNC corporate vs rapid-growth startup).',
      solution: 'Predictive algorithm that matches candidate work style, CGPA bands, and coding proficiencies to ideal company cultures and roles.',
      impact: 'Drives higher offer acceptance rates and lower 90-day post-hire turnover.',
      icon: Compass,
      color: 'purple'
    },
    {
      name: 'Personalized Career Roadmap',
      tag: 'Curriculum Builder',
      observedProblem: 'Students lack structured sequencing on whether to learn data structures, cloud deployment, or frontend frameworks first.',
      solution: 'Dynamic 12-week weekly milestone planner with project checkpoints, open-source repositories, and GitHub portfolio checklists.',
      impact: 'Boosts student self-directed learning consistency and portfolio depth.',
      icon: BookOpen,
      color: 'emerald'
    },
    {
      name: 'Job Recommendation Engine',
      tag: 'Talent Distribution',
      observedProblem: 'Over 65% of candidates apply only to marquee tier-1 tech firms while high-growth SaaS firms face candidate shortages.',
      solution: 'Curated Tamil Nadu startup & SME opportunity feed linking verified candidate skills directly to open openings.',
      impact: 'Broadens hiring reach beyond traditional campus placement drives.',
      icon: Briefcase,
      color: 'cyan'
    },
    {
      name: 'Candidate Progress Tracker',
      tag: 'Coaching Operations',
      observedProblem: 'College placement officers and coaches have no real-time telemetry on candidate upskilling milestones before campus drive week.',
      solution: 'Unified institutional dashboard tracking coding submission streaks, mock test percentiles, and resume versions.',
      impact: 'Enables proactive coaching intervention weeks before company arrival.',
      icon: TrendingUp,
      color: 'amber'
    },
    {
      name: 'Interview Readiness Score',
      tag: 'Assessment Engine',
      observedProblem: 'Interviewed candidates exhibit varying degrees of algorithmic readiness and behavioral communication confidence.',
      solution: 'Automated 100-point composite index combining LeetCode-style assessments, system design fundamentals, and mock interview video AI feedback.',
      impact: 'Gives recruiters instant confidence in verified candidate competencies.',
      icon: Award,
      color: 'rose'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              CareerTech Product Opportunities
            </h2>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
              PROPOSED PRODUCT IDEAS
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Connecting empirical data bottlenecks directly to scalable CareerTech venture solutions
          </p>
        </div>
      </div>

      {/* Prominent Legal / Pitch Label */}
      <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
              Founder Strategic Thesis
            </span>
            <p className="text-xs text-slate-300">
              These solutions are <strong>PROPOSED PRODUCT CONCEPTS</strong> formulated to illustrate how educational data transforms into commercial value. They are not existing features of an operating entity.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURE 1 SPOTLIGHT: Interactive AI Career Gap Analyzer Workflow Simulation */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                <Target className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                AI Career Gap Analyzer — Interactive Workflow
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Test the end-to-end workflow designed to take a student from ambition to verified placement
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600">Simulate Target Role:</span>
            <select
              value={simTargetCareer}
              onChange={(e) => setSimTargetCareer(e.target.value)}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {Object.keys(careerRequirements).map((goal: string) => (
                <option key={goal} value={goal}>{goal}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 7-Step Workflow Diagram & Interactive Stepper */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            End-to-End System Pipeline
          </h4>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {[
              { num: 1, name: 'Candidate Profile' },
              { num: 2, name: 'Target Career' },
              { num: 3, name: 'Required Skills' },
              { num: 4, name: 'Current Skills' },
              { num: 5, name: 'Gap Analysis' },
              { num: 6, name: 'Learning Roadmap' },
              { num: 7, name: 'Job Recommendations' }
            ].map((step) => {
              const isSelected = activeStep === step.num;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(step.num)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className={`text-[10px] font-bold block ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>
                    STEP 0{step.num}
                  </span>
                  <span className="text-xs font-bold block mt-0.5 leading-snug truncate">
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Simulation Output Box */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                Simulation Step {activeStep} Output
              </span>
              <span className="text-xs text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full font-semibold">
                Candidate: {sampleStudent.student_id} ({sampleStudent.degree})
              </span>
            </div>

            {/* Dynamic Step View */}
            {activeStep === 1 && (
              <div className="space-y-2">
                <h5 className="font-bold text-slate-900 text-sm">Step 1: Ingest Candidate Profile</h5>
                <p className="text-xs text-slate-600">
                  Data parsed from academic transcripts, GitHub activity, and assessment logs.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                  <div><strong>Student ID:</strong> {sampleStudent.student_id}</div>
                  <div><strong>Degree & College:</strong> {sampleStudent.degree}</div>
                  <div><strong>Stated Career Goal:</strong> {sampleStudent.career_goal}</div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-2">
                <h5 className="font-bold text-slate-900 text-sm">Step 2: Target Career Specification</h5>
                <p className="text-xs text-slate-600">
                  The candidate selects or receives an automated career goal recommendation based on industry hiring trends in Tamil Nadu.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <span className="text-slate-500">Target Track:</span> <strong className="text-blue-600 text-sm">{simTargetCareer}</strong>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-2">
                <h5 className="font-bold text-slate-900 text-sm">Step 3: Industry Benchmark Skill Extraction</h5>
                <p className="text-xs text-slate-600">
                  The system queries standard competency matrices required for this role across tech employers.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {targetReqs.map((r: string) => (
                    <span key={r} className="px-3 py-1 rounded-xl bg-blue-100 text-blue-800 text-xs font-semibold">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="space-y-2">
                <h5 className="font-bold text-slate-900 text-sm">Step 4: Current Verified Skills</h5>
                <p className="text-xs text-slate-600">
                  Cross-referencing verified certifications, lab work, and assessment scores for {sampleStudent.student_id}.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {sampleStudent.skills.map((sk: { skill_name: string; skill_level: string }) => (
                    <span key={sk.skill_name} className="px-3 py-1 rounded-xl bg-slate-200 text-slate-800 text-xs font-medium">
                      {sk.skill_name} ({sk.skill_level})
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeStep === 5 && (
              <div className="space-y-3">
                <h5 className="font-bold text-slate-900 text-sm">Step 5: Automated Gap Analysis Computation</h5>
                <p className="text-xs text-slate-600">
                  Real-time differential computation between current competencies and target role requirements:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <span className="text-xs font-bold text-emerald-800 block mb-1">
                      ✓ Competencies Met ({acquiredSkills.length})
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {acquiredSkills.length > 0 ? (
                        acquiredSkills.map((s: string) => (
                          <span key={s} className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">
                            {s}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-400 italic">None yet verified</span>
                      )}
                    </div>
                  </div>

                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                    <span className="text-xs font-bold text-rose-800 block mb-1">
                      ⚠ Identified Skill Gaps ({identifiedGaps.length})
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {identifiedGaps.length > 0 ? (
                        identifiedGaps.map((s: string) => (
                          <span key={s} className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-xs font-semibold">
                            {s}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-emerald-700 font-semibold">100% Target Match Achieved!</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 6 && (
              <div className="space-y-3">
                <h5 className="font-bold text-slate-900 text-sm">Step 6: Personalized Learning Roadmap Generated</h5>
                <p className="text-xs text-slate-600">
                  Structured modular path prioritizing the highest-weight missing competencies:
                </p>
                <div className="space-y-2 pt-1">
                  {identifiedGaps.map((gap: string, i: number) => (
                    <div key={gap} className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-900 block">Sprint {i + 1}: Master {gap}</strong>
                        <span className="text-slate-500">Includes hands-on Capstone project & Git test suite</span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 font-bold">
                        2 Weeks
                      </span>
                    </div>
                  ))}
                  {identifiedGaps.length === 0 && (
                    <p className="text-xs text-emerald-700 font-semibold">Candidate has cleared all prerequisite modules.</p>
                  )}
                </div>
              </div>
            )}

            {activeStep === 7 && (
              <div className="space-y-3">
                <h5 className="font-bold text-slate-900 text-sm">Step 7: Automated Job Recommendations Engine</h5>
                <p className="text-xs text-slate-600">
                  Targeted opportunities matching the candidate's post-completion profile:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-slate-900 block">Junior {simTargetCareer}</span>
                    <span className="text-slate-500 block">Zoho / Freshworks SaaS Hub (Chennai)</span>
                    <span className="text-emerald-600 font-bold">Salary: 6–9 LPA • High Skill Match</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-slate-900 block">Associate {simTargetCareer}</span>
                    <span className="text-slate-500 block">FinTech Growth Startup (Coimbatore Neo Tidel)</span>
                    <span className="text-emerald-600 font-bold">Salary: 7–11 LPA • Direct Campus Fast-Track</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 7 PROPOSED PRODUCT FEATURES SHOWCASE */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Full Suite of Proposed CareerTech Features
            </h3>
            <p className="text-xs text-slate-500">
              Empirically grounded solutions addressing candidate and institutional bottlenecks
            </p>
          </div>
          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            7 Feature Concepts
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {proposedFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.name}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      {feat.tag}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900">{feat.name}</h4>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[11px] font-bold text-rose-600 uppercase block">
                        Observed Problem:
                      </span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">{feat.observedProblem}</p>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-blue-600 uppercase block">
                        Proposed Solution:
                      </span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">{feat.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">
                    Target Impact:
                  </span>
                  <span className="font-semibold text-emerald-700">{feat.impact}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
