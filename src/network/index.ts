import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:9000/api',
});

API.interceptors.request.use(function (config) {
    if (!config?.headers) return config;

    config.headers.Authorization = `Bearer ${localStorage.getItem(
        'accessToken'
    )}`;

    return config;
});

export default API;
