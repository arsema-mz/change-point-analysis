import React, { useEffect, useState } from 'react';
import { fetchSummaryStats } from '../api';

const SummaryStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchSummaryStats().then(data => setStats(data));
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <div>
      <h3>Change Point Index: {stats.change_point}</h3>
      <p>Mean Before Change: {stats.mean_before.toFixed(4)}</p>
      <p>Mean After Change: {stats.mean_after.toFixed(4)}</p>
      <p>Sigma: {stats.sigma.toFixed(4)}</p>
    </div>
  );
};

export default SummaryStats;
