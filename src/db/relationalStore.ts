import {
  universities,
  colleges,
  skills,
  careerRequirements,
  students,
  studentSkills,
  employment,
  placements,
  funnelStages
} from './seedData';
import {
  EnrichedStudent,
  DashboardFilters,
  KpiMetrics,
  PlacementStatus,
  EmploymentStatus,
  CompanyType
} from '../types/database';

// Map lookup tables for O(1) relational joins
const universityMap = new Map(universities.map(u => [u.university_id, u]));
const collegeMap = new Map(colleges.map(c => [c.college_id, c]));
const skillMap = new Map(skills.map(s => [s.skill_id, s]));
const employmentMap = new Map(employment.map(e => [e.student_id, e]));
const placementMap = new Map(placements.map(p => [p.student_id, p]));
const funnelMap = new Map(funnelStages.map(f => [f.student_id, f]));

// Group student skills
const studentSkillsMap = new Map<string, Array<{ skill_id: string; skill_name: string; skill_level: 'Beginner' | 'Intermediate' | 'Advanced' }>>();
for (const ss of studentSkills) {
  const skill = skillMap.get(ss.skill_id);
  if (!skill) continue;
  if (!studentSkillsMap.has(ss.student_id)) {
    studentSkillsMap.set(ss.student_id, []);
  }
  studentSkillsMap.get(ss.student_id)!.push({
    skill_id: ss.skill_id,
    skill_name: skill.skill_name,
    skill_level: ss.skill_level
  });
}

// Perform relational JOIN across all 7 core tables
export const allEnrichedStudents: EnrichedStudent[] = students.map(student => {
  const college = collegeMap.get(student.college_id) || {
    college_name: 'Unknown College',
    college_type: 'Autonomous' as const,
    university_id: 'UNKNOWN',
    district: student.district
  };

  const university = universityMap.get(college.university_id) || {
    university_name: 'Unknown University',
    district: student.district
  };

  const emp = employmentMap.get(student.student_id) || {
    employment_status: 'Seeking' as EmploymentStatus,
    company_type: 'Other' as CompanyType,
    industry: 'N/A',
    job_role: 'N/A',
    salary_band: 'N/A'
  };

  const plc = placementMap.get(student.student_id) || {
    placement_status: 'Not Placed' as PlacementStatus,
    placement_year: null,
    placement_source: 'None' as const,
    time_to_employment: null
  };

  const fnl = funnelMap.get(student.student_id) || {
    is_seeker: true,
    interviewed: false,
    received_offers: false,
    accepted_offers: false,
    currently_working: false
  };

  const studentSkillsList = studentSkillsMap.get(student.student_id) || [];
  const targetRequired = careerRequirements[student.career_goal] || [];
  const studentSkillNames = new Set(studentSkillsList.map(s => s.skill_name));
  const missingSkills = targetRequired.filter(req => !studentSkillNames.has(req));

  return {
    student_id: student.student_id,
    graduation_year: student.graduation_year,
    college_id: student.college_id,
    college_name: college.college_name,
    college_type: college.college_type,
    university_id: college.university_id,
    university_name: university.university_name,
    degree: student.degree,
    cgpa: student.cgpa,
    district: student.district,
    career_goal: student.career_goal,
    skills: studentSkillsList,
    placement_status: plc.placement_status,
    placement_year: plc.placement_year,
    placement_source: plc.placement_source,
    time_to_employment: plc.time_to_employment,
    employment_status: emp.employment_status,
    company_type: emp.company_type,
    industry: emp.industry,
    job_role: emp.job_role,
    salary_band: emp.salary_band,
    is_seeker: fnl.is_seeker,
    interviewed: fnl.interviewed,
    received_offers: fnl.received_offers,
    accepted_offers: fnl.accepted_offers,
    currently_working: fnl.currently_working,
    target_required_skills: targetRequired,
    missing_skills: missingSkills,
    has_skill_gap: missingSkills.length > 0
  };
});

