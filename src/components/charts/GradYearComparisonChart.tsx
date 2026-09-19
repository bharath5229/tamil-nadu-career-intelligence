import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useFilters } from '../../context/FilterContext';
import { getGradYearComparison } from '../../db/relationalStore';

export const GradYearComparisonChart: React.FC = () => {
  const { filteredStudents, filters, setFilter } = useFilters();
  const data = getGradYearComparison(filteredStudents);

  const handleBarClick = (entry: any) => {
    if (!entry || !entry.year) return;
    const yr = Number(entry.year) as 2025 | 2026;
    if (filters.graduationYear === yr) {
      setFilter('graduationYear', 'ALL');
    } else {
      setFilter('graduationYear', yr);
    }
  };

  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 15, left: -20, bottom: 20 }}>
          <XAxis
            dataKey="year"
            tick={{ fontSize: 12, fontWeight: 600, fill: '#334155' }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#64748b' }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
            allowDecimals={false}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
            formatter={(val: any, name: any) => [
              `${val} students`,
              name === 'placed' ? 'Placed' : (name === 'working' ? 'Currently Working' : 'Seeking Jobs')
            ]}
          />
          <Legend
            verticalAlign="top"
            height={32}
            formatter={(value) => {
              const labels: Record<string, string> = {
                placed: 'Placed',
                working: 'Working',
                seeking: 'Seeking Jobs'
              };
              return <span className="text-xs font-medium text-slate-700">{labels[value] || value}</span>;
            }}
          />
          <Bar dataKey="placed" name="placed" fill="#2563eb" radius={[4, 4, 0, 0]} cursor="pointer" onClick={handleBarClick} />
          <Bar dataKey="working" name="working" fill="#10b981" radius={[4, 4, 0, 0]} cursor="pointer" onClick={handleBarClick} />
          <Bar dataKey="seeking" name="seeking" fill="#f59e0b" radius={[4, 4, 0, 0]} cursor="pointer" onClick={handleBarClick} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
