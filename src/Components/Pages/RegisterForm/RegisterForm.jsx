import React from 'react';
import { Helmet } from 'react-helmet';
import { FaGoogle } from 'react-icons/fa';

const RegisterForm = () => {
    return (
        <>
        <Helmet>
        <title>Register page</title>
      </Helmet>
        <form className="space-y-6 max-w-md mx-auto p-6  rounded-xl shadow-lg mt-28 my-8">
            {/* Name Input */}
            <div>
                <label className="block  font-medium">Full Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 mt-2 border  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
            </div>

            {/* Email Input */}
            <div>
                <label className="block  font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
            </div>

            {/* Password Input */}
            <div>
                <label className="block  font-medium">Password</label>
                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Enter password"
                    className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
            </div>

            {/* Confirm Password */}
            <div>
                <label className="block  font-medium">Image url</label>
                <input
                    type="url"
                    name="imageurl"
                    required
                    placeholder="Confirm password"
                    className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-yellow-800 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-950 transition duration-200"
            >
                Register
            </button>
            {/* Google Login Button */}
            <div className="flex items-center space-x-3 mt-4">
                <div className="w-full">
                    <button
                        type="button"
                        className="w-full px-4 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500 transition-all"
                    >
                        <span className="font-semibold flex items-center justify-center gap-3">Register with <FaGoogle className='text-2xl text-yellow-500'></FaGoogle></span>
                    </button>
                </div>
            </div>
        </form>
        </>
    );
};

export default RegisterForm;
