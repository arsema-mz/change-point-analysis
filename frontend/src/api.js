import axios from 'axios';

const API_BASE = 'http://127.0.0.1:5050/api';

export const fetchEvents = () => axios.get(`${API_BASE}/events`).then(res => res.data);

export const fetchLogReturns = () => axios.get(`${API_BASE}/log-returns`).then(res => res.data);

export const fetchSummaryStats = () => axios.get(`${API_BASE}/summary-stats`).then(res => res.data);

export const fetchOilPrices = () => axios.get(`${API_BASE}/oil-prices`).then(res => res.data);

