import Swal from "sweetalert2";
import useAuthContext from "../../../../hooks/useAuthContext";
import useAxiosPublick from "../../../../hooks/useAxiosPublick";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const ReviewProducts = () => {
    const { user } = useAuthContext();
    const axiosPublic = useAxiosPublick();
    const product = useLoaderData();
    const productId = product?._id;

    // রিভিউ ফেচ করার জন্য useQuery
    const { data: reviews = [], refetch } = useQuery({ 
        queryKey: ['reviews', productId], 
        queryFn: () => axiosPublic.get(`/review/${productId}`).then(res => res.data) ,
        enabled: !!productId,
    });

    const handleOnSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const rating = e.target.rating.value;
        const des = e.target.des.value;
        const productId = product._id;
        const userImage = user.photoURL;
        const productName = product.name;
        const dataInfo = { name, email, productId, productName, rating, des, userImage };

        axiosPublic.post('/review', dataInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Review Added Successfully",
                        text: "Your review has been submitted.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                    });
                    e.target.reset();
                    refetch(); // ✅ নতুন রিভিউ যোগ হলে রিফ্রেশ হবে
                }
            });
    };

    return (
        <div className="shadow-md rounded-lg p-6 mt-10">
            <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
            <form onSubmit={handleOnSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Your Name" defaultValue={user?.displayName} disabled className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                <input type="text" name="email" placeholder="Your Email" defaultValue={user?.email} disabled className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required name="rating">
                    <option value="">Select Rating</option>
                    <option value="1">⭐☆☆☆☆ (1)</option>
                    <option value="2">⭐⭐☆☆☆ (2)</option>
                    <option value="3">⭐⭐⭐☆☆ (3)</option>
                    <option value="4">⭐⭐⭐⭐☆ (4)</option>
                    <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                </select>
                <textarea placeholder="Write your review..." name="des" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">Submit Review</button>
            </form>
            
            {/* ইউজার রিভিউ লিস্ট */}
            <div className="mt-8 ">
                <h3 className="text-xl font-semibold mb-4">User Reviews</h3>
                <div className="space-y-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {reviews.length > 0 ? reviews.map(review => (
                        <div key={review._id} className="border p-4 rounded-md shadow-sm">
                            <h4 className="font-bold">{review.name}</h4>
                            <p className="text-sm text-gray-600">{review.email}</p>
                            <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                            <p className="mt-2">{review.des}</p>
                        </div>
                    )) : <p className="text-gray-500">No reviews yet.</p>}
                </div>
            </div>
        </div>
    );
};

export default ReviewProducts;
