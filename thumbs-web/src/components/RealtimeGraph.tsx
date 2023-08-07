import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataEntry {
  time: Date;
  value: number;
}

const initialData: DataEntry[] = [];

export default function RealTimeMonitoringChart() {
  const [data, setData] = useState<DataEntry[]>(initialData);

  useEffect(() => {
    const fetchData = () => {
      const currentTime = new Date();
      const newData = [];

      // Generate data for the last 15 minutes with 1-minute intervals
      for (let i = 0; i < 15; i += 1) {
        const time = new Date(currentTime.getTime() - i * 60 * 1000); // Subtract milliseconds
        const newValue = Math.floor(Math.random() * 5000);
        newData.push({ time, value: newValue });
      }

      setData(newData.reverse()); // Reverse data for chronological order
    };

    fetchData(); // Fetch data immediately
    const interval = setInterval(fetchData, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const processedData = data.map((entry, index) => ({
    ...entry,
    formattedTime:
      index === 0 || entry.time.getDate() !== data[index - 1].time.getDate()
        ? entry.time.toLocaleString('en-US', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false })
        : entry.time.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
  }));

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={processedData} margin={{ top: 20, right: 10, left: -15, bottom: 100 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="formattedTime" interval={0} angle={-90} dx={-5} dy={50} />
        <YAxis domain={[0, 5000]} />
        <Tooltip />

        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
