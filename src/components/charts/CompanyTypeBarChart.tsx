import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { useFilters } from '../../context/FilterContext';
import { getCompanyTypeDistribution } from '../../db/relationalStore';
import { CompanyType } from '../../types/database';

export const CompanyTypeBarChart: React.FC = () => {
  const { filteredStudents, filters, setFilter } = useFilters();
  const data = getCompanyTypeDistribution(filteredStudents);

  const handleClick = (entry: any) => {
    if (!entry || !entry.name) return;
    const targetType = entry.name as CompanyType;
    if (filters.companyType === targetType) {
      setFilter('companyType', 'ALL');
    } else {
      setFilter('companyType', targetType);
    }
  };

  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: '#64748b' }}
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
            formatter={(val: any) => [`${val} students`, 'Count']}
            contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
          />
          <Bar dataKey="count" radius={[6, 6, 0, 0]} cursor="pointer" onClick={handleClick}>
            {data.map((entry, index) => {
              const isSelected = filters.companyType === entry.name;
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  opacity={filters.companyType !== 'ALL' && !isSelected ? 0.35 : 1}
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
