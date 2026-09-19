// Auto-generated seed data for Tamil Nadu Graduate Career Intelligence prototype
import {
  University,
  College,
  Skill,
  Student,
  StudentSkill,
  Employment,
  Placement,
  FunnelRecord
} from '../types/database';

export const universities: University[] = [
  {
    "university_id": "UNIV-ANNA",
    "university_name": "Anna University",
    "district": "Chennai"
  },
  {
    "university_id": "UNIV-MADRAS",
    "university_name": "University of Madras",
    "district": "Chennai"
  },
  {
    "university_id": "UNIV-BHARATHIAR",
    "university_name": "Bharathiar University",
    "district": "Coimbatore"
  },
  {
    "university_id": "UNIV-MKU",
    "university_name": "Madurai Kamaraj University",
    "district": "Madurai"
  },
  {
    "university_id": "UNIV-BDASAN",
    "university_name": "Bharathidasan University",
    "district": "Tiruchirappalli"
  }
];

export const colleges: College[] = [
  {
    "college_id": "COL-CEG",
    "college_name": "College of Engineering, Guindy (CEG)",
    "university_id": "UNIV-ANNA",
    "district": "Chennai",
    "college_type": "Government"
  },
  {
    "college_id": "COL-MIT",
    "college_name": "Madras Institute of Technology (MIT)",
    "university_id": "UNIV-ANNA",
    "district": "Chennai",
    "college_type": "Government"
  },
  {
    "college_id": "COL-SSN",
    "college_name": "Sri Sivasubramaniya Nadar College of Eng. (SSN)",
    "university_id": "UNIV-ANNA",
    "district": "Kanchipuram",
    "college_type": "Autonomous"
  },
  {
    "college_id": "COL-PSG",
    "college_name": "PSG College of Technology",
    "university_id": "UNIV-ANNA",
    "district": "Coimbatore",
    "college_type": "Autonomous"
  },
  {
    "college_id": "COL-CIT",
    "college_name": "Coimbatore Institute of Technology (CIT)",
    "university_id": "UNIV-ANNA",
    "district": "Coimbatore",
    "college_type": "Autonomous"
  },
  {
    "college_id": "COL-GCT",
    "college_name": "Government College of Technology (GCT)",
    "university_id": "UNIV-ANNA",
    "district": "Coimbatore",
    "college_type": "Government"
  },
  {
    "college_id": "COL-TCE",
    "college_name": "Thiagarajar College of Engineering (TCE)",
    "university_id": "UNIV-ANNA",
    "district": "Madurai",
    "college_type": "Autonomous"
  },
  {
    "college_id": "COL-LOYOLA",
    "college_name": "Loyola College (Autonomous)",
    "university_id": "UNIV-MADRAS",
    "district": "Chennai",
    "college_type": "Autonomous"
  },
  {
    "college_id": "COL-SJC",
    "college_name": "St. Joseph's College (Autonomous)",
    "university_id": "UNIV-BDASAN",
    "district": "Tiruchirappalli",
    "college_type": "Autonomous"
  },
  {
    "college_id": "COL-KCT",
    "college_name": "Kumaraguru College of Technology (KCT)",
    "university_id": "UNIV-ANNA",
    "district": "Coimbatore",
    "college_type": "Autonomous"
  }
];

export const skills: Skill[] = [
  {
    "skill_id": "SK-PY",
    "skill_name": "Python",
    "category": "Programming"
  },
  {
    "skill_id": "SK-SQL",
    "skill_name": "SQL",
    "category": "Data & AI"
  },
  {
    "skill_id": "SK-REACT",
    "skill_name": "React",
    "category": "Web & Mobile"
  },
  {
    "skill_id": "SK-NODE",
    "skill_name": "Node.js",
    "category": "Web & Mobile"
  },
  {
    "skill_id": "SK-JAVA",
    "skill_name": "Java",
    "category": "Programming"
  },
  {
    "skill_id": "SK-AWS",
    "skill_name": "Cloud / AWS",
    "category": "Cloud & DevOps"
  },
  {
    "skill_id": "SK-DOCKER",
    "skill_name": "Docker & Kubernetes",
    "category": "Cloud & DevOps"
  },
  {
    "skill_id": "SK-ML",
    "skill_name": "Machine Learning",
    "category": "Data & AI"
  },
  {
    "skill_id": "SK-IOT",
    "skill_name": "Embedded C / IoT",
    "category": "Core Engineering"
  },
  {
    "skill_id": "SK-DSA",
    "skill_name": "Data Structures & Algorithms",
    "category": "Programming"
  },
  {
    "skill_id": "SK-GIT",
    "skill_name": "Git & CI/CD",
    "category": "Cloud & DevOps"
  },
  {
    "skill_id": "SK-TS",
    "skill_name": "TypeScript",
    "category": "Web & Mobile"
  },
  {
    "skill_id": "SK-SPRING",
    "skill_name": "Spring Boot",
    "category": "Programming"
  },
  {
    "skill_id": "SK-BI",
    "skill_name": "Power BI / Tableau",
    "category": "Data & AI"
  }
];

export const careerRequirements: Record<string, string[]> = {
  "Full Stack Developer": [
    "React",
    "Node.js",
    "SQL",
    "Git & CI/CD"
  ],
  "Data Analyst": [
    "SQL",
    "Python",
    "Power BI / Tableau",
    "Data Structures & Algorithms"
  ],
  "AI/ML Engineer": [
    "Python",
    "Machine Learning",
    "SQL",
    "Cloud / AWS"
  ],
  "Cloud Solutions Architect": [
    "Cloud / AWS",
    "Docker & Kubernetes",
    "Git & CI/CD",
    "Python"
  ],
  "DevOps Engineer": [
    "Cloud / AWS",
    "Docker & Kubernetes",
    "Git & CI/CD",
    "Python"
  ],
  "Embedded Systems Engineer": [
    "Embedded C / IoT",
    "Data Structures & Algorithms",
    "Python"
  ],
  "Cybersecurity Analyst": [
    "Cloud / AWS",
    "Python",
    "SQL"
  ],
  "Backend Developer": [
    "Java",
    "Spring Boot",
    "SQL",
    "Git & CI/CD"
  ],
  "QA Automation Engineer": [
    "Python",
    "SQL",
    "Git & CI/CD",
    "Data Structures & Algorithms"
  ],
  "Product Manager": [
    "SQL",
    "Power BI / Tableau",
    "React"
  ]
};

