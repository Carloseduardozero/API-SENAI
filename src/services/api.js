import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-levissa.herokuapp.com/'
});

export default api;