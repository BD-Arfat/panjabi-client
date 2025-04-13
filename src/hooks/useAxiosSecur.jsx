import axios from 'axios';
import React from 'react';

export const axiosSecur = axios.create({
    baseURL: `http://localhost:3000`
})
const useAxiosSecur = () => {
    axiosSecur.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('ami tumake stop hoyte boltechi je', token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    }
    );
    axiosSecur.interceptors.response.use(function(response){
        return response;
    }, function(error){
        return Promise.reject(error)
    })
    return axiosSecur
};

export default useAxiosSecur;