-- Tamil Nadu Graduate Career Intelligence Prototype Schema
-- Relational SQLite / PostgreSQL compatible schema

CREATE TABLE IF NOT EXISTS universities (
    university_id VARCHAR(50) PRIMARY KEY,
    university_name VARCHAR(255) NOT NULL,
    district VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS colleges (
    college_id VARCHAR(50) PRIMARY KEY,
    college_name VARCHAR(255) NOT NULL,
    university_id VARCHAR(50) NOT NULL,
    district VARCHAR(100) NOT NULL,
    college_type VARCHAR(50) NOT NULL CHECK (college_type IN ('Government', 'Autonomous', 'Private', 'Constituent')),
    FOREIGN KEY (university_id) REFERENCES universities(university_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS students (
    student_id VARCHAR(50) PRIMARY KEY,
    graduation_year INTEGER NOT NULL CHECK (graduation_year IN (2025, 2026)),
    college_id VARCHAR(50) NOT NULL,
    degree VARCHAR(100) NOT NULL,
    cgpa NUMERIC(4, 2) NOT NULL CHECK (cgpa >= 0.0 AND cgpa <= 10.0),
    district VARCHAR(100) NOT NULL,
    career_goal VARCHAR(150) NOT NULL,
    FOREIGN KEY (college_id) REFERENCES colleges(college_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS skills (
    skill_id VARCHAR(50) PRIMARY KEY,
    skill_name VARCHAR(100) NOT NULL UNIQUE,
    category VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS student_skills (
    student_id VARCHAR(50) NOT NULL,
    skill_id VARCHAR(50) NOT NULL,
    skill_level VARCHAR(50) NOT NULL CHECK (skill_level IN ('Beginner', 'Intermediate', 'Advanced')),
    PRIMARY KEY (student_id, skill_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS employment (
    student_id VARCHAR(50) PRIMARY KEY,
    employment_status VARCHAR(50) NOT NULL CHECK (employment_status IN ('Working', 'Seeking', 'Higher Studies', 'Other')),
    company_type VARCHAR(50) NOT NULL CHECK (company_type IN ('Startup', 'MNC', 'Large Company', 'SME', 'Other')),
    industry VARCHAR(100) NOT NULL,
    job_role VARCHAR(150) NOT NULL,
    salary_band VARCHAR(50) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS placements (
    student_id VARCHAR(50) PRIMARY KEY,
    placement_status VARCHAR(50) NOT NULL CHECK (placement_status IN ('Placed', 'Not Placed')),
    placement_year INTEGER,
    placement_source VARCHAR(50) NOT NULL CHECK (placement_source IN ('On-Campus', 'Off-Campus', 'Referral', 'Internship Conversion', 'None')),
    time_to_employment NUMERIC(4, 1),
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS funnel_stages (
    student_id VARCHAR(50) PRIMARY KEY,
    is_seeker BOOLEAN NOT NULL DEFAULT 1,
    interviewed BOOLEAN NOT NULL DEFAULT 0,
    received_offers BOOLEAN NOT NULL DEFAULT 0,
    accepted_offers BOOLEAN NOT NULL DEFAULT 0,
    currently_working BOOLEAN NOT NULL DEFAULT 0,
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE
);

-- Indices for analytical query optimization
CREATE INDEX IF NOT EXISTS idx_students_college ON students(college_id);
CREATE INDEX IF NOT EXISTS idx_students_grad_year ON students(graduation_year);
CREATE INDEX IF NOT EXISTS idx_employment_status ON employment(employment_status);
CREATE INDEX IF NOT EXISTS idx_employment_company_type ON employment(company_type);
CREATE INDEX IF NOT EXISTS idx_placements_status ON placements(placement_status);
