import axios from 'axios';
import React from 'react';

export const axiosSecur = axios.create({
    baseURL : `http://localhost:3000`
})
const useAxiosSecur = () => {
    return axiosSecur
};

export default useAxiosSecur;