export const students: Student[] = [
  {
    "student_id": "TN-STU-001",
    "graduation_year": 2025,
    "college_id": "COL-KCT",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 7.89,
    "district": "Coimbatore",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-002",
    "graduation_year": 2025,
    "college_id": "COL-SSN",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 8.53,
    "district": "Salem",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-003",
    "graduation_year": 2025,
    "college_id": "COL-SSN",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 7.81,
    "district": "Kanchipuram",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-004",
    "graduation_year": 2025,
    "college_id": "COL-SSN",
    "degree": "M.Sc Data Science",
    "cgpa": 9.63,
    "district": "Kanchipuram",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-005",
    "graduation_year": 2025,
    "college_id": "COL-LOYOLA",
    "degree": "MCA",
    "cgpa": 7.12,
    "district": "Chennai",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-006",
    "graduation_year": 2025,
    "college_id": "COL-CIT",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 6.97,
    "district": "Coimbatore",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-007",
    "graduation_year": 2025,
    "college_id": "COL-CIT",
    "degree": "MCA",
    "cgpa": 8.42,
    "district": "Coimbatore",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-008",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 9.15,
    "district": "Thanjavur",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-009",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "BCA",
    "cgpa": 9.42,
    "district": "Coimbatore",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-010",
    "graduation_year": 2025,
    "college_id": "COL-SSN",
    "degree": "M.Sc Data Science",
    "cgpa": 7.62,
    "district": "Kanchipuram",
    "career_goal": "QA Automation Engineer"
  },
  {
    "student_id": "TN-STU-011",
    "graduation_year": 2025,
    "college_id": "COL-MIT",
    "degree": "MCA",
    "cgpa": 8.36,
    "district": "Chennai",
    "career_goal": "QA Automation Engineer"
  },
  {
    "student_id": "TN-STU-012",
    "graduation_year": 2025,
    "college_id": "COL-CEG",
    "degree": "B.E. Computer Science",
    "cgpa": 7.47,
    "district": "Chennai",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-013",
    "graduation_year": 2025,
    "college_id": "COL-PSG",
    "degree": "BCA",
    "cgpa": 9.39,
    "district": "Coimbatore",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-014",
    "graduation_year": 2025,
    "college_id": "COL-CIT",
    "degree": "B.Sc Computer Science",
    "cgpa": 7.24,
    "district": "Kanchipuram",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-015",
    "graduation_year": 2025,
    "college_id": "COL-CIT",
    "degree": "B.Tech Information Technology",
    "cgpa": 9.05,
    "district": "Coimbatore",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-016",
    "graduation_year": 2025,
    "college_id": "COL-PSG",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 9.18,
    "district": "Coimbatore",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-017",
    "graduation_year": 2025,
    "college_id": "COL-LOYOLA",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 8.15,
    "district": "Chennai",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-018",
    "graduation_year": 2025,
    "college_id": "COL-SJC",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 9.05,
    "district": "Madurai",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-019",
    "graduation_year": 2025,
    "college_id": "COL-SSN",
    "degree": "B.E. Computer Science",
    "cgpa": 7.71,
    "district": "Kanchipuram",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-020",
    "graduation_year": 2025,
    "college_id": "COL-CEG",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 7.8,
    "district": "Chennai",
    "career_goal": "QA Automation Engineer"
  },
  {
    "student_id": "TN-STU-021",
    "graduation_year": 2025,
    "college_id": "COL-SSN",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 7.71,
    "district": "Kanchipuram",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-022",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "B.Tech Information Technology",
    "cgpa": 7.56,
    "district": "Coimbatore",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-023",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "B.Tech Information Technology",
    "cgpa": 9.34,
    "district": "Coimbatore",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-024",
    "graduation_year": 2025,
    "college_id": "COL-TCE",
    "degree": "M.Sc Data Science",
    "cgpa": 7.94,
    "district": "Tirunelveli",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-025",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 8.72,
    "district": "Coimbatore",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-026",
    "graduation_year": 2025,
    "college_id": "COL-CEG",
    "degree": "BCA",
    "cgpa": 7.56,
    "district": "Chennai",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-027",
    "graduation_year": 2025,
    "college_id": "COL-KCT",
    "degree": "MCA",
    "cgpa": 7.97,
    "district": "Erode",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-028",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 7.95,
    "district": "Coimbatore",
    "career_goal": "QA Automation Engineer"
  },
  {
    "student_id": "TN-STU-029",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 9.73,
    "district": "Coimbatore",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-030",
    "graduation_year": 2025,
    "college_id": "COL-LOYOLA",
    "degree": "B.E. Computer Science",
    "cgpa": 8.76,
    "district": "Erode",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-031",
    "graduation_year": 2025,
    "college_id": "COL-SSN",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 6.79,
    "district": "Kanchipuram",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-032",
    "graduation_year": 2025,
    "college_id": "COL-CIT",
    "degree": "B.Tech Information Technology",
    "cgpa": 8.79,
    "district": "Coimbatore",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-033",
    "graduation_year": 2025,
    "college_id": "COL-SSN",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 7.21,
    "district": "Kanchipuram",
    "career_goal": "Cybersecurity Analyst"
  },
  {
    "student_id": "TN-STU-034",
    "graduation_year": 2025,
    "college_id": "COL-SSN",
    "degree": "MCA",
    "cgpa": 7.34,
    "district": "Kanchipuram",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-035",
    "graduation_year": 2025,
    "college_id": "COL-LOYOLA",
    "degree": "B.Tech Information Technology",
    "cgpa": 7.88,
    "district": "Vellore",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-036",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "B.E. Computer Science",
    "cgpa": 7.25,
    "district": "Coimbatore",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-037",
    "graduation_year": 2025,
    "college_id": "COL-CEG",
    "degree": "B.Sc Computer Science",
    "cgpa": 8.81,
    "district": "Chennai",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-038",
    "graduation_year": 2025,
    "college_id": "COL-CEG",
    "degree": "B.Sc Computer Science",
    "cgpa": 7.77,
    "district": "Kanchipuram",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-039",
    "graduation_year": 2025,
    "college_id": "COL-PSG",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 8.3,
    "district": "Coimbatore",
    "career_goal": "Data Analyst"
  },
  {
    "student_id": "TN-STU-040",
    "graduation_year": 2025,
    "college_id": "COL-LOYOLA",
    "degree": "B.Tech Information Technology",
    "cgpa": 8.64,
    "district": "Chennai",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-041",
    "graduation_year": 2025,
    "college_id": "COL-CIT",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 9.43,
    "district": "Salem",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-042",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "B.Sc Computer Science",
    "cgpa": 7.77,
    "district": "Coimbatore",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-043",
    "graduation_year": 2025,
    "college_id": "COL-LOYOLA",
    "degree": "MCA",
    "cgpa": 9.39,
    "district": "Chennai",
    "career_goal": "Data Analyst"
  },
  {
    "student_id": "TN-STU-044",
    "graduation_year": 2025,
    "college_id": "COL-PSG",
    "degree": "MCA",
    "cgpa": 6.82,
    "district": "Coimbatore",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-045",
    "graduation_year": 2025,
    "college_id": "COL-CIT",
    "degree": "B.E. Computer Science",
    "cgpa": 8.28,
    "district": "Coimbatore",
    "career_goal": "QA Automation Engineer"
  },
  {
    "student_id": "TN-STU-046",
    "graduation_year": 2025,
    "college_id": "COL-PSG",
    "degree": "B.E. Computer Science",
    "cgpa": 8.41,
    "district": "Kanchipuram",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-047",
    "graduation_year": 2025,
    "college_id": "COL-MIT",
    "degree": "B.E. Computer Science",
    "cgpa": 8.03,
    "district": "Chennai",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-048",
    "graduation_year": 2025,
    "college_id": "COL-SJC",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 6.97,
    "district": "Tiruchirappalli",
    "career_goal": "QA Automation Engineer"
  },
  {
    "student_id": "TN-STU-049",
    "graduation_year": 2025,
    "college_id": "COL-PSG",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 9.2,
    "district": "Coimbatore",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-050",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "BCA",
    "cgpa": 6.97,
    "district": "Madurai",
    "career_goal": "QA Automation Engineer"
  },
  {
    "student_id": "TN-STU-051",
    "graduation_year": 2025,
    "college_id": "COL-MIT",
    "degree": "MCA",
    "cgpa": 9.14,
    "district": "Chennai",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-052",
    "graduation_year": 2025,
    "college_id": "COL-SSN",
    "degree": "B.Tech Information Technology",
    "cgpa": 7.4,
    "district": "Kanchipuram",
    "career_goal": "Cybersecurity Analyst"
  },
  {
    "student_id": "TN-STU-053",
    "graduation_year": 2025,
    "college_id": "COL-CEG",
    "degree": "MCA",
    "cgpa": 8.01,
    "district": "Chennai",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-054",
    "graduation_year": 2025,
    "college_id": "COL-GCT",
    "degree": "MCA",
    "cgpa": 9.42,
    "district": "Chennai",
    "career_goal": "Data Analyst"
  },
  {
    "student_id": "TN-STU-055",
    "graduation_year": 2025,
    "college_id": "COL-CEG",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 7.25,
    "district": "Chennai",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-056",
    "graduation_year": 2025,
    "college_id": "COL-SJC",
    "degree": "BCA",
    "cgpa": 8.42,
    "district": "Tiruchirappalli",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-057",
    "graduation_year": 2026,
    "college_id": "COL-SSN",
    "degree": "B.E. Computer Science",
    "cgpa": 9.74,
    "district": "Kanchipuram",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-058",
    "graduation_year": 2026,
    "college_id": "COL-GCT",
    "degree": "MCA",
    "cgpa": 8.99,
    "district": "Thanjavur",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-059",
    "graduation_year": 2026,
    "college_id": "COL-SJC",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 8.97,
    "district": "Tiruchirappalli",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-060",
    "graduation_year": 2026,
    "college_id": "COL-KCT",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 9.73,
    "district": "Coimbatore",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-061",
    "graduation_year": 2026,
    "college_id": "COL-PSG",
    "degree": "B.Tech Information Technology",
    "cgpa": 8.25,
    "district": "Coimbatore",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-062",
    "graduation_year": 2026,
    "college_id": "COL-SJC",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 7.94,
    "district": "Erode",
    "career_goal": "AI/ML Engineer"
  },
  {
    "student_id": "TN-STU-063",
    "graduation_year": 2026,
    "college_id": "COL-MIT",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 6.91,
    "district": "Chennai",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-064",
    "graduation_year": 2026,
    "college_id": "COL-CIT",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 7.25,
    "district": "Coimbatore",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-065",
    "graduation_year": 2026,
    "college_id": "COL-MIT",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 9.16,
    "district": "Vellore",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-066",
    "graduation_year": 2026,
    "college_id": "COL-MIT",
    "degree": "B.Sc Computer Science",
    "cgpa": 7.83,
    "district": "Erode",
    "career_goal": "Data Analyst"
  },
  {
    "student_id": "TN-STU-067",
    "graduation_year": 2026,
    "college_id": "COL-LOYOLA",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 8.02,
    "district": "Chennai",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-068",
    "graduation_year": 2026,
    "college_id": "COL-CEG",
    "degree": "M.Sc Data Science",
    "cgpa": 9.16,
    "district": "Chennai",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-069",
    "graduation_year": 2026,
    "college_id": "COL-LOYOLA",
    "degree": "B.Sc Computer Science",
    "cgpa": 9.53,
    "district": "Chennai",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-070",
    "graduation_year": 2026,
    "college_id": "COL-CEG",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 7.02,
    "district": "Thanjavur",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-071",
    "graduation_year": 2026,
    "college_id": "COL-PSG",
    "degree": "MCA",
    "cgpa": 7.97,
    "district": "Coimbatore",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-072",
    "graduation_year": 2026,
    "college_id": "COL-TCE",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 6.8,
    "district": "Kanchipuram",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-073",
    "graduation_year": 2026,
    "college_id": "COL-MIT",
    "degree": "B.Tech Information Technology",
    "cgpa": 7.28,
    "district": "Chennai",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-074",
    "graduation_year": 2026,
    "college_id": "COL-PSG",
    "degree": "BCA",
    "cgpa": 6.81,
    "district": "Chennai",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-075",
    "graduation_year": 2026,
    "college_id": "COL-PSG",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 8.24,
    "district": "Thanjavur",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-076",
    "graduation_year": 2026,
    "college_id": "COL-SJC",
    "degree": "B.Sc Computer Science",
    "cgpa": 7.11,
    "district": "Coimbatore",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-077",
    "graduation_year": 2026,
    "college_id": "COL-LOYOLA",
    "degree": "BCA",
    "cgpa": 7.07,
    "district": "Tiruchirappalli",
    "career_goal": "Data Analyst"
  },
  {
    "student_id": "TN-STU-078",
    "graduation_year": 2026,
    "college_id": "COL-LOYOLA",
    "degree": "M.Sc Data Science",
    "cgpa": 9.06,
    "district": "Salem",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-079",
    "graduation_year": 2026,
    "college_id": "COL-TCE",
    "degree": "M.Sc Data Science",
    "cgpa": 7.17,
    "district": "Madurai",
    "career_goal": "Product Manager"
  },
  {
    "student_id": "TN-STU-080",
    "graduation_year": 2026,
    "college_id": "COL-SSN",
    "degree": "M.Sc Data Science",
    "cgpa": 9.11,
    "district": "Kanchipuram",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-081",
    "graduation_year": 2026,
    "college_id": "COL-PSG",
    "degree": "B.E. Computer Science",
    "cgpa": 8.48,
    "district": "Coimbatore",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-082",
    "graduation_year": 2026,
    "college_id": "COL-GCT",
    "degree": "B.Tech Information Technology",
    "cgpa": 7.27,
    "district": "Coimbatore",
    "career_goal": "QA Automation Engineer"
  },
  {
    "student_id": "TN-STU-083",
    "graduation_year": 2026,
    "college_id": "COL-KCT",
    "degree": "B.E. Computer Science",
    "cgpa": 7.64,
    "district": "Coimbatore",
    "career_goal": "Backend Developer"
  },
  {
    "student_id": "TN-STU-084",
    "graduation_year": 2026,
    "college_id": "COL-MIT",
    "degree": "BCA",
    "cgpa": 8.58,
    "district": "Chennai",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-085",
    "graduation_year": 2026,
    "college_id": "COL-CIT",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 7.3,
    "district": "Coimbatore",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-086",
    "graduation_year": 2026,
    "college_id": "COL-CEG",
    "degree": "B.Sc Computer Science",
    "cgpa": 7.02,
    "district": "Erode",
    "career_goal": "Data Analyst"
  },
  {
    "student_id": "TN-STU-087",
    "graduation_year": 2026,
    "college_id": "COL-KCT",
    "degree": "BCA",
    "cgpa": 8.68,
    "district": "Coimbatore",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-088",
    "graduation_year": 2026,
    "college_id": "COL-KCT",
    "degree": "MCA",
    "cgpa": 7.66,
    "district": "Tiruchirappalli",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-089",
    "graduation_year": 2026,
    "college_id": "COL-MIT",
    "degree": "B.Tech Information Technology",
    "cgpa": 7.58,
    "district": "Chennai",
    "career_goal": "Cybersecurity Analyst"
  },
  {
    "student_id": "TN-STU-090",
    "graduation_year": 2026,
    "college_id": "COL-MIT",
    "degree": "B.E. Computer Science",
    "cgpa": 7.29,
    "district": "Chennai",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-091",
    "graduation_year": 2026,
    "college_id": "COL-PSG",
    "degree": "B.E. Computer Science",
    "cgpa": 7.73,
    "district": "Chennai",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-092",
    "graduation_year": 2026,
    "college_id": "COL-GCT",
    "degree": "MCA",
    "cgpa": 8.17,
    "district": "Coimbatore",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-093",
    "graduation_year": 2026,
    "college_id": "COL-TCE",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 9.21,
    "district": "Madurai",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-094",
    "graduation_year": 2026,
    "college_id": "COL-CIT",
    "degree": "BCA",
    "cgpa": 7.01,
    "district": "Salem",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-095",
    "graduation_year": 2026,
    "college_id": "COL-GCT",
    "degree": "B.E. Mechanical Engineering",
    "cgpa": 6.87,
    "district": "Thanjavur",
    "career_goal": "Cybersecurity Analyst"
  },
  {
    "student_id": "TN-STU-096",
    "graduation_year": 2026,
    "college_id": "COL-CIT",
    "degree": "BCA",
    "cgpa": 7.8,
    "district": "Madurai",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-097",
    "graduation_year": 2026,
    "college_id": "COL-KCT",
    "degree": "B.E. Computer Science",
    "cgpa": 6.88,
    "district": "Coimbatore",
    "career_goal": "DevOps Engineer"
  },
  {
    "student_id": "TN-STU-098",
    "graduation_year": 2026,
    "college_id": "COL-KCT",
    "degree": "B.E. Electronics & Communication",
    "cgpa": 8.78,
    "district": "Tiruchirappalli",
    "career_goal": "Embedded Systems Engineer"
  },
  {
    "student_id": "TN-STU-099",
    "graduation_year": 2026,
    "college_id": "COL-SJC",
    "degree": "B.Tech Information Technology",
    "cgpa": 8.28,
    "district": "Tiruchirappalli",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-100",
    "graduation_year": 2026,
    "college_id": "COL-SSN",
    "degree": "BCA",
    "cgpa": 9.34,
    "district": "Kanchipuram",
    "career_goal": "Cloud Solutions Architect"
  },
  {
    "student_id": "TN-STU-101",
    "graduation_year": 2026,
    "college_id": "COL-TCE",
    "degree": "BCA",
    "cgpa": 9.01,
    "district": "Kanchipuram",
    "career_goal": "Full Stack Developer"
  },
  {
    "student_id": "TN-STU-102",
    "graduation_year": 2026,
    "college_id": "COL-CIT",
    "degree": "B.Tech Information Technology",
    "cgpa": 8.28,
    "district": "Coimbatore",
    "career_goal": "Cybersecurity Analyst"
  }
];

