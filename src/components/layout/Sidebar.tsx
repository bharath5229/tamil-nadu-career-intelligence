import React from 'react';
import { useFilters } from '../../context/FilterContext';
import {
  LayoutDashboard,
  Users,
  Filter,
  GraduationCap,
  Building2,
  TrendingUp,
  Lightbulb,
  Sparkles,
  BookOpen,
  UserCheck,
  Compass,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { currentPage, setCurrentPage, filteredStudents } = useFilters();

  const navItems = [
    { id: 'home', label: 'Overview & Story', icon: Compass, badge: 'Home' },
    { id: 'dashboard', label: 'Executive Dashboard', icon: LayoutDashboard, badge: '10 Charts' },
    { id: 'funnel', label: 'Placement Funnel', icon: Filter, badge: '6 Stages' },
    { id: 'students', label: 'Student Analytics', icon: Users, badge: `${filteredStudents.length}` },
    { id: 'colleges', label: 'College Analytics', icon: GraduationCap },
    { id: 'universities', label: 'University Hierarchy', icon: Building2 },
    { id: 'kpis', label: 'Manager / KPI Center', icon: TrendingUp, badge: 'YoY' },
    { id: 'insights', label: 'Descriptive Insights', icon: Lightbulb, badge: 'Non-causal' },
    { id: 'opportunities', label: 'Product Opportunities', icon: Sparkles, badge: 'AI Roadmap' },
    { id: 'methodology', label: 'Data & Methodology', icon: BookOpen },
    { id: 'about', label: 'About & Philosophy', icon: UserCheck }
  ];

  const handleNav = (id: string) => {
    setCurrentPage(id);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      <aside
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-72 bg-slate-950 text-slate-300 flex flex-col border-r border-slate-800 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 font-black text-lg">
              TN
            </div>
            <div>
              <h1 className="text-sm font-bold text-white tracking-tight leading-snug">
                Tamil Nadu Graduate
              </h1>
              <p className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                Career Intelligence
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="truncate">Prototype: 102 Anonymized Records</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
            Intelligence Platform
          </p>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all group cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`} />
                  <span className="truncate">{item.label}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                        isActive
                          ? 'bg-blue-700 text-white'
                          : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isActive && <ChevronRight className="w-3.5 h-3.5" />}
                </div>
              </button>
            );
          })}
        </nav>

        {/* Footer info & Founder Note shortcut */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/60 space-y-2">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>CareerTech Analytics</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-normal">
              Built for CareerTech managers, analysts, colleges & coaches.
            </p>
          </div>
          <p className="text-[10px] text-slate-400 text-center">
            Prototype by Bharath S • PM Aspirant • v1.0.0
          </p>
        </div>
      </aside>
    </>
  );
};
