import React, { useState } from 'react';
import {
  AlertTriangle,
  Database,
  Copy,
  Check
} from 'lucide-react';

export const MethodologyPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const tables = [
    {
      name: 'students',
      pk: 'student_id',
      fk: 'college_id → colleges(college_id)',
      cols: ['student_id (VARCHAR)', 'graduation_year (INT 2025|2026)', 'college_id (VARCHAR)', 'degree (VARCHAR)', 'cgpa (NUMERIC 0-10)', 'district (VARCHAR)', 'career_goal (VARCHAR)']
    },
    {
      name: 'colleges',
      pk: 'college_id',
      fk: 'university_id → universities(university_id)',
      cols: ['college_id (VARCHAR)', 'college_name (VARCHAR)', 'university_id (VARCHAR)', 'district (VARCHAR)', 'college_type (Government|Autonomous|Private)']
    },
    {
      name: 'universities',
      pk: 'university_id',
      fk: 'None (Root Entity)',
      cols: ['university_id (VARCHAR)', 'university_name (VARCHAR)', 'district (VARCHAR)']
    },
    {
      name: 'skills',
      pk: 'skill_id',
      fk: 'None',
      cols: ['skill_id (VARCHAR)', 'skill_name (VARCHAR)', 'category (VARCHAR)']
    },
    {
      name: 'student_skills',
      pk: '(student_id, skill_id)',
      fk: 'student_id → students, skill_id → skills',
      cols: ['student_id (VARCHAR)', 'skill_id (VARCHAR)', 'skill_level (Beginner|Intermediate|Advanced)']
    },
    {
      name: 'employment',
      pk: 'student_id',
      fk: 'student_id → students(student_id)',
      cols: ['student_id (VARCHAR)', 'employment_status (Working|Seeking|Higher Studies|Other)', 'company_type (Startup|MNC|Large Company|SME|Other)', 'industry (VARCHAR)', 'job_role (VARCHAR)', 'salary_band (VARCHAR)']
    },
    {
      name: 'placements',
      pk: 'student_id',
      fk: 'student_id → students(student_id)',
      cols: ['student_id (VARCHAR)', 'placement_status (Placed|Not Placed)', 'placement_year (INT)', 'placement_source (On-Campus|Off-Campus|Referral|Internship Conversion)', 'time_to_employment (NUMERIC)']
    },
    {
      name: 'funnel_stages',
      pk: 'student_id',
      fk: 'student_id → students(student_id)',
      cols: ['student_id (VARCHAR)', 'is_seeker (BOOL)', 'interviewed (BOOL)', 'received_offers (BOOL)', 'accepted_offers (BOOL)', 'currently_working (BOOL)']
    }
  ];

  const sqlSample = `-- Tamil Nadu Graduate Career Intelligence Prototype Relational Model
CREATE TABLE universities (
    university_id VARCHAR(50) PRIMARY KEY,
    university_name VARCHAR(255) NOT NULL,
    district VARCHAR(100) NOT NULL
);

CREATE TABLE colleges (
    college_id VARCHAR(50) PRIMARY KEY,
    college_name VARCHAR(255) NOT NULL,
    university_id VARCHAR(50) REFERENCES universities(university_id),
    district VARCHAR(100) NOT NULL,
    college_type VARCHAR(50) NOT NULL
);

CREATE TABLE students (
    student_id VARCHAR(50) PRIMARY KEY,
    graduation_year INTEGER CHECK (graduation_year IN (2025, 2026)),
    college_id VARCHAR(50) REFERENCES colleges(college_id),
    degree VARCHAR(100) NOT NULL,
    cgpa NUMERIC(4, 2) NOT NULL,
    district VARCHAR(100) NOT NULL,
    career_goal VARCHAR(150) NOT NULL
);`;

  const copySql = () => {
    navigator.clipboard.writeText(sqlSample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Data Sources, Privacy & Research Methodology
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Complete disclosure of data architecture, sample scope, statistical limitations, and anonymization standards
        </p>
      </div>

      {/* Disclaimers Strip */}
      <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-300 space-y-3 shadow-xs">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-700" />
          <span>Essential Prototype & Non-Representativeness Disclaimers</span>
        </div>
        <ul className="space-y-2 text-xs text-amber-900 list-disc list-inside leading-relaxed">
          <li>
            <strong>Prototype Scope:</strong> This dashboard is an analytical software prototype powered by a curated sample of <strong>102 anonymized student records</strong> from the 2025 and 2026 graduating classes.
          </li>
          <li>
            <strong>Non-Representative Sample:</strong> This dataset is <strong>not statistically representative</strong> of the entire higher education student population across the state of Tamil Nadu. The sample serves exclusively to test user interfaces, relational schemas, and product analytics models.
          </li>
          <li>
            <strong>Non-Causal Observations:</strong> Any statistical patterns, correlations, or findings highlighted in this product describe co-occurrences within this specific sample only and do not establish causal relationships.
          </li>
          <li>
            <strong>Zero PII Collected or Displayed:</strong> No personally identifiable information (such as student names, phone numbers, email addresses, or residential street addresses) exists in this database. Identifiers use synthetic hash tokens (e.g., <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">TN-STU-001</code>).
          </li>
        </ul>
      </div>

      {/* Provenance & Sources Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            01
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Public Higher Education Baselines</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Institutional names, affiliations, and degree naming conventions reflect public statutory records from Anna University, University of Madras, Bharathiar University, and the Tamil Nadu Directorate of Technical Education (DOTE).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            02
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Synthetic & Anonymized Survey Benchmarks</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Placement numbers, salary bands, and skill self-assessments were generated using calibrated distributions derived from voluntarily provided anonymized graduate surveys and tech hiring reports.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            03
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Deterministic Integrity Calibration</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Data is generated using a seeded pseudo-random engine ensuring 100% referential integrity across foreign keys, eliminating dangling child records and preventing data corruption.
          </p>
        </div>
      </div>

      {/* Relational Database Architecture & Schema Explorer */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">
                Relational Database Schema (8 Normalized Tables)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Third normal form (3NF) relational architecture with strict referential constraints
            </p>
          </div>

          <button
            onClick={copySql}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Copied DDL!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy DDL Snippet
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tables.map(tbl => (
            <div key={tbl.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-slate-900 text-sm">{tbl.name}</span>
                <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  PK: {tbl.pk}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono">
                FK: <span className="text-blue-600">{tbl.fk}</span>
              </p>
              <div className="pt-2 border-t border-slate-200/60">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Attributes:</span>
                <div className="flex flex-wrap gap-1">
                  {tbl.cols.map(c => (
                    <span key={c} className="text-[10px] font-mono bg-white text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