export const studentSkills: StudentSkill[] = [
  {
    "student_id": "TN-STU-001",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-001",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-001",
    "skill_id": "SK-GIT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-002",
    "skill_id": "SK-JAVA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-002",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-002",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-002",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-003",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-003",
    "skill_id": "SK-JAVA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-003",
    "skill_id": "SK-SPRING",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-003",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-004",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-004",
    "skill_id": "SK-AWS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-004",
    "skill_id": "SK-BI",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-005",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-005",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-005",
    "skill_id": "SK-IOT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-005",
    "skill_id": "SK-ML",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-005",
    "skill_id": "SK-GIT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-006",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-006",
    "skill_id": "SK-GIT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-006",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-006",
    "skill_id": "SK-TS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-006",
    "skill_id": "SK-DSA",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-007",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-007",
    "skill_id": "SK-BI",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-007",
    "skill_id": "SK-REACT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-007",
    "skill_id": "SK-ML",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-007",
    "skill_id": "SK-IOT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-008",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-008",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-008",
    "skill_id": "SK-GIT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-008",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-008",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-009",
    "skill_id": "SK-DOCKER",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-009",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-009",
    "skill_id": "SK-GIT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-010",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-010",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-010",
    "skill_id": "SK-SQL",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-010",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-011",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-011",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-011",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-012",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-012",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-013",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-013",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-013",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-014",
    "skill_id": "SK-REACT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-014",
    "skill_id": "SK-BI",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-014",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-014",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-014",
    "skill_id": "SK-DOCKER",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-015",
    "skill_id": "SK-JAVA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-015",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-015",
    "skill_id": "SK-IOT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-016",
    "skill_id": "SK-GIT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-016",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-016",
    "skill_id": "SK-NODE",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-017",
    "skill_id": "SK-PY",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-017",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-018",
    "skill_id": "SK-JAVA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-018",
    "skill_id": "SK-DSA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-018",
    "skill_id": "SK-TS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-018",
    "skill_id": "SK-ML",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-018",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-019",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-019",
    "skill_id": "SK-REACT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-019",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-020",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-020",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-020",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-021",
    "skill_id": "SK-ML",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-021",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-021",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-021",
    "skill_id": "SK-JAVA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-021",
    "skill_id": "SK-NODE",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-022",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-022",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-022",
    "skill_id": "SK-NODE",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-022",
    "skill_id": "SK-REACT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-023",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-023",
    "skill_id": "SK-DOCKER",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-023",
    "skill_id": "SK-IOT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-023",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-023",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-024",
    "skill_id": "SK-GIT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-024",
    "skill_id": "SK-IOT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-024",
    "skill_id": "SK-DSA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-025",
    "skill_id": "SK-JAVA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-025",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-025",
    "skill_id": "SK-BI",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-025",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-026",
    "skill_id": "SK-JAVA",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-026",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-026",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-026",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-027",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-027",
    "skill_id": "SK-IOT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-027",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-027",
    "skill_id": "SK-NODE",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-027",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-028",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-028",
    "skill_id": "SK-GIT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-028",
    "skill_id": "SK-SQL",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-029",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-029",
    "skill_id": "SK-JAVA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-029",
    "skill_id": "SK-AWS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-029",
    "skill_id": "SK-REACT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-029",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-030",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-030",
    "skill_id": "SK-TS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-030",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-031",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-031",
    "skill_id": "SK-JAVA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-031",
    "skill_id": "SK-GIT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-032",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-032",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-032",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-032",
    "skill_id": "SK-TS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-033",
    "skill_id": "SK-DOCKER",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-033",
    "skill_id": "SK-JAVA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-033",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-033",
    "skill_id": "SK-IOT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-033",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-034",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-034",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-034",
    "skill_id": "SK-SPRING",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-034",
    "skill_id": "SK-JAVA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-035",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-035",
    "skill_id": "SK-DSA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-035",
    "skill_id": "SK-ML",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-036",
    "skill_id": "SK-REACT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-036",
    "skill_id": "SK-BI",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-036",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-036",
    "skill_id": "SK-DSA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-037",
    "skill_id": "SK-DOCKER",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-037",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-037",
    "skill_id": "SK-NODE",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-037",
    "skill_id": "SK-BI",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-038",
    "skill_id": "SK-REACT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-038",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-038",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-039",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-039",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-039",
    "skill_id": "SK-JAVA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-039",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-039",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-040",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-040",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-040",
    "skill_id": "SK-ML",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-040",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-041",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-041",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-041",
    "skill_id": "SK-IOT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-041",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-042",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-042",
    "skill_id": "SK-ML",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-042",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-043",
    "skill_id": "SK-DSA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-043",
    "skill_id": "SK-BI",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-043",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-043",
    "skill_id": "SK-SQL",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-044",
    "skill_id": "SK-JAVA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-044",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-044",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-044",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-045",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-045",
    "skill_id": "SK-GIT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-045",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-045",
    "skill_id": "SK-DSA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-046",
    "skill_id": "SK-AWS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-046",
    "skill_id": "SK-DSA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-046",
    "skill_id": "SK-NODE",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-047",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-047",
    "skill_id": "SK-ML",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-047",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-047",
    "skill_id": "SK-SQL",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-047",
    "skill_id": "SK-IOT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-048",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-048",
    "skill_id": "SK-DOCKER",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-048",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-049",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-049",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-049",
    "skill_id": "SK-PY",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-049",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-050",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-050",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-050",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-051",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-051",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-051",
    "skill_id": "SK-NODE",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-051",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-051",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-052",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-052",
    "skill_id": "SK-TS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-052",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-052",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-053",
    "skill_id": "SK-JAVA",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-053",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-053",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-053",
    "skill_id": "SK-ML",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-053",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-054",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-054",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-054",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-055",
    "skill_id": "SK-JAVA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-055",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-055",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-056",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-056",
    "skill_id": "SK-AWS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-057",
    "skill_id": "SK-ML",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-057",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-057",
    "skill_id": "SK-REACT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-057",
    "skill_id": "SK-IOT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-058",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-058",
    "skill_id": "SK-GIT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-058",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-058",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-058",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-059",
    "skill_id": "SK-REACT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-059",
    "skill_id": "SK-NODE",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-059",
    "skill_id": "SK-SQL",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-060",
    "skill_id": "SK-AWS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-060",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-060",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-061",
    "skill_id": "SK-IOT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-061",
    "skill_id": "SK-DSA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-061",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-061",
    "skill_id": "SK-NODE",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-062",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-062",
    "skill_id": "SK-AWS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-062",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-062",
    "skill_id": "SK-DSA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-062",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-063",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-063",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-063",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-063",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-064",
    "skill_id": "SK-IOT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-064",
    "skill_id": "SK-SQL",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-064",
    "skill_id": "SK-DSA",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-064",
    "skill_id": "SK-NODE",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-064",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-065",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-065",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-065",
    "skill_id": "SK-JAVA",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-065",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-065",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-066",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-066",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-066",
    "skill_id": "SK-BI",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-066",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-066",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-067",
    "skill_id": "SK-DOCKER",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-067",
    "skill_id": "SK-DSA",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-067",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-068",
    "skill_id": "SK-JAVA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-068",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-068",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-069",
    "skill_id": "SK-GIT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-069",
    "skill_id": "SK-IOT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-069",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-069",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-070",
    "skill_id": "SK-IOT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-070",
    "skill_id": "SK-DSA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-070",
    "skill_id": "SK-BI",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-070",
    "skill_id": "SK-SQL",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-070",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-071",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-071",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-071",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-071",
    "skill_id": "SK-NODE",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-071",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-072",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-072",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-073",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-073",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-074",
    "skill_id": "SK-PY",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-074",
    "skill_id": "SK-GIT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-075",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-075",
    "skill_id": "SK-NODE",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-075",
    "skill_id": "SK-GIT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-075",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-076",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-076",
    "skill_id": "SK-GIT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-076",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-076",
    "skill_id": "SK-BI",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-076",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-077",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-077",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-077",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-077",
    "skill_id": "SK-SQL",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-078",
    "skill_id": "SK-DOCKER",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-078",
    "skill_id": "SK-GIT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-078",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-078",
    "skill_id": "SK-IOT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-079",
    "skill_id": "SK-REACT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-079",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-079",
    "skill_id": "SK-SPRING",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-079",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-080",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-080",
    "skill_id": "SK-PY",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-080",
    "skill_id": "SK-SQL",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-080",
    "skill_id": "SK-JAVA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-080",
    "skill_id": "SK-IOT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-081",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-081",
    "skill_id": "SK-ML",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-081",
    "skill_id": "SK-NODE",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-081",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-082",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-082",
    "skill_id": "SK-SPRING",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-082",
    "skill_id": "SK-BI",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-082",
    "skill_id": "SK-DOCKER",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-083",
    "skill_id": "SK-SPRING",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-083",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-083",
    "skill_id": "SK-JAVA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-083",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-083",
    "skill_id": "SK-IOT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-084",
    "skill_id": "SK-IOT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-084",
    "skill_id": "SK-SPRING",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-084",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-085",
    "skill_id": "SK-GIT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-085",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-085",
    "skill_id": "SK-JAVA",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-085",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-085",
    "skill_id": "SK-SPRING",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-086",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-086",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-087",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-087",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-087",
    "skill_id": "SK-JAVA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-088",
    "skill_id": "SK-PY",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-088",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-088",
    "skill_id": "SK-ML",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-088",
    "skill_id": "SK-BI",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-089",
    "skill_id": "SK-AWS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-089",
    "skill_id": "SK-NODE",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-089",
    "skill_id": "SK-TS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-089",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-090",
    "skill_id": "SK-PY",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-090",
    "skill_id": "SK-ML",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-090",
    "skill_id": "SK-JAVA",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-091",
    "skill_id": "SK-IOT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-091",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-091",
    "skill_id": "SK-SPRING",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-092",
    "skill_id": "SK-NODE",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-092",
    "skill_id": "SK-GIT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-092",
    "skill_id": "SK-REACT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-093",
    "skill_id": "SK-PY",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-093",
    "skill_id": "SK-DSA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-093",
    "skill_id": "SK-IOT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-094",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-094",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-094",
    "skill_id": "SK-NODE",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-094",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-095",
    "skill_id": "SK-REACT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-095",
    "skill_id": "SK-AWS",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-095",
    "skill_id": "SK-IOT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-096",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-096",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-096",
    "skill_id": "SK-NODE",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-096",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-097",
    "skill_id": "SK-GIT",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-097",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-098",
    "skill_id": "SK-TS",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-098",
    "skill_id": "SK-SQL",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-099",
    "skill_id": "SK-REACT",
    "skill_level": "Advanced"
  },
  {
    "student_id": "TN-STU-099",
    "skill_id": "SK-NODE",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-099",
    "skill_id": "SK-SQL",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-100",
    "skill_id": "SK-GIT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-100",
    "skill_id": "SK-NODE",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-101",
    "skill_id": "SK-JAVA",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-101",
    "skill_id": "SK-REACT",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-101",
    "skill_id": "SK-NODE",
    "skill_level": "Intermediate"
  },
  {
    "student_id": "TN-STU-101",
    "skill_id": "SK-TS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-102",
    "skill_id": "SK-SQL",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-102",
    "skill_id": "SK-AWS",
    "skill_level": "Beginner"
  },
  {
    "student_id": "TN-STU-102",
    "skill_id": "SK-PY",
    "skill_level": "Intermediate"
  }
];

