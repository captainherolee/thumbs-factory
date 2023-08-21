import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ILog } from '@api/types/Log';
import { useGetLog } from '@hooks/log';

interface DataEntry {
  time: string;
  electricityMaximumDemand: number;
  electricityActivePower: number;
  electricityReactivePower: number;
  gasUsage: number;
}

const RealTimeMonitoringChart: React.FC = () => {
  const [data, setData] = useState<DataEntry[]>([]);
  const logQuery = useGetLog();

  const maxLeftYDomain = data.length > 0 ? Math.max(...data.map((entry) => entry.electricityMaximumDemand)) * 1.3 : 100;
  const maxRightYDomain = data.length > 0 ? Math.max(...data.map((entry) => entry.gasUsage)) * 1.3 : 100;
  useEffect(() => {
    if (logQuery.data && Array.isArray(logQuery.data)) {
      const newData: DataEntry[] = logQuery.data
        .slice(0, 60)
        .map((entry: ILog) => ({
          time: new Date(entry.time).toLocaleTimeString('en-US', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }),
          electricityMaximumDemand: entry.electricityMaximumDemand,
          electricityActivePower: entry.electricityActivePower,
          electricityReactivePower: entry.electricityReactivePower,
          gasUsage: entry.gasUsage,
        }))
        .reverse();

      setData(newData);
    }
  }, [logQuery.data]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (logQuery.data && Array.isArray(logQuery.data)) {
        const newData: DataEntry[] = logQuery.data
          .slice(0, 60)
          .map((entry: ILog) => ({
            time: new Date(entry.time).toLocaleTimeString('en-US', {
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
            }),
            electricityMaximumDemand: entry.electricityMaximumDemand,
            electricityActivePower: entry.electricityActivePower,
            electricityReactivePower: entry.electricityReactivePower,
            gasUsage: entry.gasUsage,
          }))
          .reverse();

        setData(newData);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [logQuery.data]);

  return (
    <ResponsiveContainer width="100%" height={550}>
      <LineChart data={data} margin={{ top: 20, right: -20, left: -30, bottom: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#fff" strokeOpacity={0.3} />
        <XAxis dataKey="time" interval={1} angle={-90} dx={-5} dy={40} stroke="#fff" tick={{ fontSize: 10 }} />
        <YAxis domain={[0, maxLeftYDomain]} stroke="#ffff00" tickCount={10} allowDecimals={false} />
        <YAxis yAxisId="right" orientation="right" domain={[0, maxRightYDomain]} stroke="#6bc8c3" tickCount={10} allowDecimals={false} />

        <Line type="monotone" dataKey="electricityMaximumDemand" stroke="#35F0F5" strokeWidth={2} name="최대수요" dot={false} />
        <Line type="monotone" dataKey="electricityActivePower" stroke="#ffff00" strokeWidth={2} name="유효전력" dot={false} />
        <Line type="monotone" dataKey="electricityReactivePower" stroke="#ffc658" strokeWidth={2} name="무효전력" dot={false} />
        <Line type="monotone" dataKey="gasUsage" stroke="#82ca9d" strokeWidth={2} yAxisId="right" name="가스유량" dot={false} />

        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 20 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RealTimeMonitoringChart;
