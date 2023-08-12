import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataEntry {
  time: Date;
  value: number;
}

const initialData: DataEntry[] = [];

const RealTimeMonitoringChart: React.FC = () => {
  const [data, setData] = useState<DataEntry[]>(initialData);

  useEffect(() => {
    const fetchData = () => {
      const currentTime = new Date();
      const newData = [];

      // Generate data for the last 1 minute with 1-second intervals
      for (let i = 0; i < 60; i += 1) {
        // 60 intervals
        const time = new Date(currentTime.getTime() - i * 1000); // Subtract milliseconds
        const newValue = Math.floor(Math.random() * 5000);
        newData.push({ time, value: newValue });
      }

      setData(newData.reverse()); // Reverse data for chronological order
    };

    fetchData(); // Fetch data immediately
    const interval = setInterval(fetchData, 1000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const formattedTime = (time: Date) => {
    const seconds = time.getSeconds();
    if (seconds % 3 === 0) {
      // Display label only for every 10 seconds
      return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    }
    return ''; // Hide label for other seconds
  };

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data} margin={{ top: 20, right: 10, left: -15, bottom: 100 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
        <XAxis
          dataKey="time"
          interval={0} // No interval between x-axis labels
          tickFormatter={formattedTime}
          angle={-90}
          dx={-5}
          dy={20}
          stroke="#fff"
          tick={{ fontSize: 12 }} // Adjust font size for x-axis tick labels
        />
        <YAxis domain={[0, 5000]} stroke="#fff" tickCount={10} allowDecimals={false} />
        <Tooltip />

        <Line type="monotone" dataKey="value" stroke="#fff" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RealTimeMonitoringChart;