// Dynamic filtering logic
export function filterEnrichedStudents(
  studentsList: EnrichedStudent[],
  filters: DashboardFilters
): EnrichedStudent[] {
  return studentsList.filter(s => {
    if (filters.graduationYear && filters.graduationYear !== 'ALL' && s.graduation_year !== filters.graduationYear) {
      return false;
    }
    if (filters.universityId && filters.universityId !== 'ALL' && s.university_id !== filters.universityId) {
      return false;
    }
    if (filters.collegeId && filters.collegeId !== 'ALL' && s.college_id !== filters.collegeId) {
      return false;
    }
    if (filters.degree && filters.degree !== 'ALL' && s.degree !== filters.degree) {
      return false;
    }
    if (filters.district && filters.district !== 'ALL' && s.district !== filters.district) {
      return false;
    }
    if (filters.placementStatus && filters.placementStatus !== 'ALL' && s.placement_status !== filters.placementStatus) {
      return false;
    }
    if (filters.employmentStatus && filters.employmentStatus !== 'ALL' && s.employment_status !== filters.employmentStatus) {
      return false;
    }
    if (filters.companyType && filters.companyType !== 'ALL' && s.company_type !== filters.companyType) {
      return false;
    }
    if (filters.industry && filters.industry !== 'ALL' && s.industry !== filters.industry) {
      return false;
    }
    if (filters.skillName && filters.skillName !== 'ALL') {
      const hasSkill = s.skills.some(sk => sk.skill_name === filters.skillName);
      if (!hasSkill) return false;
    }
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const q = filters.searchQuery.toLowerCase().trim();
      const match =
        s.student_id.toLowerCase().includes(q) ||
        s.college_name.toLowerCase().includes(q) ||
        s.degree.toLowerCase().includes(q) ||
        s.career_goal.toLowerCase().includes(q) ||
        s.job_role.toLowerCase().includes(q) ||
        s.industry.toLowerCase().includes(q) ||
        s.skills.some(sk => sk.skill_name.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });
}

// Dynamically compute KPI metrics from any filtered cohort
export function calculateKpiMetrics(cohort: EnrichedStudent[]): KpiMetrics {
  const total = cohort.length;
  if (total === 0) {
    return {
      totalStudents: 0,
      graduates2025: 0,
      graduates2026: 0,
      placementRate: 0,
      employmentRate: 0,
      studentsSeeking: 0,
      startupEmploymentRate: 0,
      startupCount: 0,
      studentsWithSkillGaps: 0,
      skillGapRate: 0,
      avgTimeToEmployment: 0,
      interviewConversionRate: 0,
      offerConversionRate: 0,
      acceptanceRate: 0
    };
  }

  const grad2025 = cohort.filter(s => s.graduation_year === 2025).length;
  const grad2026 = cohort.filter(s => s.graduation_year === 2026).length;
  const placed = cohort.filter(s => s.placement_status === 'Placed').length;
  const working = cohort.filter(s => s.employment_status === 'Working').length;
  const seeking = cohort.filter(s => s.employment_status === 'Seeking').length;
  const startup = cohort.filter(s => s.company_type === 'Startup').length;
  const skillGaps = cohort.filter(s => s.has_skill_gap).length;

  const validTimes = cohort.filter(s => s.time_to_employment !== null).map(s => s.time_to_employment as number);
  const avgTime = validTimes.length > 0
    ? parseFloat((validTimes.reduce((a, b) => a + b, 0) / validTimes.length).toFixed(1))
    : 0;

  // Funnel conversions
  const seekers = cohort.filter(s => s.is_seeker).length;
  const interviewed = cohort.filter(s => s.interviewed).length;
  const offers = cohort.filter(s => s.received_offers).length;
  const accepted = cohort.filter(s => s.accepted_offers).length;

  return {
    totalStudents: total,
    graduates2025: grad2025,
    graduates2026: grad2026,
    placementRate: Math.round((placed / total) * 100),
    employmentRate: Math.round((working / total) * 100),
    studentsSeeking: seeking,
    startupEmploymentRate: Math.round((startup / (working || 1)) * 100),
    startupCount: startup,
    studentsWithSkillGaps: skillGaps,
    skillGapRate: Math.round((skillGaps / total) * 100),
    avgTimeToEmployment: avgTime,
    interviewConversionRate: seekers > 0 ? Math.round((interviewed / seekers) * 100) : 0,
    offerConversionRate: interviewed > 0 ? Math.round((offers / interviewed) * 100) : 0,
    acceptanceRate: offers > 0 ? Math.round((accepted / offers) * 100) : 0
  };
}

// Chart 1: Placement Status Donut
export function getPlacementStatusDistribution(cohort: EnrichedStudent[]) {
  const placed = cohort.filter(s => s.placement_status === 'Placed').length;
  const notPlaced = cohort.filter(s => s.placement_status === 'Not Placed').length;
  return [
    { name: 'Placed', value: placed, fill: '#2563eb' },
    { name: 'Not Placed', value: notPlaced, fill: '#94a3b8' }
  ];
}

// Chart 2: Employment Status Bar
export function getEmploymentStatusDistribution(cohort: EnrichedStudent[]) {
  const statuses: EmploymentStatus[] = ['Working', 'Seeking', 'Higher Studies', 'Other'];
  const colors: Record<EmploymentStatus, string> = {
    'Working': '#10b981',
    'Seeking': '#f59e0b',
    'Higher Studies': '#6366f1',
    'Other': '#94a3b8'
  };
  return statuses.map(st => {
    const count = cohort.filter(s => s.employment_status === st).length;
    const pct = cohort.length > 0 ? Math.round((count / cohort.length) * 100) : 0;
    return { name: st, count, percentage: pct, fill: colors[st] };
  });
}

// Chart 3: Company Type Bar
export function getCompanyTypeDistribution(cohort: EnrichedStudent[]) {
  const types: CompanyType[] = ['Startup', 'MNC', 'Large Company', 'SME', 'Other'];
  const colors: Record<CompanyType, string> = {
    'Startup': '#8b5cf6',
    'MNC': '#3b82f6',
    'Large Company': '#06b6d4',
    'SME': '#10b981',
    'Other': '#cbd5e1'
  };
  return types.map(t => {
    const count = cohort.filter(s => s.company_type === t).length;
    return { name: t, count, fill: colors[t] };
  });
}

// Chart 4: Graduation Year Comparison
export function getGradYearComparison(cohort: EnrichedStudent[]) {
  const y2025 = cohort.filter(s => s.graduation_year === 2025);
  const y2026 = cohort.filter(s => s.graduation_year === 2026);

  const getMetrics = (list: EnrichedStudent[]) => {
    const total = list.length;
    if (total === 0) return { total: 0, placed: 0, placementRate: 0, working: 0, seeking: 0 };
    const placed = list.filter(s => s.placement_status === 'Placed').length;
    const working = list.filter(s => s.employment_status === 'Working').length;
    const seeking = list.filter(s => s.employment_status === 'Seeking').length;
    return {
      total,
      placed,
      placementRate: Math.round((placed / total) * 100),
      working,
      seeking
    };
  };

  const m2025 = getMetrics(y2025);
  const m2026 = getMetrics(y2026);

  return [
    { year: '2025', ...m2025 },
    { year: '2026', ...m2026 }
  ];
}

// Chart 5: College Placement Comparison
export function getCollegePlacementComparison(cohort: EnrichedStudent[]) {
  const collegeMap = new Map<string, { name: string; total: number; placed: number }>();
  
  for (const s of cohort) {
    if (!collegeMap.has(s.college_id)) {
      collegeMap.set(s.college_id, {
        name: s.college_name.replace(' (CEG)', '').replace(' (MIT)', '').replace(' (SSN)', '').replace(' (CIT)', '').replace(' (GCT)', '').replace(' (TCE)', '').replace(' (KCT)', '').replace(' (Autonomous)', ''),
        total: 0,
        placed: 0
      });
    }
    const item = collegeMap.get(s.college_id)!;
    item.total += 1;
    if (s.placement_status === 'Placed') item.placed += 1;
  }

  return Array.from(collegeMap.entries())
    .map(([id, val]) => ({
      college_id: id,
      name: val.name,
      total: val.total,
      placed: val.placed,
      rate: val.total > 0 ? Math.round((val.placed / val.total) * 100) : 0
    }))
    .sort((a, b) => b.rate - a.rate);
}

// Chart 6: University Comparison
export function getUniversityComparison(cohort: EnrichedStudent[]) {
  const uMap = new Map<string, { name: string; total: number; placed: number; working: number }>();

  for (const s of cohort) {
    if (!uMap.has(s.university_id)) {
      uMap.set(s.university_id, {
        name: s.university_name,
        total: 0,
        placed: 0,
        working: 0
      });
    }
    const item = uMap.get(s.university_id)!;
    item.total += 1;
    if (s.placement_status === 'Placed') item.placed += 1;
    if (s.employment_status === 'Working') item.working += 1;
  }

  return Array.from(uMap.entries()).map(([id, val]) => ({
    university_id: id,
    name: val.name,
    total: val.total,
    placed: val.placed,
    placementRate: val.total > 0 ? Math.round((val.placed / val.total) * 100) : 0,
    working: val.working
  }));
}

// Chart 7: Skills Analytics (skills frequency & employment rate)
export function getSkillsAnalytics(cohort: EnrichedStudent[]) {
  const skillFreq = new Map<string, { total: number; placed: number; working: number }>();

  for (const s of cohort) {
    for (const sk of s.skills) {
      if (!skillFreq.has(sk.skill_name)) {
        skillFreq.set(sk.skill_name, { total: 0, placed: 0, working: 0 });
      }
      const data = skillFreq.get(sk.skill_name)!;
      data.total += 1;
      if (s.placement_status === 'Placed') data.placed += 1;
      if (s.employment_status === 'Working') data.working += 1;
    }
  }

  return Array.from(skillFreq.entries())
    .map(([skillName, data]) => ({
      skill: skillName,
      total: data.total,
      placed: data.placed,
      placementRate: data.total > 0 ? Math.round((data.placed / data.total) * 100) : 0,
      working: data.working
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);
}

// Chart 8: Career Goals Distribution
export function getCareerGoalsDistribution(cohort: EnrichedStudent[]) {
  const goals = new Map<string, number>();
  for (const s of cohort) {
    goals.set(s.career_goal, (goals.get(s.career_goal) || 0) + 1);
  }
  return Array.from(goals.entries())
    .map(([goal, count]) => ({ goal, count }))
    .sort((a, b) => b.count - a.count);
}

// Chart 9: Industry Distribution
export function getIndustryDistribution(cohort: EnrichedStudent[]) {
  const indMap = new Map<string, number>();
  for (const s of cohort) {
    if (s.industry && s.industry !== 'N/A') {
      indMap.set(s.industry, (indMap.get(s.industry) || 0) + 1);
    }
  }
  return Array.from(indMap.entries())
    .map(([industry, count]) => ({ industry, count }))
    .sort((a, b) => b.count - a.count);
}

// Chart 10: Job Role Distribution
export function getJobRoleDistribution(cohort: EnrichedStudent[]) {
  const roleMap = new Map<string, number>();
  for (const s of cohort) {
    if (s.job_role && s.job_role !== 'Not Applicable' && s.job_role !== 'N/A') {
      roleMap.set(s.job_role, (roleMap.get(s.job_role) || 0) + 1);
    }
  }
  return Array.from(roleMap.entries())
    .map(([role, count]) => ({ role, count }))
    .sort((a, b) => b.count - a.count);
}

// Placement Funnel Stages
export function getPlacementFunnelData(cohort: EnrichedStudent[]) {
  const total = cohort.length;
  const seekers = cohort.filter(s => s.is_seeker).length;
  const interviewed = cohort.filter(s => s.interviewed).length;
  const receivedOffers = cohort.filter(s => s.received_offers).length;
  const acceptedOffers = cohort.filter(s => s.accepted_offers).length;
  const working = cohort.filter(s => s.currently_working).length;

  return [
    { stage: 'Total Students', count: total, color: '#3b82f6', dropOff: 0, conversion: 100 },
    { stage: 'Job Seekers', count: seekers, color: '#6366f1', dropOff: total - seekers, conversion: total ? Math.round((seekers / total) * 100) : 0 },
    { stage: 'Interviewed', count: interviewed, color: '#8b5cf6', dropOff: seekers - interviewed, conversion: seekers ? Math.round((interviewed / seekers) * 100) : 0 },
    { stage: 'Received Offers', count: receivedOffers, color: '#a855f7', dropOff: interviewed - receivedOffers, conversion: interviewed ? Math.round((receivedOffers / interviewed) * 100) : 0 },
    { stage: 'Accepted Offers', count: acceptedOffers, color: '#06b6d4', dropOff: receivedOffers - acceptedOffers, conversion: receivedOffers ? Math.round((acceptedOffers / receivedOffers) * 100) : 0 },
    { stage: 'Currently Working', count: working, color: '#10b981', dropOff: acceptedOffers - working, conversion: acceptedOffers ? Math.round((working / acceptedOffers) * 100) : 0 }
  ];
}

// Automated Descriptive Insights with strictly non-causal language
export function generateNonCausalInsights(cohort: EnrichedStudent[]) {
  const total = cohort.length;
  if (total === 0) return [];

  const placed = cohort.filter(s => s.placement_status === 'Placed');
  const placedRate = Math.round((placed.length / total) * 100);

  const grad2025 = cohort.filter(s => s.graduation_year === 2025);
  const grad2026 = cohort.filter(s => s.graduation_year === 2026);
  const rate2025 = grad2025.length ? Math.round((grad2025.filter(s => s.placement_status === 'Placed').length / grad2025.length) * 100) : 0;
  const rate2026 = grad2026.length ? Math.round((grad2026.filter(s => s.placement_status === 'Placed').length / grad2026.length) * 100) : 0;

  // SQL skill observation
  const sqlStudents = cohort.filter(s => s.skills.some(sk => sk.skill_name === 'SQL'));
  const sqlPlaced = sqlStudents.filter(s => s.placement_status === 'Placed').length;
  const sqlPlacedRate = sqlStudents.length ? Math.round((sqlPlaced / sqlStudents.length) * 100) : 0;

  // Python skill observation
  const pyStudents = cohort.filter(s => s.skills.some(sk => sk.skill_name === 'Python'));
  const pyPlaced = pyStudents.filter(s => s.placement_status === 'Placed').length;
  const pyPlacedRate = pyStudents.length ? Math.round((pyPlaced / pyStudents.length) * 100) : 0;

  // Startup employment observation
  const working = cohort.filter(s => s.employment_status === 'Working');
  const startupCount = working.filter(s => s.company_type === 'Startup').length;
  const startupPct = working.length ? Math.round((startupCount / working.length) * 100) : 0;

  // Skill gap observation
  const skillGaps = cohort.filter(s => s.has_skill_gap).length;
  const gapRate = Math.round((skillGaps / total) * 100);

  // Top hiring industry in sample
  const indMap = new Map<string, number>();
  for (const w of working) {
    if (w.industry && w.industry !== 'N/A') {
      indMap.set(w.industry, (indMap.get(w.industry) || 0) + 1);
    }
  }
  const sortedInd = Array.from(indMap.entries()).sort((a, b) => b[1] - a[1]);
  const topInd = sortedInd[0] ? `${sortedInd[0][0]} (${sortedInd[0][1]} graduates)` : 'SaaS / IT Services';

  return [
    {
      title: 'Sample Placement Benchmark',
      text: `Among this sample of ${total} records, ${placedRate}% of students (${placed.length}) are marked as placed.`,
      tag: 'Placement Metric',
      accent: 'blue'
    },
    {
      title: 'Graduation Cohort Observation',
      text: `Graduation year 2026 contains ${grad2026.length} students with an observed ${rate2026}% placement rate in this sample, compared to ${rate2025}% across ${grad2025.length} students in 2025.`,
      tag: 'Cohort Comparison',
      accent: 'indigo'
    },
    {
      title: 'SQL Association in Dataset',
      text: `Students with SQL appear in ${sqlPlacedRate}% of placed records within this sample (${sqlPlaced} of ${sqlStudents.length} candidates).`,
      tag: 'Skill Association',
      accent: 'emerald'
    },
    {
      title: 'Python Competency Correlation',
      text: `Observed in this dataset: ${pyStudents.length} students possessed Python proficiency, showing an association with a ${pyPlacedRate}% placement rate.`,
      tag: 'Skill Association',
      accent: 'amber'
    },
    {
      title: 'Startup Absorption Pattern',
      text: `Among currently employed graduates in this sample, ${startupPct}% (${startupCount} candidates) are working at early-to-growth stage startups.`,
      tag: 'Employment Pattern',
      accent: 'purple'
    },
    {
      title: 'Candidate Skill Gap Finding',
      text: `An association observed in the sample indicates that ${gapRate}% of candidates (${skillGaps} students) exhibit a skill gap relative to the technical requirements of their stated career goal.`,
      tag: 'Career Readiness',
      accent: 'rose'
    },
    {
      title: 'Primary Industry Concentration',
      text: `Observed in this dataset, the highest frequency of placed candidates converged in ${topInd}.`,
      tag: 'Industry Focus',
      accent: 'cyan'
    }
  ];
}

// Generate the raw SQL representation for any filter
export function generateSqlForFilters(filters: DashboardFilters): string {
  const whereClauses: string[] = [];

  if (filters.graduationYear && filters.graduationYear !== 'ALL') {
    whereClauses.push(`s.graduation_year = ${filters.graduationYear}`);
  }
  if (filters.universityId && filters.universityId !== 'ALL') {
    whereClauses.push(`c.university_id = '${filters.universityId}'`);
  }
  if (filters.collegeId && filters.collegeId !== 'ALL') {
    whereClauses.push(`s.college_id = '${filters.collegeId}'`);
  }
  if (filters.degree && filters.degree !== 'ALL') {
    whereClauses.push(`s.degree = '${filters.degree}'`);
  }
  if (filters.district && filters.district !== 'ALL') {
    whereClauses.push(`s.district = '${filters.district}'`);
  }
  if (filters.placementStatus && filters.placementStatus !== 'ALL') {
    whereClauses.push(`p.placement_status = '${filters.placementStatus}'`);
  }
  if (filters.employmentStatus && filters.employmentStatus !== 'ALL') {
    whereClauses.push(`e.employment_status = '${filters.employmentStatus}'`);
  }
  if (filters.companyType && filters.companyType !== 'ALL') {
    whereClauses.push(`e.company_type = '${filters.companyType}'`);
  }
  if (filters.industry && filters.industry !== 'ALL') {
    whereClauses.push(`e.industry = '${filters.industry}'`);
  }
  if (filters.skillName && filters.skillName !== 'ALL') {
    whereClauses.push(`EXISTS (
    SELECT 1 FROM student_skills ss
    JOIN skills sk ON ss.skill_id = sk.skill_id
    WHERE ss.student_id = s.student_id AND sk.skill_name = '${filters.skillName}'
  )`);
  }

  const whereText = whereClauses.length > 0 ? `WHERE\n  ${whereClauses.join(' AND\n  ')}` : '-- No active filters applied (Showing all records)';

  return `SELECT
  s.student_id,
  s.graduation_year,
  c.college_name,
  u.university_name,
  s.degree,
  s.cgpa,
  s.district,
  s.career_goal,
  p.placement_status,
  p.placement_source,
  e.employment_status,
  e.company_type,
  e.job_role,
  e.salary_band
FROM students s
JOIN colleges c ON s.college_id = c.college_id
JOIN universities u ON c.university_id = u.university_id
LEFT JOIN placements p ON s.student_id = p.student_id
LEFT JOIN employment e ON s.student_id = e.student_id
${whereText}
ORDER BY s.student_id ASC;`;
}