export const employment: Employment[] = [
  {
    "student_id": "TN-STU-001",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "Automotive",
    "job_role": "Product Manager",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-002",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Semiconductor",
    "job_role": "Backend Developer",
    "salary_band": "12-18 LPA"
  },
  {
    "student_id": "TN-STU-003",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-004",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "Automotive",
    "job_role": "AI/ML Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-005",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "FinTech",
    "job_role": "Embedded Systems Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-006",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Automotive",
    "job_role": "Cloud Solutions Architect",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-007",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "FinTech",
    "job_role": "AI/ML Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-008",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "EdTech",
    "job_role": "DevOps Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-009",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "HealthTech",
    "job_role": "DevOps Engineer",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-010",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "Automotive",
    "job_role": "QA Automation Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-011",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "EdTech",
    "job_role": "QA Automation Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-012",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-013",
    "employment_status": "Working",
    "company_type": "Large Company",
    "industry": "IT Services",
    "job_role": "Cloud Solutions Architect",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-014",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "E-Commerce",
    "job_role": "Product Manager",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-015",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Automotive",
    "job_role": "AI/ML Engineer",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-016",
    "employment_status": "Other",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-017",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "FinTech",
    "job_role": "Cloud Solutions Architect",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-018",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "EdTech",
    "job_role": "Cloud Solutions Architect",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-019",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "Automotive",
    "job_role": "Product Manager",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-020",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Automotive",
    "job_role": "QA Automation Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-021",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Automotive",
    "job_role": "AI/ML Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-022",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Automotive",
    "job_role": "Full Stack Developer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-023",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "Semiconductor",
    "job_role": "DevOps Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-024",
    "employment_status": "Working",
    "company_type": "Large Company",
    "industry": "HealthTech",
    "job_role": "Backend Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-025",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "EdTech",
    "job_role": "Backend Developer",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-026",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-027",
    "employment_status": "Working",
    "company_type": "Large Company",
    "industry": "EdTech",
    "job_role": "Embedded Systems Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-028",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "EdTech",
    "job_role": "QA Automation Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-029",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-030",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-031",
    "employment_status": "Working",
    "company_type": "Large Company",
    "industry": "E-Commerce",
    "job_role": "Embedded Systems Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-032",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "E-Commerce",
    "job_role": "DevOps Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-033",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "SaaS",
    "job_role": "Cybersecurity Analyst",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-034",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "EdTech",
    "job_role": "AI/ML Engineer",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-035",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "HealthTech",
    "job_role": "Cloud Solutions Architect",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-036",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "Automotive",
    "job_role": "Product Manager",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-037",
    "employment_status": "Working",
    "company_type": "Large Company",
    "industry": "SaaS",
    "job_role": "DevOps Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-038",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "EdTech",
    "job_role": "Product Manager",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-039",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-040",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "Semiconductor",
    "job_role": "AI/ML Engineer",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-041",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "Automotive",
    "job_role": "Product Manager",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-042",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "HealthTech",
    "job_role": "Backend Developer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-043",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "IT Services",
    "job_role": "Data Analyst",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-044",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "Semiconductor",
    "job_role": "Backend Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-045",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "EdTech",
    "job_role": "QA Automation Engineer",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-046",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "EdTech",
    "job_role": "AI/ML Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-047",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "SaaS",
    "job_role": "AI/ML Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-048",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "IT Services",
    "job_role": "QA Automation Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-049",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "EdTech",
    "job_role": "DevOps Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-050",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "FinTech",
    "job_role": "QA Automation Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-051",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Semiconductor",
    "job_role": "DevOps Engineer",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-052",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "FinTech",
    "job_role": "Cybersecurity Analyst",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-053",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "E-Commerce",
    "job_role": "Backend Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-054",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "SaaS",
    "job_role": "Data Analyst",
    "salary_band": "18+ LPA"
  },
  {
    "student_id": "TN-STU-055",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "EdTech",
    "job_role": "Backend Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-056",
    "employment_status": "Working",
    "company_type": "Large Company",
    "industry": "Semiconductor",
    "job_role": "AI/ML Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-057",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "HealthTech",
    "job_role": "Full Stack Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-058",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "E-Commerce",
    "job_role": "Product Manager",
    "salary_band": "12-18 LPA"
  },
  {
    "student_id": "TN-STU-059",
    "employment_status": "Other",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-060",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "IT Services",
    "job_role": "AI/ML Engineer",
    "salary_band": "18+ LPA"
  },
  {
    "student_id": "TN-STU-061",
    "employment_status": "Working",
    "company_type": "Large Company",
    "industry": "SaaS",
    "job_role": "Embedded Systems Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-062",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "FinTech",
    "job_role": "AI/ML Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-063",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Automotive",
    "job_role": "DevOps Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-064",
    "employment_status": "Higher Studies",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-065",
    "employment_status": "Working",
    "company_type": "Large Company",
    "industry": "HealthTech",
    "job_role": "Product Manager",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-066",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-067",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "HealthTech",
    "job_role": "Product Manager",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-068",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "E-Commerce",
    "job_role": "Backend Developer",
    "salary_band": "12-18 LPA"
  },
  {
    "student_id": "TN-STU-069",
    "employment_status": "Other",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-070",
    "employment_status": "Higher Studies",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-071",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-072",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "HealthTech",
    "job_role": "Full Stack Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-073",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "SaaS",
    "job_role": "Embedded Systems Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-074",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-075",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-076",
    "employment_status": "Working",
    "company_type": "Large Company",
    "industry": "HealthTech",
    "job_role": "Full Stack Developer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-077",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "IT Services",
    "job_role": "Data Analyst",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-078",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-079",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-080",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Semiconductor",
    "job_role": "Full Stack Developer",
    "salary_band": "12-18 LPA"
  },
  {
    "student_id": "TN-STU-081",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "FinTech",
    "job_role": "Full Stack Developer",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-082",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Automotive",
    "job_role": "QA Automation Engineer",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-083",
    "employment_status": "Working",
    "company_type": "Large Company",
    "industry": "E-Commerce",
    "job_role": "Backend Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-084",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "E-Commerce",
    "job_role": "Embedded Systems Engineer",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-085",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Automotive",
    "job_role": "Full Stack Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-086",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "EdTech",
    "job_role": "Data Analyst",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-087",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-088",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-089",
    "employment_status": "Other",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-090",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-091",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-092",
    "employment_status": "Higher Studies",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-093",
    "employment_status": "Seeking",
    "company_type": "Other",
    "industry": "N/A",
    "job_role": "Not Applicable",
    "salary_band": "N/A"
  },
  {
    "student_id": "TN-STU-094",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Semiconductor",
    "job_role": "Full Stack Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-095",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "EdTech",
    "job_role": "Cybersecurity Analyst",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-096",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "Automotive",
    "job_role": "Full Stack Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-097",
    "employment_status": "Working",
    "company_type": "Startup",
    "industry": "SaaS",
    "job_role": "DevOps Engineer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-098",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "SaaS",
    "job_role": "Embedded Systems Engineer",
    "salary_band": "12-18 LPA"
  },
  {
    "student_id": "TN-STU-099",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "IT Services",
    "job_role": "Full Stack Developer",
    "salary_band": "5-8 LPA"
  },
  {
    "student_id": "TN-STU-100",
    "employment_status": "Working",
    "company_type": "SME",
    "industry": "EdTech",
    "job_role": "Cloud Solutions Architect",
    "salary_band": "3-5 LPA"
  },
  {
    "student_id": "TN-STU-101",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "E-Commerce",
    "job_role": "Full Stack Developer",
    "salary_band": "8-12 LPA"
  },
  {
    "student_id": "TN-STU-102",
    "employment_status": "Working",
    "company_type": "MNC",
    "industry": "Automotive",
    "job_role": "Cybersecurity Analyst",
    "salary_band": "5-8 LPA"
  }
];

