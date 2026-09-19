import React, { useState } from 'react';
import { useFilters } from '../context/FilterContext';
import { Badge } from '../components/common/Badge';
import { EnrichedStudent } from '../types/database';
import {
  Search,
  Download,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';

export const StudentAnalyticsPage: React.FC = () => {
  const { filteredStudents, setSelectedStudentId, filters, setFilter } = useFilters();
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const pageSize = 12;

  const totalPages = Math.ceil(filteredStudents.length / pageSize) || 1;
  const currentStudents = filteredStudents.slice((currentPageNum - 1) * pageSize, currentPageNum * pageSize);

  const exportCsv = () => {
    const headers = [
      'Student ID',
      'Graduation Year',
      'College',
      'University',
      'Degree',
      'CGPA',
      'Skills',
      'Career Goal',
      'Placement Status',
      'Employment Status',
      'Company Type',
      'Job Role',
      'Industry',
      'Salary Band'
    ];

    const rows = filteredStudents.map((s: EnrichedStudent) => [
      s.student_id,
      s.graduation_year,
      `"${s.college_name}"`,
      `"${s.university_name}"`,
      `"${s.degree}"`,
      s.cgpa,
      `"${s.skills.map((sk: { skill_name: string }) => sk.skill_name).join(', ')}"`,
      `"${s.career_goal}"`,
      s.placement_status,
      s.employment_status,
      s.company_type,
      `"${s.job_role}"`,
      `"${s.industry}"`,
      `"${s.salary_band}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map((r: (string | number | null)[]) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `tamil_nadu_student_career_data_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getPlacementBadge = (status: string) => {
    return status === 'Placed' ? (
      <Badge variant="success" size="sm">Placed</Badge>
    ) : (
      <Badge variant="neutral" size="sm">Not Placed</Badge>
    );
  };

  const getEmploymentBadge = (status: string) => {
    switch (status) {
      case 'Working': return <Badge variant="success" size="sm">Working</Badge>;
      case 'Seeking': return <Badge variant="warning" size="sm">Seeking</Badge>;
      case 'Higher Studies': return <Badge variant="purple" size="sm">Higher Studies</Badge>;
      default: return <Badge variant="neutral" size="sm">Other</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Page Title & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Anonymized Student Records
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Privacy Protected (No PII)
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Search, inspect individual candidate pathways, skill gap profiles, and export cohorts
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={exportCsv}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">
              Showing <strong className="text-slate-900">{filteredStudents.length}</strong> matching records
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500">
              Click any student row to inspect detailed profile & skill gaps
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search table..."
                value={filters.searchQuery || ''}
                onChange={(e) => setFilter('searchQuery', e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4">Student ID</th>
                <th className="py-3.5 px-3">Grad Year</th>
                <th className="py-3.5 px-4">College</th>
                <th className="py-3.5 px-4">Degree</th>
                <th className="py-3.5 px-4">Verified Skills</th>
                <th className="py-3.5 px-3">Placement</th>
                <th className="py-3.5 px-3">Employment</th>
                <th className="py-3.5 px-3">Company Type</th>
                <th className="py-3.5 px-4">Job Role</th>
                <th className="py-3.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {currentStudents.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-slate-400">
                    <p className="font-semibold text-slate-600">No student records match the active filter criteria.</p>
                    <p className="text-xs text-slate-400 mt-1">Try resetting some global filters or changing search keywords.</p>
                  </td>
                </tr>
              ) : (
                currentStudents.map((student: EnrichedStudent) => (
                  <tr
                    key={student.student_id}
                    onClick={() => setSelectedStudentId(student.student_id)}
                    className="hover:bg-blue-50/40 transition-colors cursor-pointer group"
                  >
                    <td className="py-3 px-4 font-mono font-bold text-slate-900 group-hover:text-blue-600">
                      {student.student_id}
                    </td>
                    <td className="py-3 px-3">
                      <span className="font-semibold text-slate-800">{student.graduation_year}</span>
                    </td>
                    <td className="py-3 px-4 max-w-[180px] truncate" title={student.college_name}>
                      <span className="font-medium text-slate-800">{student.college_name.split(' (')[0]}</span>
                      <span className="block text-[11px] text-slate-400">{student.district}</span>
                    </td>
                    <td className="py-3 px-4 max-w-[160px] truncate" title={student.degree}>
                      <span className="text-slate-700">{student.degree}</span>
                      <span className="block text-[11px] text-blue-600 font-mono font-semibold">CGPA: {student.cgpa.toFixed(2)}</span>
                    </td>
                    <td className="py-3 px-4 max-w-[200px]">
                      <div className="flex flex-wrap gap-1">
                        {student.skills.slice(0, 3).map((sk: { skill_id: string; skill_name: string }) => (
                          <span
                            key={sk.skill_id}
                            className="inline-block px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200"
                          >
                            {sk.skill_name}
                          </span>
                        ))}
                        {student.skills.length > 3 && (
                          <span className="text-[10px] text-slate-400 font-semibold self-center">
                            +{student.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      {getPlacementBadge(student.placement_status)}
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      {getEmploymentBadge(student.employment_status)}
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap font-medium text-slate-800">
                      {student.company_type}
                    </td>
                    <td className="py-3 px-4 max-w-[150px] truncate" title={student.job_role}>
                      <span className="text-slate-800 font-medium">{student.job_role}</span>
                      {student.industry !== 'N/A' && (
                        <span className="block text-[11px] text-slate-400">{student.industry}</span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStudentId(student.student_id);
                        }}
                        className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-600 transition"
                        title="View Full Profile"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Toolbar */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50 text-xs text-slate-600">
          <span>
            Page <strong className="text-slate-900">{currentPageNum}</strong> of <strong className="text-slate-900">{totalPages}</strong>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPageNum(p => Math.max(1, p - 1))}
              disabled={currentPageNum === 1}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 disabled:opacity-40 hover:bg-slate-50 transition flex items-center gap-1 font-semibold"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              Prev
            </button>
            <button
              onClick={() => setCurrentPageNum(p => Math.min(totalPages, p + 1))}
              disabled={currentPageNum === totalPages}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 disabled:opacity-40 hover:bg-slate-50 transition flex items-center gap-1 font-semibold"
            >
              Next
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
