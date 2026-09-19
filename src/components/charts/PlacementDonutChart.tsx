import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useFilters } from '../../context/FilterContext';
import { getPlacementStatusDistribution } from '../../db/relationalStore';
import { PlacementStatus } from '../../types/database';

export const PlacementDonutChart: React.FC = () => {
  const { filteredStudents, filters, setFilter } = useFilters();
  const data = getPlacementStatusDistribution(filteredStudents);
  const total = filteredStudents.length;
  const placedCount = filteredStudents.filter(s => s.placement_status === 'Placed').length;
  const rate = total > 0 ? Math.round((placedCount / total) * 100) : 0;

  const handleClick = (entry: any) => {
    if (!entry || !entry.name) return;
    const targetStatus = entry.name as PlacementStatus;
    if (filters.placementStatus === targetStatus) {
      setFilter('placementStatus', 'ALL');
    } else {
      setFilter('placementStatus', targetStatus);
    }
  };

  return (
    <div className="relative w-full h-[260px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={65}
            outerRadius={95}
            paddingAngle={3}
            dataKey="value"
            onClick={handleClick}
            cursor="pointer"
          >
            {data.map((entry, index) => {
              const isSelected = filters.placementStatus === entry.name;
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  opacity={filters.placementStatus !== 'ALL' && !isSelected ? 0.35 : 1}
                  stroke={isSelected ? '#1e293b' : '#fff'}
                  strokeWidth={isSelected ? 2 : 1}
                />
              );
            })}
          </Pie>
          <Tooltip
            formatter={(value: any, name: any) => [
              `${value} students (${total ? Math.round((Number(value) / total) * 100) : 0}%)`,
              name
            ]}
            contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            onClick={(props) => {
              if (props && props.value) {
                handleClick({ name: props.value });
              }
            }}
            formatter={(value) => <span className="text-xs font-medium text-slate-700 cursor-pointer">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[62%] text-center pointer-events-none">
        <span className="text-2xl font-black text-slate-800">{rate}%</span>
        <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Placed</span>
      </div>
    </div>
  );
};
