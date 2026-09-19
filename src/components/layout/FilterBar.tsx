import React from 'react';
import { useFilters } from '../../context/FilterContext';
import { universities, colleges, skills } from '../../db/seedData';
import { Filter, RotateCcw, X, SlidersHorizontal } from 'lucide-react';
import {
  PlacementStatus,
  EmploymentStatus,
  CompanyType
} from '../../types/database';

export const FilterBar: React.FC = () => {
  const { filters, setFilter, resetFilters, removeFilter, activeFilterCount, filteredStudents } = useFilters();

  const degrees = [
    'B.E. Computer Science',
    'B.Tech Information Technology',
    'B.E. Electronics & Communication',
    'B.E. Mechanical Engineering',
    'B.Sc Computer Science',
    'BCA',
    'MCA',
    'M.Sc Data Science'
  ];

  const districts = [
    'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem',
    'Kanchipuram', 'Tirunelveli', 'Erode', 'Vellore', 'Thanjavur'
  ];

  const industries = [
    'SaaS', 'FinTech', 'IT Services', 'Automotive', 'HealthTech', 'EdTech', 'E-Commerce', 'Semiconductor'
  ];

  return (
    <div className="bg-white border-b border-slate-200/80 px-4 sm:px-6 py-3 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-slate-700">
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Global Filters
          </span>
          <span className="text-xs text-slate-400 font-medium">
            (Showing {filteredStudents.length} of 102 sample records)
          </span>
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition cursor-pointer"
          >
            <RotateCcw className="w-3 h-3 text-slate-500" />
            Reset All Filters
          </button>
        )}
      </div>

      {/* Filter Select Controls Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2">
        {/* 1. Graduation Year */}
        <select
          value={filters.graduationYear || 'ALL'}
          onChange={(e) => setFilter('graduationYear', e.target.value === 'ALL' ? 'ALL' : Number(e.target.value) as 2025 | 2026)}
          className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="ALL">Grad Year: All</option>
          <option value="2025">2025 Cohort</option>
          <option value="2026">2026 Cohort</option>
        </select>

        {/* 2. University */}
        <select
          value={filters.universityId || 'ALL'}
          onChange={(e) => setFilter('universityId', e.target.value)}
          className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none truncate"
        >
          <option value="ALL">University: All</option>
          {universities.map(u => (
            <option key={u.university_id} value={u.university_id}>
              {u.university_name.replace('University', 'Univ')}
            </option>
          ))}
        </select>

        {/* 3. College */}
        <select
          value={filters.collegeId || 'ALL'}
          onChange={(e) => setFilter('collegeId', e.target.value)}
          className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none truncate"
        >
          <option value="ALL">College: All</option>
          {colleges.map(c => (
            <option key={c.college_id} value={c.college_id}>
              {c.college_name.split(' (')[0]}
            </option>
          ))}
        </select>

        {/* 4. Degree */}
        <select
          value={filters.degree || 'ALL'}
          onChange={(e) => setFilter('degree', e.target.value)}
          className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none truncate"
        >
          <option value="ALL">Degree: All</option>
          {degrees.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        {/* 5. District */}
        <select
          value={filters.district || 'ALL'}
          onChange={(e) => setFilter('district', e.target.value)}
          className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none truncate"
        >
          <option value="ALL">District: All</option>
          {districts.map(dist => (
            <option key={dist} value={dist}>{dist}</option>
          ))}
        </select>

        {/* 6. Placement Status */}
        <select
          value={filters.placementStatus || 'ALL'}
          onChange={(e) => setFilter('placementStatus', e.target.value as PlacementStatus | 'ALL')}
          className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="ALL">Placement: All</option>
          <option value="Placed">Placed</option>
          <option value="Not Placed">Not Placed</option>
        </select>

        {/* 7. Employment Status */}
        <select
          value={filters.employmentStatus || 'ALL'}
          onChange={(e) => setFilter('employmentStatus', e.target.value as EmploymentStatus | 'ALL')}
          className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="ALL">Employment: All</option>
          <option value="Working">Working</option>
          <option value="Seeking">Seeking</option>
          <option value="Higher Studies">Higher Studies</option>
          <option value="Other">Other</option>
        </select>

        {/* 8. Company Type */}
        <select
          value={filters.companyType || 'ALL'}
          onChange={(e) => setFilter('companyType', e.target.value as CompanyType | 'ALL')}
          className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none truncate"
        >
          <option value="ALL">Company: All</option>
          <option value="Startup">Startup</option>
          <option value="MNC">MNC</option>
          <option value="Large Company">Large Co</option>
          <option value="SME">SME</option>
          <option value="Other">Other</option>
        </select>

        {/* 9. Industry */}
        <select
          value={filters.industry || 'ALL'}
          onChange={(e) => setFilter('industry', e.target.value)}
          className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none truncate"
        >
          <option value="ALL">Industry: All</option>
          {industries.map(ind => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>

        {/* 10. Skill */}
        <select
          value={filters.skillName || 'ALL'}
          onChange={(e) => setFilter('skillName', e.target.value)}
          className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none truncate"
        >
          <option value="ALL">Skill: All</option>
          {skills.map(s => (
            <option key={s.skill_id} value={s.skill_name}>{s.skill_name}</option>
          ))}
        </select>
      </div>

      {/* Active Filter Chips */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">Active:</span>
          {filters.graduationYear && filters.graduationYear !== 'ALL' && (
            <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
              Year: {filters.graduationYear}
              <button onClick={() => removeFilter('graduationYear')} className="hover:text-blue-900"><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.universityId && filters.universityId !== 'ALL' && (
            <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
              Univ: {universities.find(u => u.university_id === filters.universityId)?.university_name}
              <button onClick={() => removeFilter('universityId')} className="hover:text-blue-900"><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.collegeId && filters.collegeId !== 'ALL' && (
            <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
              College: {colleges.find(c => c.college_id === filters.collegeId)?.college_name.split(' (')[0]}
              <button onClick={() => removeFilter('collegeId')} className="hover:text-blue-900"><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.degree && filters.degree !== 'ALL' && (
            <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
              Degree: {filters.degree}
              <button onClick={() => removeFilter('degree')} className="hover:text-blue-900"><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.district && filters.district !== 'ALL' && (
            <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
              District: {filters.district}
              <button onClick={() => removeFilter('district')} className="hover:text-blue-900"><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.placementStatus && filters.placementStatus !== 'ALL' && (
            <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
              Placement: {filters.placementStatus}
              <button onClick={() => removeFilter('placementStatus')} className="hover:text-emerald-900"><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.employmentStatus && filters.employmentStatus !== 'ALL' && (
            <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
              Status: {filters.employmentStatus}
              <button onClick={() => removeFilter('employmentStatus')} className="hover:text-amber-900"><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.companyType && filters.companyType !== 'ALL' && (
            <span className="inline-flex items-center gap-1 text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full border border-purple-200">
              Company: {filters.companyType}
              <button onClick={() => removeFilter('companyType')} className="hover:text-purple-900"><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.industry && filters.industry !== 'ALL' && (
            <span className="inline-flex items-center gap-1 text-xs bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-full border border-cyan-200">
              Industry: {filters.industry}
              <button onClick={() => removeFilter('industry')} className="hover:text-cyan-900"><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.skillName && filters.skillName !== 'ALL' && (
            <span className="inline-flex items-center gap-1 text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200">
              Skill: {filters.skillName}
              <button onClick={() => removeFilter('skillName')} className="hover:text-indigo-900"><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.searchQuery && (
            <span className="inline-flex items-center gap-1 text-xs bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full border border-slate-300">
              Search: "{filters.searchQuery}"
              <button onClick={() => removeFilter('searchQuery')} className="hover:text-slate-900"><X className="w-3 h-3" /></button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};
