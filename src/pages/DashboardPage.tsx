import React from 'react';
import { useFilters } from '../context/FilterContext';
import { KpiCard } from '../components/common/KpiCard';
import { ChartContainer } from '../components/common/ChartContainer';
import { PlacementDonutChart } from '../components/charts/PlacementDonutChart';
import { EmploymentStatusBarChart } from '../components/charts/EmploymentStatusBarChart';
import { CompanyTypeBarChart } from '../components/charts/CompanyTypeBarChart';
import { GradYearComparisonChart } from '../components/charts/GradYearComparisonChart';
import { CollegePlacementChart } from '../components/charts/CollegePlacementChart';
import { UniversityComparisonChart } from '../components/charts/UniversityComparisonChart';
import { SkillsAnalyticsChart } from '../components/charts/SkillsAnalyticsChart';
import { CareerGoalsChart } from '../components/charts/CareerGoalsChart';
import { IndustryDistributionChart } from '../components/charts/IndustryDistributionChart';
import { JobRoleChart } from '../components/charts/JobRoleChart';
import {
  Users,
  Calendar,
  Award,
  Briefcase,
  Search,
  Rocket,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { kpiMetrics, filters, setFilter, setCurrentPage } = useFilters();

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Dashboard Title & Overview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Executive Analytics Dashboard
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time multi-dimensional view of student graduation, placement, and employment metrics
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage('funnel')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 text-xs font-semibold transition cursor-pointer"
          >
            <span>View Placement Funnel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 8 Dynamic KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* KPI 1: Total Students */}
        <KpiCard
          title="Total Students"
          value={kpiMetrics.totalStudents}
          subtitle="Filtered sample records"
          icon={Users}
          color="blue"
        />

        {/* KPI 2: 2025 Graduates */}
        <KpiCard
          title="2025 Graduates"
          value={kpiMetrics.graduates2025}
          subtitle={`${kpiMetrics.totalStudents ? Math.round((kpiMetrics.graduates2025 / kpiMetrics.totalStudents) * 100) : 0}% of filtered cohort`}
          icon={Calendar}
          color="indigo"
          isActive={filters.graduationYear === 2025}
          onClick={() => setFilter('graduationYear', filters.graduationYear === 2025 ? 'ALL' : 2025)}
        />

        {/* KPI 3: 2026 Graduates */}
        <KpiCard
          title="2026 Graduates"
          value={kpiMetrics.graduates2026}
          subtitle={`${kpiMetrics.totalStudents ? Math.round((kpiMetrics.graduates2026 / kpiMetrics.totalStudents) * 100) : 0}% of filtered cohort`}
          icon={Calendar}
          color="indigo"
          isActive={filters.graduationYear === 2026}
          onClick={() => setFilter('graduationYear', filters.graduationYear === 2026 ? 'ALL' : 2026)}
        />

        {/* KPI 4: Placement Rate */}
        <KpiCard
          title="Placement Rate"
          value={`${kpiMetrics.placementRate}%`}
          subtitle="Confirmed offers accepted"
          icon={Award}
          color="emerald"
          isActive={filters.placementStatus === 'Placed'}
          onClick={() => setFilter('placementStatus', filters.placementStatus === 'Placed' ? 'ALL' : 'Placed')}
        />

        {/* KPI 5: Employment Rate */}
        <KpiCard
          title="Employment Rate"
          value={`${kpiMetrics.employmentRate}%`}
          subtitle="Currently working"
          icon={Briefcase}
          color="cyan"
          isActive={filters.employmentStatus === 'Working'}
          onClick={() => setFilter('employmentStatus', filters.employmentStatus === 'Working' ? 'ALL' : 'Working')}
        />

        {/* KPI 6: Students Seeking Jobs */}
        <KpiCard
          title="Students Seeking"
          value={kpiMetrics.studentsSeeking}
          subtitle="Active job searchers"
          icon={Search}
          color="amber"
          isActive={filters.employmentStatus === 'Seeking'}
          onClick={() => setFilter('employmentStatus', filters.employmentStatus === 'Seeking' ? 'ALL' : 'Seeking')}
        />

        {/* KPI 7: Startup Employment */}
        <KpiCard
          title="Startup Employment"
          value={`${kpiMetrics.startupEmploymentRate}%`}
          subtitle={`${kpiMetrics.startupCount} candidates in startups`}
          icon={Rocket}
          color="purple"
          isActive={filters.companyType === 'Startup'}
          onClick={() => setFilter('companyType', filters.companyType === 'Startup' ? 'ALL' : 'Startup')}
        />

        {/* KPI 8: Students With Skill Gaps */}
        <KpiCard
          title="With Skill Gaps"
          value={kpiMetrics.studentsWithSkillGaps}
          subtitle={`${kpiMetrics.skillGapRate}% gap relative to goal`}
          icon={AlertCircle}
          color="rose"
        />
      </div>

      {/* 10 Interactive Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Chart 1: Placement Status */}
        <ChartContainer
          title="Placement Status"
          subtitle="Placed vs Not Placed in filtered sample"
          tooltipText="Click donut slices to filter by placement status"
        >
          <PlacementDonutChart />
        </ChartContainer>

        {/* Chart 2: Employment Status */}
        <ChartContainer
          title="Employment Status"
          subtitle="Working, Seeking, Higher Studies, Other"
          tooltipText="Click bars to filter by employment outcome"
        >
          <EmploymentStatusBarChart />
        </ChartContainer>

        {/* Chart 3: Company Type */}
        <ChartContainer
          title="Company Type Distribution"
          subtitle="Startups, MNCs, Large Companies, SMEs"
          tooltipText="Click bars to filter by enterprise category"
        >
          <CompanyTypeBarChart />
        </ChartContainer>

        {/* Chart 4: Graduation Year Comparison */}
        <ChartContainer
          title="Graduation Cohort (2025 vs 2026)"
          subtitle="Outcomes comparison between classes"
          tooltipText="Click 2025 or 2026 bars to filter cohort"
        >
          <GradYearComparisonChart />
        </ChartContainer>

        {/* Chart 5: College Placement Comparison */}
        <ChartContainer
          title="College Placement Rates"
          subtitle="Placement percentage across colleges"
          tooltipText="Click any college to drill down"
        >
          <CollegePlacementChart />
        </ChartContainer>

        {/* Chart 6: University Comparison */}
        <ChartContainer
          title="University Comparison"
          subtitle="Student volume and placement outcome"
          tooltipText="Click university bars to view constituent students"
        >
          <UniversityComparisonChart />
        </ChartContainer>

        {/* Chart 7: Skills Analytics */}
        <ChartContainer
          title="Skills Analytics vs Placements"
          subtitle="Top technical skills & employment ratios"
          tooltipText="Click skill bar to filter candidates with that skill"
          className="md:col-span-2 lg:col-span-2"
        >
          <SkillsAnalyticsChart />
        </ChartContainer>

        {/* Chart 8: Career Goals */}
        <ChartContainer
          title="Top Career Goals"
          subtitle="Most common career goals among students"
          tooltipText="Click any career goal to filter candidates"
        >
          <CareerGoalsChart />
        </ChartContainer>

        {/* Chart 9: Industry Distribution */}
        <ChartContainer
          title="Industry Distribution"
          subtitle="Where graduates are getting hired"
          tooltipText="Click industry bars to filter by sector"
        >
          <IndustryDistributionChart />
        </ChartContainer>

        {/* Chart 10: Job Role Distribution */}
        <ChartContainer
          title="Job Role Distribution"
          subtitle="Major roles accepted by placed graduates"
          tooltipText="Click job role to inspect candidates in that role"
          className="md:col-span-2 lg:col-span-2"
        >
          <JobRoleChart />
        </ChartContainer>
      </div>
    </div>
  );
};
