// Relational Database Types for Tamil Nadu Graduate Career Intelligence

export interface University {
  university_id: string;
  university_name: string;
  district: string;
}

export interface College {
  college_id: string;
  college_name: string;
  university_id: string;
  district: string;
  college_type: 'Government' | 'Autonomous' | 'Private' | 'Constituent';
}

export interface Skill {
  skill_id: string;
  skill_name: string;
  category: 'Programming' | 'Data & AI' | 'Cloud & DevOps' | 'Core Engineering' | 'Web & Mobile';
}

export interface StudentSkill {
  student_id: string;
  skill_id: string;
  skill_level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export type EmploymentStatus = 'Working' | 'Seeking' | 'Higher Studies' | 'Other';
export type CompanyType = 'Startup' | 'MNC' | 'Large Company' | 'SME' | 'Other';
export type PlacementStatus = 'Placed' | 'Not Placed';
export type PlacementSource = 'On-Campus' | 'Off-Campus' | 'Referral' | 'Internship Conversion' | 'None';

export interface Student {
  student_id: string;
  graduation_year: 2025 | 2026;
  college_id: string;
  degree: string;
  cgpa: number;
  district: string;
  career_goal: string;
}

export interface Employment {
  student_id: string;
  employment_status: EmploymentStatus;
  company_type: CompanyType;
  industry: string;
  job_role: string;
  salary_band: string;
}

export interface Placement {
  student_id: string;
  placement_status: PlacementStatus;
  placement_year: number | null;
  placement_source: PlacementSource;
  time_to_employment: number | null; // in months
}

export interface FunnelRecord {
  student_id: string;
  is_seeker: boolean;
  interviewed: boolean;
  received_offers: boolean;
  accepted_offers: boolean;
  currently_working: boolean;
}

// Denormalized joined record for fast analytics and rendering
export interface EnrichedStudent {
  student_id: string;
  graduation_year: 2025 | 2026;
  college_id: string;
  college_name: string;
  college_type: string;
  university_id: string;
  university_name: string;
  degree: string;
  cgpa: number;
  district: string;
  career_goal: string;
  skills: Array<{
    skill_id: string;
    skill_name: string;
    skill_level: 'Beginner' | 'Intermediate' | 'Advanced';
  }>;
  placement_status: PlacementStatus;
  placement_year: number | null;
  placement_source: PlacementSource;
  time_to_employment: number | null;
  employment_status: EmploymentStatus;
  company_type: CompanyType;
  industry: string;
  job_role: string;
  salary_band: string;
  // Funnel flags
  is_seeker: boolean;
  interviewed: boolean;
  received_offers: boolean;
  accepted_offers: boolean;
  currently_working: boolean;
  // Skill Gap Analysis
  target_required_skills: string[];
  missing_skills: string[];
  has_skill_gap: boolean;
}

export interface DashboardFilters {
  graduationYear?: 2025 | 2026 | 'ALL';
  universityId?: string | 'ALL';
  collegeId?: string | 'ALL';
  degree?: string | 'ALL';
  district?: string | 'ALL';
  placementStatus?: PlacementStatus | 'ALL';
  employmentStatus?: EmploymentStatus | 'ALL';
  companyType?: CompanyType | 'ALL';
  industry?: string | 'ALL';
  skillName?: string | 'ALL';
  searchQuery?: string;
}

export interface KpiMetrics {
  totalStudents: number;
  graduates2025: number;
  graduates2026: number;
  placementRate: number; // percentage
  employmentRate: number; // percentage
  studentsSeeking: number;
  startupEmploymentRate: number; // percentage
  startupCount: number;
  studentsWithSkillGaps: number;
  skillGapRate: number; // percentage
  avgTimeToEmployment: number; // months
  interviewConversionRate: number; // percentage
  offerConversionRate: number; // percentage
  acceptanceRate: number; // percentage
}
