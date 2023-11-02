import axios from 'axios'
import {Navigate} from 'react-router-dom'


const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api/",
})

axiosClient.interceptors.request.use((config) => {
    const token = '1234';
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

axiosClient.interceptors.response.use(response => response, error => {
    if (error.response && error.response.status == 401) {
        // navigate('/login')
        console.log("Route to login, not signed in.")
        return
    }
    throw error;
})

export default axiosClient;