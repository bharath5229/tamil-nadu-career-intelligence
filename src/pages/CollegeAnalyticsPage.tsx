import React, { useState } from 'react';
import { colleges } from '../db/seedData';
import { allEnrichedStudents } from '../db/relationalStore';
import { College, EnrichedStudent } from '../types/database';
import { KpiCard } from '../components/common/KpiCard';
import { ChartContainer } from '../components/common/ChartContainer';
import {
  Users,
  Award,
  Briefcase,
  Rocket,
  GraduationCap,
  MapPin
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

export const CollegeAnalyticsPage: React.FC = () => {
  const [selectedCollegeId, setSelectedCollegeId] = useState<string>(colleges[0].college_id);

  const activeCollege = colleges.find((c: College) => c.college_id === selectedCollegeId) || colleges[0];
  const collegeStudents = allEnrichedStudents.filter((s: EnrichedStudent) => s.college_id === selectedCollegeId);

  const total = collegeStudents.length;
  const placed = collegeStudents.filter((s: EnrichedStudent) => s.placement_status === 'Placed').length;
  const working = collegeStudents.filter((s: EnrichedStudent) => s.employment_status === 'Working').length;
  const startup = collegeStudents.filter((s: EnrichedStudent) => s.company_type === 'Startup').length;

  const placementRate = total > 0 ? Math.round((placed / total) * 100) : 0;
  const employmentRate = total > 0 ? Math.round((working / total) * 100) : 0;
  const startupRate = working > 0 ? Math.round((startup / working) * 100) : 0;

  // Top skills in this college
  const skillCountMap = new Map<string, number>();
  collegeStudents.forEach((s: EnrichedStudent) => {
    s.skills.forEach((sk: { skill_name: string }) => {
      skillCountMap.set(sk.skill_name, (skillCountMap.get(sk.skill_name) || 0) + 1);
    });
  });
  const topSkillsData = Array.from(skillCountMap.entries())
    .map(([skill, count]) => ({ skill, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  // Common job roles
  const roleCountMap = new Map<string, number>();
  collegeStudents.forEach((s: EnrichedStudent) => {
    if (s.job_role && s.job_role !== 'Not Applicable' && s.job_role !== 'N/A') {
      roleCountMap.set(s.job_role, (roleCountMap.get(s.job_role) || 0) + 1);
    }
  });
  const commonJobRolesData = Array.from(roleCountMap.entries())
    .map(([role, count]) => ({ role, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Graduation year comparison
  const grad2025 = collegeStudents.filter((s: EnrichedStudent) => s.graduation_year === 2025);
  const grad2026 = collegeStudents.filter((s: EnrichedStudent) => s.graduation_year === 2026);
  const gradYearData = [
    {
      year: '2025',
      total: grad2025.length,
      placed: grad2025.filter((s: EnrichedStudent) => s.placement_status === 'Placed').length,
      working: grad2025.filter((s: EnrichedStudent) => s.employment_status === 'Working').length
    },
    {
      year: '2026',
      total: grad2026.length,
      placed: grad2026.filter((s: EnrichedStudent) => s.placement_status === 'Placed').length,
      working: grad2026.filter((s: EnrichedStudent) => s.employment_status === 'Working').length
    }
  ];

  // Placement sources
  const sourceMap = new Map<string, number>();
  collegeStudents.forEach((s: EnrichedStudent) => {
    if (s.placement_source && s.placement_source !== 'None') {
      sourceMap.set(s.placement_source, (sourceMap.get(s.placement_source) || 0) + 1);
    }
  });
  const sourceColors = ['#2563eb', '#10b981', '#8b5cf6', '#f59e0b'];
  const placementSourceData = Array.from(sourceMap.entries()).map(([source, value], i) => ({
    name: source,
    value,
    fill: sourceColors[i % sourceColors.length]
  }));

  // Career goals
  const goalMap = new Map<string, number>();
  collegeStudents.forEach((s: EnrichedStudent) => {
    goalMap.set(s.career_goal, (goalMap.get(s.career_goal) || 0) + 1);
  });
  const careerGoalsData = Array.from(goalMap.entries())
    .map(([goal, count]) => ({ goal, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            College Placement & Outcomes Deep Dive
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Institutional benchmark metrics, recruitment channels, skill profiles, and career destinations
          </p>
        </div>

        {/* College Selector Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider shrink-0">
            Select College:
          </label>
          <select
            value={selectedCollegeId}
            onChange={(e) => setSelectedCollegeId(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-xs"
          >
            {colleges.map((c: College) => (
              <option key={c.college_id} value={c.college_id}>
                {c.college_name} ({c.district})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* College Identity Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 font-black text-xl">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {activeCollege.college_name}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                {activeCollege.college_type}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300 mt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {activeCollege.district}, Tamil Nadu
              </span>
              <span>•</span>
              <span className="text-slate-400">Institutional ID: {activeCollege.college_id}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2 rounded-2xl border border-slate-700">
          <div className="text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Sample Students</span>
            <span className="text-xl font-black text-white">{total}</span>
          </div>
          <div className="h-8 w-px bg-slate-700" />
          <div className="text-left">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Placement</span>
            <span className="text-xl font-black text-emerald-400">{placementRate}%</span>
          </div>
        </div>
      </div>

      {/* 4 Core KPI Cards for Selected College */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Total Students"
          value={total}
          subtitle="Enrolled in sample"
          icon={Users}
          color="blue"
        />
        <KpiCard
          title="Placement Rate"
          value={`${placementRate}%`}
          subtitle={`${placed} of ${total} placed`}
          icon={Award}
          color="emerald"
        />
        <KpiCard
          title="Employment Rate"
          value={`${employmentRate}%`}
          subtitle={`${working} currently working`}
          icon={Briefcase}
          color="cyan"
        />
        <KpiCard
          title="Startup Participation"
          value={`${startupRate}%`}
          subtitle={`${startup} working in startups`}
          icon={Rocket}
          color="purple"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Chart 1: Graduation Year Comparison */}
        <ChartContainer
          title="Graduation Year Comparison (2025 vs 2026)"
          subtitle={`Cohort size and placement outcomes for ${activeCollege.college_name.split(' (')[0]}`}
        >
          <div className="w-full h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gradYearData} margin={{ top: 10, right: 20, left: -20, bottom: 10 }}>
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#334155', fontWeight: 600 }} />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} allowDecimals={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }} />
                <Legend verticalAlign="top" height={30} />
                <Bar dataKey="total" name="Enrolled" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="placed" name="Placed" fill="#2563eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="working" name="Employed" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>

        {/* Chart 2: Placement Source */}
        <ChartContainer
          title="Placement Recruitment Source"
          subtitle="On-Campus, Off-Campus, Referral, Internship Conversion"
        >
          <div className="w-full h-[260px] flex items-center justify-center">
            {placementSourceData.length === 0 ? (
              <p className="text-xs text-slate-400">No placed records with source data for this college.</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={placementSourceData}
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {placementSourceData.map((entry, idx) => (
                      <Cell key={`source-${idx}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </ChartContainer>

        {/* Chart 3: Top Skills */}
        <ChartContainer
          title="Top Skills Among Students"
          subtitle="Most prominent technical skills within this college"
        >
          <div className="w-full h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topSkillsData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <XAxis type="number" tick={{ fontSize: 10, fill: '#64748b' }} allowDecimals={false} />
                <YAxis type="category" dataKey="skill" width={110} tick={{ fontSize: 10, fill: '#334155' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }} />
                <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>

        {/* Chart 4: Career Goals */}
        <ChartContainer
          title="Common Career Aspirations"
          subtitle="Target career goals articulated by candidates"
        >
          <div className="w-full h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={careerGoalsData} layout="vertical" margin={{ top: 5, right: 20, left: 25, bottom: 5 }}>
                <XAxis type="number" tick={{ fontSize: 10, fill: '#64748b' }} allowDecimals={false} />
                <YAxis type="category" dataKey="goal" width={120} tick={{ fontSize: 10, fill: '#334155' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }} />
                <Bar dataKey="count" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </div>

      {/* Common Job Roles Table / List */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
        <h4 className="font-bold text-slate-900 text-sm">
          Common Job Roles Accepted by {activeCollege.college_name.split(' (')[0]} Graduates
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {commonJobRolesData.map((role) => (
            <div key={role.role} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 block">{role.role}</span>
                <span className="text-[11px] text-slate-500">Placement destination</span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs">
                {role.count} hired
              </span>
            </div>
          ))}
          {commonJobRolesData.length === 0 && (
            <p className="text-xs text-slate-400 col-span-3">No active placements recorded in this sample yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};
