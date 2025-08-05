import React from 'react';
import LogReturnsChart from './components/LogReturnsChart';
import SummaryStats from './components/SummaryStats';
import EventsList from './components/EventsList';
import BrentOilChart from './components/BrentOilChart';

function App() {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'sans-serif',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <h1>Brent Oil Price Change Point Dashboard</h1>
      <SummaryStats />
      <LogReturnsChart />
      <BrentOilChart />
      <EventsList />
    </div>
  );
}

export default App;
