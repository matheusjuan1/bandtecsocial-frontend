import axios from 'axios';

const user = axios.create({ baseURL: process.env.REACT_APP_API_URL_USER});

export default user;