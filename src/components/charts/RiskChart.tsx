import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RiskChartProps {
  data?: Array<{ time: string; probability: number; rainfall: number }>;
}

export function RiskChart({ data }: RiskChartProps) {
  const defaultData = [
    { time: '00:00', probability: 15, rainfall: 0 },
    { time: '04:00', probability: 18, rainfall: 2 },
    { time: '08:00', probability: 25, rainfall: 8 },
    { time: '12:00', probability: 45, rainfall: 15 },
    { time: '16:00', probability: 62, rainfall: 22 },
    { time: '20:00', probability: 38, rainfall: 12 },
    { time: '24:00', probability: 28, rainfall: 5 }
  ];

  const chartData = data || defaultData;

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="probability" 
            stroke="#dc2626" 
            strokeWidth={3}
            name="Risk Probability (%)"
          />
          <Line 
            type="monotone" 
            dataKey="rainfall" 
            stroke="#2563eb" 
            strokeWidth={2}
            name="Rainfall (mm)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}