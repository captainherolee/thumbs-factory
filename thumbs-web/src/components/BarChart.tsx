import React from 'react';
import { BarChart, Bar, YAxis, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataEntry {
  id: number;
  name: string;
  power: number;
}

const data: DataEntry[] = [{ id: 1, name: '전력', power: 3300 }];

export default function PowerBarChart() {
  return (
    <ResponsiveContainer width="100%" height={70}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis type="category" dataKey="name" hide />
        <XAxis type="number" dataKey="power" domain={[0, 5000]} />
        <Tooltip />
        <Bar dataKey="power" fill={data[0].power >= 3500 ? '#ff0000' : '#008000'}>
          {data.map((entry) => (
            <Bar key={entry.id} dataKey="power" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
