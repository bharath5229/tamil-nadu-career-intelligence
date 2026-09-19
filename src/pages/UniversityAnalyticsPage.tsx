import React, { useState } from 'react';
import { universities, colleges } from '../db/seedData';
import { allEnrichedStudents } from '../db/relationalStore';
import { University, College, EnrichedStudent } from '../types/database';
import { KpiCard } from '../components/common/KpiCard';
import {
  Building2,
  GraduationCap,
  Users,
  Award,
  Briefcase,
  MapPin
} from 'lucide-react';

export const UniversityAnalyticsPage: React.FC = () => {
  const [selectedUnivId, setSelectedUnivId] = useState<string>(universities[0].university_id);

  const activeUniv = universities.find((u: University) => u.university_id === selectedUnivId) || universities[0];
  const affiliatedColleges = colleges.filter((c: College) => c.university_id === selectedUnivId);
  const univStudents = allEnrichedStudents.filter((s: EnrichedStudent) => s.university_id === selectedUnivId);

  const totalStudents = univStudents.length;
  const placedStudents = univStudents.filter((s: EnrichedStudent) => s.placement_status === 'Placed').length;
  const workingStudents = univStudents.filter((s: EnrichedStudent) => s.employment_status === 'Working').length;

  const placementRate = totalStudents > 0 ? Math.round((placedStudents / totalStudents) * 100) : 0;
  const employmentRate = totalStudents > 0 ? Math.round((workingStudents / totalStudents) * 100) : 0;

  // College-level breakdown for this university
  const collegeBreakdownData = affiliatedColleges.map((c: College) => {
    const studentsInCollege = univStudents.filter((s: EnrichedStudent) => s.college_id === c.college_id);
    const count = studentsInCollege.length;
    const pCount = studentsInCollege.filter((s: EnrichedStudent) => s.placement_status === 'Placed').length;
    const pRate = count > 0 ? Math.round((pCount / count) * 100) : 0;
    const wCount = studentsInCollege.filter((s: EnrichedStudent) => s.employment_status === 'Working').length;
    const wRate = count > 0 ? Math.round((wCount / count) * 100) : 0;

    return {
      college_id: c.college_id,
      college_name: c.college_name,
      college_type: c.college_type,
      district: c.district,
      total: count,
      placed: pCount,
      placementRate: pRate,
      working: wCount,
      employmentRate: wRate
    };
  });

  // Top skills across this university
  const skillFreq = new Map<string, number>();
  univStudents.forEach((s: EnrichedStudent) => {
    s.skills.forEach((sk: { skill_name: string }) => {
      skillFreq.set(sk.skill_name, (skillFreq.get(sk.skill_name) || 0) + 1);
    });
  });
  const topSkills = Array.from(skillFreq.entries())
    .map(([skill, count]) => ({ skill, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  // Top career outcomes / job roles
  const roleFreq = new Map<string, number>();
  univStudents.forEach((s: EnrichedStudent) => {
    if (s.job_role && s.job_role !== 'Not Applicable') {
      roleFreq.set(s.job_role, (roleFreq.get(s.job_role) || 0) + 1);
    }
  });
  const topRoles = Array.from(roleFreq.entries())
    .map(([role, count]) => ({ role, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            University Hierarchy & Outcomes
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Hierarchical traversal: University → Constituent/Affiliated Colleges → Students → Career Outcomes
          </p>
        </div>

        {/* University Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider shrink-0">
            Select University:
          </label>
          <select
            value={selectedUnivId}
            onChange={(e) => setSelectedUnivId(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-xs"
          >
            {universities.map((u: University) => (
              <option key={u.university_id} value={u.university_id}>
                {u.university_name} ({u.district})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* University Hero Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-black text-2xl">
            <Building2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {activeUniv.university_name}
            </h3>
            <div className="flex items-center gap-3 text-xs text-blue-200 mt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Headquartered: {activeUniv.district}, Tamil Nadu
              </span>
              <span>•</span>
              <span>{affiliatedColleges.length} Monitored Institutions</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-white/10 p-3 rounded-2xl border border-white/10">
          <div className="text-center px-3">
            <span className="text-[10px] font-bold text-blue-200 uppercase block">Total Cohort</span>
            <span className="text-2xl font-black text-white">{totalStudents}</span>
          </div>
          <div className="text-center px-3 border-l border-white/20">
            <span className="text-[10px] font-bold text-blue-200 uppercase block">Placement</span>
            <span className="text-2xl font-black text-emerald-300">{placementRate}%</span>
          </div>
        </div>
      </div>

      {/* University KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <KpiCard
          title="Constituent Colleges"
          value={affiliatedColleges.length}
          subtitle="In prototype dataset"
          icon={GraduationCap}
          color="indigo"
        />
        <KpiCard
          title="Sample Students"
          value={totalStudents}
          subtitle="Total enrolled candidates"
          icon={Users}
          color="blue"
        />
        <KpiCard
          title="Placement Rate"
          value={`${placementRate}%`}
          subtitle={`${placedStudents} confirmed offers`}
          icon={Award}
          color="emerald"
        />
        <KpiCard
          title="Employment Rate"
          value={`${employmentRate}%`}
          subtitle={`${workingStudents} currently working`}
          icon={Briefcase}
          color="cyan"
        />
      </div>

      {/* Affiliated Colleges Table & Comparative Breakdown */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-slate-900 text-base">
              Constituent Colleges & Performance Comparison
            </h4>
            <p className="text-xs text-slate-500">
              Breakdown of student counts and placement outcomes under {activeUniv.university_name}
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            {affiliatedColleges.length} Institutions
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3 px-4">College Name</th>
                <th className="py-3 px-3">Type</th>
                <th className="py-3 px-3">District</th>
                <th className="py-3 px-3 text-center">Enrolled</th>
                <th className="py-3 px-3 text-center">Placed</th>
                <th className="py-3 px-3 text-center">Placement Rate</th>
                <th className="py-3 px-3 text-center">Employed Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {collegeBreakdownData.map((col) => (
                <tr key={col.college_id} className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {col.college_name}
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                      {col.college_type}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-slate-600 font-medium">
                    {col.district}
                  </td>
                  <td className="py-3.5 px-3 text-center font-bold text-slate-800">
                    {col.total}
                  </td>
                  <td className="py-3.5 px-3 text-center font-bold text-blue-600">
                    {col.placed}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${col.placementRate}%` }}
                        />
                      </div>
                      <span className="font-bold text-slate-800">{col.placementRate}%</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className="font-bold text-emerald-600">{col.employmentRate}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* University Top Skills and Career Outcomes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Top Skills */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h4 className="font-bold text-slate-900 text-sm">
            Top Skills Mastered by {activeUniv.university_name} Students
          </h4>
          <div className="space-y-2.5">
            {topSkills.map((sk, idx) => (
              <div key={sk.skill} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-2">
                  <span className="text-blue-600 font-bold font-mono">0{idx + 1}.</span>
                  {sk.skill}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                  {sk.count} students
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Career Outcomes */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h4 className="font-bold text-slate-900 text-sm">
            Primary Career Outcomes & Hired Roles
          </h4>
          <div className="space-y-2.5">
            {topRoles.map((role, idx) => (
              <div key={role.role} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-2">
                  <span className="text-emerald-600 font-bold font-mono">0{idx + 1}.</span>
                  {role.role}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  {role.count} placed
                </span>
              </div>
            ))}
            {topRoles.length === 0 && (
              <p className="text-xs text-slate-400">No placements recorded yet for this university in sample.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
