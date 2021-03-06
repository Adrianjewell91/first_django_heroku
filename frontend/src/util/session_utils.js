import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const createUser = (formUser) => {
  return axios.post('/users/', formUser)
};

export const fetchUser = (formUser) => {
  return axios.get(`/users/?username=${formUser.username}&password=${formUser.password}`)
};

export const logOutUser = () => {
  return axios.get('/logout/')
};

export const getCurrentUser = () => {
  return axios.get('/users/')
};
