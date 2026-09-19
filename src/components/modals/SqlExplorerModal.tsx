import React, { useState } from 'react';
import { useFilters } from '../../context/FilterContext';
import { generateSqlForFilters } from '../../db/relationalStore';
import { Database, Copy, Check, X, Terminal } from 'lucide-react';

interface SqlExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SqlExplorerModal: React.FC<SqlExplorerModalProps> = ({ isOpen, onClose }) => {
  const { filters, filteredStudents } = useFilters();
  const [copied, setCopied] = useState(false);
  const sqlQuery = generateSqlForFilters(filters);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlQuery);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 text-slate-100 overflow-hidden animate-fade-in">
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Relational SQL Query Explorer
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-400/30 font-mono">
                  SQLite / PostgreSQL
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Live SQL translation of your currently active dashboard filters ({filteredStudents.length} rows returned)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Dynamic Query Generated:
            </span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy SQL Query
                </>
              )}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-x-auto">
            <pre className="font-mono text-xs text-emerald-400 leading-relaxed">
              {sqlQuery}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">
              Relational Architecture Verification
            </h5>
            <p>
              This query executes a relational <code className="text-blue-300 font-mono">JOIN</code> across 
              normalized tables: <code className="text-blue-300 font-mono">students</code>, <code className="text-blue-300 font-mono">colleges</code>, 
              <code className="text-blue-300 font-mono">universities</code>, <code className="text-blue-300 font-mono">placements</code>, and 
              <code className="text-blue-300 font-mono">employment</code>.
            </p>
            <p className="text-slate-400">
              Foreign keys enforce referential integrity between institutional hierarchies and student career milestones.
            </p>
          </div>
        </div>

        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Active filter clauses: {filters.graduationYear !== 'ALL' || filters.collegeId !== 'ALL' || filters.placementStatus !== 'ALL' ? 'Custom Filter Active' : 'All Data Included'}</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