export const placements: Placement[] = [
  {
    "student_id": "TN-STU-001",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 5.6
  },
  {
    "student_id": "TN-STU-002",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 3.2
  },
  {
    "student_id": "TN-STU-003",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-004",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 1.6
  },
  {
    "student_id": "TN-STU-005",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 2.4
  },
  {
    "student_id": "TN-STU-006",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 4.5
  },
  {
    "student_id": "TN-STU-007",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 5
  },
  {
    "student_id": "TN-STU-008",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 3.6
  },
  {
    "student_id": "TN-STU-009",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 4.6
  },
  {
    "student_id": "TN-STU-010",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 1.2
  },
  {
    "student_id": "TN-STU-011",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 3.7
  },
  {
    "student_id": "TN-STU-012",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-013",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 1.4
  },
  {
    "student_id": "TN-STU-014",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 4.8
  },
  {
    "student_id": "TN-STU-015",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 3.9
  },
  {
    "student_id": "TN-STU-016",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-017",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 4.2
  },
  {
    "student_id": "TN-STU-018",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 5.8
  },
  {
    "student_id": "TN-STU-019",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 5.7
  },
  {
    "student_id": "TN-STU-020",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 4.3
  },
  {
    "student_id": "TN-STU-021",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 3.4
  },
  {
    "student_id": "TN-STU-022",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 2.6
  },
  {
    "student_id": "TN-STU-023",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 2.3
  },
  {
    "student_id": "TN-STU-024",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 2
  },
  {
    "student_id": "TN-STU-025",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 2.4
  },
  {
    "student_id": "TN-STU-026",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-027",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 4.7
  },
  {
    "student_id": "TN-STU-028",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 4
  },
  {
    "student_id": "TN-STU-029",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-030",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-031",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 1.7
  },
  {
    "student_id": "TN-STU-032",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 3.7
  },
  {
    "student_id": "TN-STU-033",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 1.3
  },
  {
    "student_id": "TN-STU-034",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 1.5
  },
  {
    "student_id": "TN-STU-035",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Referral",
    "time_to_employment": 2.3
  },
  {
    "student_id": "TN-STU-036",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 1.6
  },
  {
    "student_id": "TN-STU-037",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 4.8
  },
  {
    "student_id": "TN-STU-038",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 3.3
  },
  {
    "student_id": "TN-STU-039",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-040",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 5.8
  },
  {
    "student_id": "TN-STU-041",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 5.1
  },
  {
    "student_id": "TN-STU-042",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 5.1
  },
  {
    "student_id": "TN-STU-043",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 2.1
  },
  {
    "student_id": "TN-STU-044",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 3.1
  },
  {
    "student_id": "TN-STU-045",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 5.6
  },
  {
    "student_id": "TN-STU-046",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 2.6
  },
  {
    "student_id": "TN-STU-047",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 3.4
  },
  {
    "student_id": "TN-STU-048",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Internship Conversion",
    "time_to_employment": 1.6
  },
  {
    "student_id": "TN-STU-049",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 4.4
  },
  {
    "student_id": "TN-STU-050",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Referral",
    "time_to_employment": 1.8
  },
  {
    "student_id": "TN-STU-051",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Referral",
    "time_to_employment": 4.5
  },
  {
    "student_id": "TN-STU-052",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 3.3
  },
  {
    "student_id": "TN-STU-053",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 1.8
  },
  {
    "student_id": "TN-STU-054",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "On-Campus",
    "time_to_employment": 2.4
  },
  {
    "student_id": "TN-STU-055",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 5.3
  },
  {
    "student_id": "TN-STU-056",
    "placement_status": "Placed",
    "placement_year": 2025,
    "placement_source": "Off-Campus",
    "time_to_employment": 4.1
  },
  {
    "student_id": "TN-STU-057",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 5.7
  },
  {
    "student_id": "TN-STU-058",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Referral",
    "time_to_employment": 4.6
  },
  {
    "student_id": "TN-STU-059",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-060",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 2.8
  },
  {
    "student_id": "TN-STU-061",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 4.3
  },
  {
    "student_id": "TN-STU-062",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Internship Conversion",
    "time_to_employment": 4.8
  },
  {
    "student_id": "TN-STU-063",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 5.3
  },
  {
    "student_id": "TN-STU-064",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-065",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 5
  },
  {
    "student_id": "TN-STU-066",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-067",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 1.8
  },
  {
    "student_id": "TN-STU-068",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 4.1
  },
  {
    "student_id": "TN-STU-069",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-070",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-071",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-072",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Internship Conversion",
    "time_to_employment": 5.4
  },
  {
    "student_id": "TN-STU-073",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 4
  },
  {
    "student_id": "TN-STU-074",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-075",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-076",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Off-Campus",
    "time_to_employment": 1.9
  },
  {
    "student_id": "TN-STU-077",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 5.4
  },
  {
    "student_id": "TN-STU-078",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-079",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-080",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 3.9
  },
  {
    "student_id": "TN-STU-081",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Off-Campus",
    "time_to_employment": 4.5
  },
  {
    "student_id": "TN-STU-082",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 1.3
  },
  {
    "student_id": "TN-STU-083",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Referral",
    "time_to_employment": 4.8
  },
  {
    "student_id": "TN-STU-084",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Off-Campus",
    "time_to_employment": 1.5
  },
  {
    "student_id": "TN-STU-085",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Off-Campus",
    "time_to_employment": 4
  },
  {
    "student_id": "TN-STU-086",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Internship Conversion",
    "time_to_employment": 5.1
  },
  {
    "student_id": "TN-STU-087",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-088",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-089",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-090",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-091",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-092",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-093",
    "placement_status": "Not Placed",
    "placement_year": null,
    "placement_source": "None",
    "time_to_employment": null
  },
  {
    "student_id": "TN-STU-094",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 5
  },
  {
    "student_id": "TN-STU-095",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Off-Campus",
    "time_to_employment": 1.8
  },
  {
    "student_id": "TN-STU-096",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 5.8
  },
  {
    "student_id": "TN-STU-097",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Internship Conversion",
    "time_to_employment": 1.2
  },
  {
    "student_id": "TN-STU-098",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Internship Conversion",
    "time_to_employment": 1.9
  },
  {
    "student_id": "TN-STU-099",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Internship Conversion",
    "time_to_employment": 4.1
  },
  {
    "student_id": "TN-STU-100",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Internship Conversion",
    "time_to_employment": 1.7
  },
  {
    "student_id": "TN-STU-101",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "Internship Conversion",
    "time_to_employment": 3.3
  },
  {
    "student_id": "TN-STU-102",
    "placement_status": "Placed",
    "placement_year": 2026,
    "placement_source": "On-Campus",
    "time_to_employment": 4.7
  }
];

