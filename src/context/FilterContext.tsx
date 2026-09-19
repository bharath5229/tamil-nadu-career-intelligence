import React, { createContext, useContext, useState, useMemo } from 'react';
import { DashboardFilters, EnrichedStudent, KpiMetrics } from '../types/database';
import { allEnrichedStudents, filterEnrichedStudents, calculateKpiMetrics } from '../db/relationalStore';

interface FilterContextType {
  filters: DashboardFilters;
  setFilter: <K extends keyof DashboardFilters>(key: K, value: DashboardFilters[K]) => void;
  resetFilters: () => void;
  removeFilter: (key: keyof DashboardFilters) => void;
  activeFilterCount: number;
  filteredStudents: EnrichedStudent[];
  kpiMetrics: KpiMetrics;
  selectedStudentId: string | null;
  setSelectedStudentId: (id: string | null) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const initialFilters: DashboardFilters = {
  graduationYear: 'ALL',
  universityId: 'ALL',
  collegeId: 'ALL',
  degree: 'ALL',
  district: 'ALL',
  placementStatus: 'ALL',
  employmentStatus: 'ALL',
  companyType: 'ALL',
  industry: 'ALL',
  skillName: 'ALL',
  searchQuery: ''
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<DashboardFilters>(initialFilters);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<string>('home');

  const setFilter = <K extends keyof DashboardFilters>(key: K, value: DashboardFilters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const removeFilter = (key: keyof DashboardFilters) => {
    setFilters(prev => ({ ...prev, [key]: key === 'searchQuery' ? '' : 'ALL' }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.graduationYear && filters.graduationYear !== 'ALL') count++;
    if (filters.universityId && filters.universityId !== 'ALL') count++;
    if (filters.collegeId && filters.collegeId !== 'ALL') count++;
    if (filters.degree && filters.degree !== 'ALL') count++;
    if (filters.district && filters.district !== 'ALL') count++;
    if (filters.placementStatus && filters.placementStatus !== 'ALL') count++;
    if (filters.employmentStatus && filters.employmentStatus !== 'ALL') count++;
    if (filters.companyType && filters.companyType !== 'ALL') count++;
    if (filters.industry && filters.industry !== 'ALL') count++;
    if (filters.skillName && filters.skillName !== 'ALL') count++;
    if (filters.searchQuery && filters.searchQuery.trim() !== '') count++;
    return count;
  }, [filters]);

  const filteredStudents = useMemo(() => {
    return filterEnrichedStudents(allEnrichedStudents, filters);
  }, [filters]);

  const kpiMetrics = useMemo(() => {
    return calculateKpiMetrics(filteredStudents);
  }, [filteredStudents]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilter,
        resetFilters,
        removeFilter,
        activeFilterCount,
        filteredStudents,
        kpiMetrics,
        selectedStudentId,
        setSelectedStudentId,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};
