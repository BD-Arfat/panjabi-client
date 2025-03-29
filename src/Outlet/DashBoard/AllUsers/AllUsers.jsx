import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecur from '../../../hooks/useAxiosSecur';
import { Trash } from 'lucide-react';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecur()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })


    const deleteProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: ` Do you want to delete the product?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Delete Success",
                                showConfirmButton: false,
                                timer: 1500
                            });

                        }
                    })
            }
        });
    };

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0){
                    refetch()
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Admin Create successfull"
                    });
                }
            })
    }


    return (
        <div>
            <div>
                <section>
                    <h1 className='font-bold text-2xl mb-4'>All Users : {users.length}</h1>
                </section>
                <section>
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 rounded-lg text-center">
                            <thead>
                                <tr className="">
                                    <th className="p-3">Image</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Date or Time</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Role</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((product) => (
                                    <tr key={product.id} className="border-t transition-all">
                                        <td className="p-3">
                                            <img src={product.image} alt={product.name} className="w-12 h-12 object-cover mx-auto" />
                                        </td>
                                        <td className="p-3 text-sm md:text-base">{product.name}</td>
                                        <td className="p-3 text-sm text-yellow-400 font-bold md:text-base">{product.dateAdded}</td>
                                        <td className="p-3 text-sm md:text-base">{product.email}</td>
                                        {product.role === 'admin' ? <h1 className="p-3 text-sm md:text-base cursor-pointer">Admin user</h1> :<td onClick={()=>handleMakeAdmin(product)} className="p-3 text-sm md:text-base cursor-pointer">Admin</td>}
                                        <td className="p-3">
                                            <button
                                                onClick={() => deleteProduct(product._id)}
                                                className="p-2 bg-red-500  rounded text-white hover:bg-red-600 transition-all"
                                            >
                                                <Trash size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AllUsers;