export const funnelStages: FunnelRecord[] = [
  {
    "student_id": "TN-STU-001",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-002",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-003",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-004",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-005",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-006",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-007",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-008",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-009",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-010",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-011",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-012",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-013",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-014",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-015",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-016",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-017",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-018",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-019",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-020",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-021",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-022",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-023",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-024",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-025",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-026",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-027",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-028",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-029",
    "is_seeker": true,
    "interviewed": false,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-030",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-031",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-032",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-033",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-034",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-035",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-036",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-037",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-038",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-039",
    "is_seeker": true,
    "interviewed": false,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-040",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-041",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-042",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-043",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-044",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-045",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-046",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-047",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-048",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-049",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-050",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-051",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-052",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-053",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-054",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-055",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-056",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-057",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-058",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-059",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-060",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-061",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-062",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-063",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-064",
    "is_seeker": false,
    "interviewed": false,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-065",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-066",
    "is_seeker": true,
    "interviewed": false,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-067",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-068",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-069",
    "is_seeker": true,
    "interviewed": false,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-070",
    "is_seeker": false,
    "interviewed": false,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-071",
    "is_seeker": true,
    "interviewed": false,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-072",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-073",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-074",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-075",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-076",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-077",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-078",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-079",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-080",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-081",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-082",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-083",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-084",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-085",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-086",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-087",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-088",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-089",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-090",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-091",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-092",
    "is_seeker": false,
    "interviewed": false,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-093",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": false,
    "accepted_offers": false,
    "currently_working": false
  },
  {
    "student_id": "TN-STU-094",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-095",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-096",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-097",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-098",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-099",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-100",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-101",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  },
  {
    "student_id": "TN-STU-102",
    "is_seeker": true,
    "interviewed": true,
    "received_offers": true,
    "accepted_offers": true,
    "currently_working": true
  }
];
