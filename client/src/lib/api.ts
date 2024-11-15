import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (username: string, password: string) => {
  const { data } = await api.post('/auth/login', { username, password });
  localStorage.setItem('token', data.token);
  return data;
};

export const getDateRequests = async () => {
  const { data } = await api.get('/calendar/requests');
  return data;
};

export const createDateRequest = async (date: string, status: string) => {
  const { data } = await api.post('/calendar/requests', { date, status });
  return data;
};

export const acknowledgeDateRequest = async (requestId: string) => {
  const { data } = await api.patch(`/calendar/requests/${requestId}/acknowledge`);
  return data;
};