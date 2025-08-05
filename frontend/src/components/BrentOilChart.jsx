import React, { useEffect, useState } from 'react';
import { fetchOilPrices } from '../api';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

function BrentOilChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchOilPrices()
      .then(rawData => {
        const formatted = rawData.map(item => ({
          date: item.Date.slice(0, 7),     
          price: parseFloat(item.Price),     
        }));
        setData(formatted);
      })
      .catch(err => {
        console.error("Failed to fetch oil prices:", err);
      });
  }, []);

  return (
    <div>
      <h2>Brent Oil Prices</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BrentOilChart;
