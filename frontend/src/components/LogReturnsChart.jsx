import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { fetchLogReturns } from '../api';

const LogReturnsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchLogReturns().then(rawData => {
      // Optionally, add index or date if available
      const formatted = rawData.map((d, i) => ({ index: i, log_return: d.log_return }));
      setData(formatted);
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="log_return" stroke="#8884d8" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LogReturnsChart;
