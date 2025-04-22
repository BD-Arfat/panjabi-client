import React from 'react';
import useAuthContext from './useAuthContext';
import useAxiosSecur from './useAxiosSecur';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useAuthContext();
    const axionSecure = useAxiosSecur()
    const {data : isuseAdmin, isPanding : isAdminLoading} = useQuery({
        queryKey : [user?.email, 'useAdmin'],
        queryFn : async()=> {
            const res = await axionSecure.get(`/user/admin/${user.email}`)
            return res.data?.admin
        }
    })
    return [isuseAdmin, isAdminLoading]
};

export default useAdmin;