import React from 'react';
import useAxiosSecur from '../../../../hooks/useAxiosSecur';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllProducts = () => {
    const axiosSecure = useAxiosSecur();

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get('/products');
            return res.data;
        }
    });
    const deleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/products/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Deleted Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
            }
        });
    };

    if (isLoading) {
        return <p className="text-center text-lg text-indigo-600">Loading...</p>;
    }

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">All Products</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
                    <thead>
                        <tr className="bg-indigo-100 text-indigo-700">
                            <th className="py-3 px-4 text-left">#</th>
                            <th className="py-3 px-4 text-left">Product Name</th>
                            <th className="py-3 px-4 text-left">Price</th>
                            <th className="py-3 px-4 text-left">Category</th>
                            <th className="py-3 px-4 text-left">Color</th>
                            <th className="py-3 px-4 text-left">Section</th>
                            <th className="py-3 px-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id} className="border-t border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4 font-medium">{product.name}</td>
                                <td className="py-3 px-4">${product.price}</td>
                                <td className="py-3 px-4">{product.category}</td>
                                <td className="py-3 px-4">{product.color}</td>
                                <td className="py-3 px-4">{product.section}</td>
                                <td className="py-3 px-4">
                                    <button onClick={()=> deleteUser(product._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;
