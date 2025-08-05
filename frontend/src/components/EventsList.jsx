import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../api';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(data => setEvents(data));
  }, []);

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'sans-serif',
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        🛢️ Major Oil Market Events
      </h2>

      {events.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#666', textAlign: 'center' }}>No events found.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {events.map((event, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '1.2rem',
                backgroundColor: '#fdfdfd',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
            >
              <h3 style={{
                fontSize: '1.2rem',
                marginBottom: '0.3rem',
                fontWeight: '600',
              }}>
                {event.event_name}{' '}
                <span style={{
                  fontSize: '0.8rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  marginLeft: '0.5rem',
                }}>
                  {event.event_type}
                </span>
              </h3>

              <p style={{ color: '#555', marginBottom: '0.4rem' }}>
                <strong>🗓️ {event.start_date}</strong> → <strong>{event.end_date}</strong>
              </p>

              <p style={{ color: '#444', fontSize: '0.95rem' }}>
                {event.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;
