import React, { useState } from 'react';
import { useFilters } from '../../context/FilterContext';
import { SqlExplorerModal } from '../modals/SqlExplorerModal';
import {
  Search,
  RotateCcw,
  Database,
  Info,
  Menu,
  X,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const { filters, setFilter, resetFilters, activeFilterCount, filteredStudents, setCurrentPage } = useFilters();
  const [isSqlModalOpen, setIsSqlModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        {/* Prototype Warning Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white px-4 py-1.5 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 truncate">
              <span className="bg-blue-900/80 text-blue-200 uppercase font-black text-[10px] px-2 py-0.5 rounded tracking-wider border border-blue-400/30">
                Prototype
              </span>
              <span className="truncate text-blue-100 font-medium text-[11px] sm:text-xs">
                102 Anonymized Sample Records (Tamil Nadu 2025–2026 Cohort). Not statistically representative of all TN students.
              </span>
            </div>
            <button
              onClick={() => setCurrentPage('methodology')}
              className="shrink-0 underline hover:text-white text-blue-200 text-[11px] font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Info className="w-3 h-3" />
              Methodology
            </button>
          </div>
        </div>

        {/* Top Action Bar */}
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 max-w-xl">
            {/* Mobile menu trigger */}
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Global Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by student ID, college, skill, degree, or role..."
                value={filters.searchQuery || ''}
                onChange={(e) => setFilter('searchQuery', e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => setFilter('searchQuery', '')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Active records pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{filteredStudents.length} / 102 Records</span>
            </div>

            {/* SQL Explorer Button */}
            <button
              onClick={() => setIsSqlModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition cursor-pointer"
              title="Inspect live relational SQL query"
            >
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden md:inline">SQL Query</span>
            </button>

            {/* Reset Filters button */}
            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold border border-rose-200 transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset ({activeFilterCount})</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <SqlExplorerModal
        isOpen={isSqlModalOpen}
        onClose={() => setIsSqlModalOpen(false)}
      />
    </>
  );
};
