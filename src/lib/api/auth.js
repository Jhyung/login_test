import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/api/auth/exists/email/' + email);
export const checkUserIdExists = (userId) => axios.get('/api/auth/exists/userId/' + userId);

export const localRegister = ({email, phoneNumber, userId, password}) => axios.post('/api/auth/register/local', { email, phoneNumber, userId, password });
export const localLogin = ({email, password}) => axios.post('/api/auth/login/local', { email, password });

export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
