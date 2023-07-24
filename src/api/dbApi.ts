import axios from 'axios';

const dbApi = axios.create({
    baseURL: 'http://localhost:3000/'
});

export default dbApi;