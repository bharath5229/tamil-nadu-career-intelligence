import React from 'react';
import { useFilters } from '../../context/FilterContext';
import { allEnrichedStudents } from '../../db/relationalStore';
import { Badge } from '../common/Badge';
import {
  X,
  GraduationCap,
  Briefcase,
  Target,
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const StudentProfileModal: React.FC = () => {
  const { selectedStudentId, setSelectedStudentId } = useFilters();

  if (!selectedStudentId) return null;

  const student = allEnrichedStudents.find(s => s.student_id === selectedStudentId);
  if (!student) return null;

  const getPlacementBadgeVariant = (status: string) => {
    return status === 'Placed' ? 'success' : 'neutral';
  };

  const getEmploymentBadgeVariant = (status: string) => {
    switch (status) {
      case 'Working': return 'success';
      case 'Seeking': return 'warning';
      case 'Higher Studies': return 'purple';
      default: return 'neutral';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in my-8">
        {/* Header with Anonymized ID & Privacy Shield */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 font-mono font-bold text-sm">
              {student.student_id.slice(-3)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-mono">
                  {student.student_id}
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Anonymized Record
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Class of {student.graduation_year} • {student.district}, Tamil Nadu
              </p>
            </div>
          </div>

          <button
            onClick={() => setSelectedStudentId(null)}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[calc(85vh-90px)] overflow-y-auto">
          {/* Status & Outcome Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Placement Status
              </span>
              <div className="mt-1">
                <Badge variant={getPlacementBadgeVariant(student.placement_status)}>
                  {student.placement_status}
                </Badge>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Employment Status
              </span>
              <div className="mt-1">
                <Badge variant={getEmploymentBadgeVariant(student.employment_status)}>
                  {student.employment_status}
                </Badge>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Company Type
              </span>
              <span className="text-xs font-semibold text-slate-800 mt-1 block">
                {student.company_type || 'N/A'}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Salary Band
              </span>
              <span className="text-xs font-semibold text-slate-800 mt-1 block">
                {student.salary_band || 'N/A'}
              </span>
            </div>
          </div>

          {/* Section 1: Education */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Academic Profile
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h5 className="text-sm font-semibold text-slate-900">{student.degree}</h5>
                  <p className="text-xs text-slate-600 font-medium">{student.college_name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono">
                    CGPA: {student.cgpa.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {student.college_type}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Affiliated with: <span className="font-medium text-slate-700">{student.university_name}</span>
              </p>
            </div>
          </div>

          {/* Section 2: Stated Career Goal */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-purple-600" />
              Stated Career Aspiration
            </h4>
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-purple-700 font-semibold block">Target Role</span>
                <span className="text-base font-bold text-purple-950">{student.career_goal}</span>
              </div>
              {student.job_role && student.job_role !== 'Not Applicable' && (
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Current Industry</span>
                  <span className="text-xs font-semibold text-slate-800">{student.industry}</span>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Verified Skills & Proficiencies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-600" />
              Verified Skills & Proficiencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {student.skills.map(sk => {
                const levelColor = {
                  Advanced: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  Intermediate: 'bg-blue-50 text-blue-700 border-blue-200',
                  Beginner: 'bg-slate-50 text-slate-700 border-slate-200'
                }[sk.skill_level];

                return (
                  <div
                    key={sk.skill_id}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-2 ${levelColor}`}
                  >
                    <span>{sk.skill_name}</span>
                    <span className="text-[10px] uppercase font-bold opacity-75">
                      {sk.skill_level}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Automated Skill Gap Analysis */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Target Skill Gap Analysis
            </h4>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">
                  Benchmark Skills for <strong className="text-slate-900">{student.career_goal}</strong>:
                </span>
                {student.has_skill_gap ? (
                  <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-100 font-semibold px-2 py-0.5 rounded text-[11px]">
                    <AlertTriangle className="w-3 h-3 text-amber-600" />
                    {student.missing_skills.length} Gap{student.missing_skills.length > 1 ? 's' : ''} Identified
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 font-semibold px-2 py-0.5 rounded text-[11px]">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Target Aligned
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">Acquired Target Skills:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {student.target_required_skills
                      .filter(s => !student.missing_skills.includes(s))
                      .map(s => (
                        <span key={s} className="px-2 py-0.5 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {s}
                        </span>
                      ))}
                    {student.target_required_skills.filter(s => !student.missing_skills.includes(s)).length === 0 && (
                      <span className="text-xs text-slate-400 italic">None yet acquired</span>
                    )}
                  </div>
                </div>

                {student.missing_skills.length > 0 && (
                  <div>
                    <span className="text-[11px] font-bold text-rose-500 block mb-1">Recommended Upskilling Gap:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {student.missing_skills.map(s => (
                        <span key={s} className="px-2 py-0.5 text-xs bg-rose-50 text-rose-700 border border-rose-200 rounded font-medium flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-rose-500" />
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 5: Recommended Career Pathway */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              Tailored Career Pathway
            </h4>

            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h6 className="text-xs font-bold text-slate-900">Skill Bridging Roadmap</h6>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {student.missing_skills.length > 0
                      ? `Complete structured mini-projects in ${student.missing_skills.join(', ')} to build an industry-ready portfolio.`
                      : `Deepen advanced mastery with distributed systems and system design problems.`}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h6 className="text-xs font-bold text-slate-900">Placement Preparation</h6>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Focus on mock technical interviews for {student.career_goal} roles with emphasis on {student.target_required_skills.slice(0, 2).join(' & ')}.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h6 className="text-xs font-bold text-slate-900">Target Ecosystem Placement</h6>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Target Tamil Nadu Tech hubs in Chennai (OMR / DLF / Tidel) and Coimbatore (Tidel Neo / Eachanari) with startups and high-growth MNCs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Source: TN Graduate Intelligence Prototype Sample Record
          </span>
          <button
            onClick={() => setSelectedStudentId(null)}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
