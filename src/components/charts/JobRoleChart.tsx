import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { useFilters } from '../../context/FilterContext';
import { getJobRoleDistribution } from '../../db/relationalStore';

export const JobRoleChart: React.FC = () => {
  const { filteredStudents, filters, setFilter } = useFilters();
  const data = getJobRoleDistribution(filteredStudents);

  const handleClick = (entry: any) => {
    if (!entry || !entry.role) return;
    if (filters.searchQuery === entry.role) {
      setFilter('searchQuery', '');
    } else {
      setFilter('searchQuery', entry.role);
    }
  };

  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <XAxis
            type="number"
            tick={{ fontSize: 10, fill: '#64748b' }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
            allowDecimals={false}
          />
          <YAxis
            type="category"
            dataKey="role"
            width={125}
            tick={{ fontSize: 10, fill: '#334155' }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
            formatter={(val: any) => [`${val} graduates hired`, 'Employed']}
          />
          <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} cursor="pointer" onClick={handleClick}>
            {data.map((entry, index) => {
              const isSelected = filters.searchQuery === entry.role;
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={isSelected ? '#1d4ed8' : '#3b82f6'}
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
