import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.88.245:19001'
});

export default api;