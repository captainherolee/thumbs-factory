import { electricityAtom } from '@stores/electricity';
import { PointColor, PointOverColor } from '@utils/constant';
import { ConvertBarGraphMax } from '@utils/convert';
import React from 'react';
import { BarChart, Bar, YAxis, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useRecoilValue } from 'recoil';

interface DataEntry {
  id: number;
  name: string;
  power: number;
}

export default function MonthlyBarChart() {
  const electricityValue = useRecoilValue(electricityAtom);

  const data: DataEntry[] = [{ id: 1, name: '전력', power: electricityValue?.monthlyReactivePower ?? 0 }];
  return (
    <ResponsiveContainer width="100%" height={70}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="2 2" strokeOpacity={0.3} />
        <YAxis type="category" dataKey="name" hide />
        <XAxis type="number" dataKey="power" domain={[0, electricityValue?.monthlyContractPower ?? 0]} stroke="#fff" />
        <Bar
          dataKey="power"
          fill={
            data[0].power >= Math.floor(((electricityValue?.monthlyContractPower ?? 0) * (electricityValue?.cpAlarmSetValue ?? 0)) / 100)
              ? PointOverColor
              : PointColor
          }
        >
          {data.map((entry) => (
            <Bar key={entry.id} dataKey="power" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
