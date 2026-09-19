import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { useFilters } from '../../context/FilterContext';
import { getCareerGoalsDistribution } from '../../db/relationalStore';

export const CareerGoalsChart: React.FC = () => {
  const { filteredStudents, filters, setFilter } = useFilters();
  const data = getCareerGoalsDistribution(filteredStudents);

  const handleClick = (entry: any) => {
    if (!entry || !entry.goal) return;
    if (filters.searchQuery === entry.goal) {
      setFilter('searchQuery', '');
    } else {
      setFilter('searchQuery', entry.goal);
    }
  };

  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 20, left: 25, bottom: 5 }}
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
            dataKey="goal"
            width={125}
            tick={{ fontSize: 10, fill: '#334155' }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
            formatter={(val: any) => [`${val} students aspire to this goal`, 'Aspirants']}
          />
          <Bar dataKey="count" fill="#8b5cf6" radius={[0, 4, 4, 0]} cursor="pointer" onClick={handleClick}>
            {data.map((entry, index) => {
              const isSelected = filters.searchQuery === entry.goal;
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={isSelected ? '#6d28d9' : '#8b5cf6'}
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
