import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useFilters } from '../../context/FilterContext';
import { getUniversityComparison } from '../../db/relationalStore';

export const UniversityComparisonChart: React.FC = () => {
  const { filteredStudents, filters, setFilter } = useFilters();
  const data = getUniversityComparison(filteredStudents);

  const handleClick = (entry: any) => {
    if (!entry || !entry.university_id) return;
    if (filters.universityId === entry.university_id) {
      setFilter('universityId', 'ALL');
    } else {
      setFilter('universityId', entry.university_id);
    }
  };

  return (
    <div className="w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 25 }}
        >
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: '#475569' }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
            interval={0}
            angle={-15}
            textAnchor="end"
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
              name === 'total' ? 'Enrolled in Sample' : (name === 'placed' ? 'Placed Students' : 'Working')
            ]}
          />
          <Legend
            verticalAlign="top"
            height={30}
            formatter={(value) => {
              const map: Record<string, string> = {
                total: 'Total Students',
                placed: 'Placed Students',
                working: 'Employed'
              };
              return <span className="text-xs font-medium text-slate-700">{map[value] || value}</span>;
            }}
          />
          <Bar
            dataKey="total"
            name="total"
            fill="#94a3b8"
            radius={[4, 4, 0, 0]}
            cursor="pointer"
            onClick={handleClick}
          />
          <Bar
            dataKey="placed"
            name="placed"
            fill="#2563eb"
            radius={[4, 4, 0, 0]}
            cursor="pointer"
            onClick={handleClick}
          />
          <Bar
            dataKey="working"
            name="working"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
            cursor="pointer"
            onClick={handleClick}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
