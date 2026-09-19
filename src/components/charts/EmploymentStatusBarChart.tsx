import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { useFilters } from '../../context/FilterContext';
import { getEmploymentStatusDistribution } from '../../db/relationalStore';
import { EmploymentStatus } from '../../types/database';

export const EmploymentStatusBarChart: React.FC = () => {
  const { filteredStudents, filters, setFilter } = useFilters();
  const data = getEmploymentStatusDistribution(filteredStudents);

  const handleClick = (entry: any) => {
    if (!entry || !entry.name) return;
    const targetStatus = entry.name as EmploymentStatus;
    if (filters.employmentStatus === targetStatus) {
      setFilter('employmentStatus', 'ALL');
    } else {
      setFilter('employmentStatus', targetStatus);
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
            formatter={(val: any, _name: any, item: any) => [
              `${val} students (${item.payload.percentage}%)`,
              'Students'
            ]}
            contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
          />
          <Bar dataKey="count" radius={[6, 6, 0, 0]} cursor="pointer" onClick={handleClick}>
            {data.map((entry, index) => {
              const isSelected = filters.employmentStatus === entry.name;
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  opacity={filters.employmentStatus !== 'ALL' && !isSelected ? 0.35 : 1}
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
