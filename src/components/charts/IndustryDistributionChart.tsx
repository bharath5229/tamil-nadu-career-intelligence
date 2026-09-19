import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { useFilters } from '../../context/FilterContext';
import { getIndustryDistribution } from '../../db/relationalStore';

export const IndustryDistributionChart: React.FC = () => {
  const { filteredStudents, filters, setFilter } = useFilters();
  const data = getIndustryDistribution(filteredStudents);

  const handleClick = (entry: any) => {
    if (!entry || !entry.industry) return;
    if (filters.industry === entry.industry) {
      setFilter('industry', 'ALL');
    } else {
      setFilter('industry', entry.industry);
    }
  };

  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 25 }}
        >
          <XAxis
            dataKey="industry"
            tick={{ fontSize: 10, fill: '#475569' }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
            interval={0}
            angle={-20}
            textAnchor="end"
          />
          <YAxis
            tick={{ fontSize: 10, fill: '#64748b' }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
            allowDecimals={false}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
            formatter={(val: any) => [`${val} employed graduates`, 'Hired Count']}
          />
          <Bar dataKey="count" radius={[4, 4, 0, 0]} cursor="pointer" onClick={handleClick}>
            {data.map((entry, index) => {
              const isSelected = filters.industry === entry.industry;
              return (
                <Cell
                  key={`cell-${index}`}
                  fill="#06b6d4"
                  opacity={filters.industry !== 'ALL' && !isSelected ? 0.35 : 1}
                  stroke={isSelected ? '#0f172a' : 'transparent'}
                  strokeWidth={2}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
