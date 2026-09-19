import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, Legend } from 'recharts';
import { useFilters } from '../../context/FilterContext';
import { getSkillsAnalytics } from '../../db/relationalStore';

export const SkillsAnalyticsChart: React.FC = () => {
  const { filteredStudents, filters, setFilter } = useFilters();
  const data = getSkillsAnalytics(filteredStudents);

  const handleClick = (entry: any) => {
    if (!entry || !entry.skill) return;
    if (filters.skillName === entry.skill) {
      setFilter('skillName', 'ALL');
    } else {
      setFilter('skillName', entry.skill);
    }
  };

  return (
    <div className="w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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
            dataKey="skill"
            width={120}
            tick={{ fontSize: 10, fill: '#334155', fontWeight: 500 }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
            formatter={(val: any, name: any, item: any) => [
              name === 'total' 
                ? `${val} students` 
                : `${val} students (${item.payload.placementRate}% placement rate)`,
              name === 'total' ? 'Students with Skill' : 'Placed Students'
            ]}
          />
          <Legend
            verticalAlign="top"
            height={26}
            formatter={(value) => {
              return <span className="text-xs font-medium text-slate-700">{value === 'total' ? 'Total with Skill' : 'Placed Cohort'}</span>;
            }}
          />
          <Bar dataKey="total" name="total" fill="#cbd5e1" radius={[0, 4, 4, 0]} cursor="pointer" onClick={handleClick}>
            {data.map((entry, index) => {
              const isSelected = filters.skillName === entry.skill;
              return (
                <Cell
                  key={`total-${index}`}
                  fill={isSelected ? '#93c5fd' : '#cbd5e1'}
                />
              );
            })}
          </Bar>
          <Bar dataKey="placed" name="placed" fill="#2563eb" radius={[0, 4, 4, 0]} cursor="pointer" onClick={handleClick}>
            {data.map((entry, index) => {
              const isSelected = filters.skillName === entry.skill;
              return (
                <Cell
                  key={`placed-${index}`}
                  fill={isSelected ? '#1d4ed8' : '#2563eb'}
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
