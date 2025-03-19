import React, { useState, useEffect } from "react";
import useCarts from "../../../../hooks/useCarts";
import { Trash, Plus, Minus } from "lucide-react";

const Carts = () => {
    const [cart] = useCarts();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(cart);
    }, [cart]); 
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
                <h1 className="text-2xl font-bold mb-8">Your Order Products</h1>
                <div className="text-right flex items-center justify-end gap-3 mb-5">
                    <h1 className="text-xl font-bold">Total Price : {totalPrice}$</h1>
                    <button className="bg-yellow-400 px-4 rounded-md py-1 font-bold">PAY BUTTON</button>
                </div>
                <table className="w-full border border-gray-200 rounded-lg text-center">
                    <thead>
                        <tr className="">
                            <th className="p-3">Image</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-t">
                                <td className="p-3"><img src={product.productImage} alt={product.name} className="w-12 h-12 object-cover" /></td>
                                <td className="p-3">{product.name}</td>
                                <td className="p-3">${product.price}</td>
                                <td className="p-3">
                                    <button
                                        onClick={() => deleteProduct(product.id)}
                                        className="p-2 bg-red-500  rounded"
                                    >
                                        <Trash size={16} />
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

export default Carts;
