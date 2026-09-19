import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { useFilters } from '../../context/FilterContext';
import { getCollegePlacementComparison } from '../../db/relationalStore';

export const CollegePlacementChart: React.FC = () => {
  const { filteredStudents, filters, setFilter } = useFilters();
  const data = getCollegePlacementComparison(filteredStudents);

  const handleClick = (entry: any) => {
    if (!entry || !entry.college_id) return;
    if (filters.collegeId === entry.college_id) {
      setFilter('collegeId', 'ALL');
    } else {
      setFilter('collegeId', entry.college_id);
    }
  };

  return (
    <div className="w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
        >
          <XAxis
            type="number"
            domain={[0, 100]}
            unit="%"
            tick={{ fontSize: 10, fill: '#64748b' }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={120}
            tick={{ fontSize: 10, fill: '#334155' }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
            formatter={(val: any, _name: any, item: any) => [
              `${val}% Placement Rate (${item.payload.placed}/${item.payload.total} students)`,
              'Rate'
            ]}
          />
          <Bar dataKey="rate" radius={[0, 4, 4, 0]} cursor="pointer" onClick={handleClick}>
            {data.map((entry, index) => {
              const isSelected = filters.collegeId === entry.college_id;
              return (
                <Cell
                  key={`cell-${index}`}
                  fill="#3b82f6"
                  opacity={filters.collegeId !== 'ALL' && !isSelected ? 0.35 : 1}
                  stroke={isSelected ? '#1e3a8a' : 'transparent'}
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
