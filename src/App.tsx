import React, { useState } from 'react';
import { FilterProvider, useFilters } from './context/FilterContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { FilterBar } from './components/layout/FilterBar';
import { StudentProfileModal } from './components/modals/StudentProfileModal';

import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { PlacementFunnelPage } from './pages/PlacementFunnelPage';
import { StudentAnalyticsPage } from './pages/StudentAnalyticsPage';
import { CollegeAnalyticsPage } from './pages/CollegeAnalyticsPage';
import { UniversityAnalyticsPage } from './pages/UniversityAnalyticsPage';
import { ManagerKpiPage } from './pages/ManagerKpiPage';
import { CareerInsightsPage } from './pages/CareerInsightsPage';
import { ProductOpportunitiesPage } from './pages/ProductOpportunitiesPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { AboutPage } from './pages/AboutPage';

const AppContent: React.FC = () => {
  const { currentPage } = useFilters();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Pages that should show the global filter bar
  const showFilterBar = [
    'dashboard',
    'funnel',
    'students',
    'kpis',
    'insights'
  ].includes(currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'funnel':
        return <PlacementFunnelPage />;
      case 'students':
        return <StudentAnalyticsPage />;
      case 'colleges':
        return <CollegeAnalyticsPage />;
      case 'universities':
        return <UniversityAnalyticsPage />;
      case 'kpis':
        return <ManagerKpiPage />;
      case 'insights':
        return <CareerInsightsPage />;
      case 'opportunities':
        return <ProductOpportunitiesPage />;
      case 'methodology':
        return <MethodologyPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Top Header */}
        <Header
          isSidebarOpen={isMobileSidebarOpen}
          onToggleSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
        />

        {/* Global Multi-Filter Bar */}
        {showFilterBar && <FilterBar />}

        {/* Scrollable View Container */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>

      {/* Global Anonymized Student Profile Modal Drawer */}
      <StudentProfileModal />
    </div>
  );
};

export function App() {
  return (
    <FilterProvider>
      <AppContent />
    </FilterProvider>
  );
}

export default App;
