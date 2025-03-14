import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const RegisterForm = () => {
    const { createUser } = useContext(AuthContext);
    
    const [alert, setAlert] = useState({ show: false, message: '', type: '' });

    const closeAlert = () => {
        setAlert({ show: false, message: '', type: '' });
    };

    const handleRegisterform = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const imageurl = e.target.imageurl.value;

        createUser(email, password)
            .then((res) => {
                const user = res.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: imageurl
                })
                .then(() => {
                    setAlert({ show: true, message: "Registration successful! 🎉", type: "success" });
                })
                .catch(() => {
                    setAlert({ show: true, message: "Profile update failed! ❌", type: "error" });
                });
            })
            .catch((error) => {
                setAlert({ show: true, message: error.message, type: "error" });
            });
    };

    return (
        <>
            <Helmet>
                <title>Register Page</title>
            </Helmet>

            <form
                onSubmit={handleRegisterform}
                className="space-y-6 max-w-md mx-auto p-6 rounded-xl shadow-lg mt-28 my-8 bg-white"
            >
                <div>
                    <label className="block font-medium">Full Name</label>
                    <input type="text" name="name" required placeholder="Enter your name"
                        className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
                </div>

                <div>
                    <label className="block font-medium">Email</label>
                    <input type="email" name="email" required placeholder="Enter your email"
                        className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
                </div>

                <div>
                    <label className="block font-medium">Password</label>
                    <input type="password" name="password" required placeholder="Enter password"
                        className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
                </div>

                <div>
                    <label className="block font-medium">Image URL</label>
                    <input type="url" name="imageurl" required placeholder="Enter Image URL"
                        className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
                </div>

                <button type="submit"
                    className="w-full bg-yellow-800 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-950 transition duration-200">
                    Register
                </button>

                <div className="flex items-center space-x-3 mt-4">
                    <button type="button"
                        className="w-full px-4 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500 transition-all">
                        <span className="font-semibold flex items-center justify-center gap-3">
                            Register with <FaGoogle className="text-2xl text-yellow-500"></FaGoogle>
                        </span>
                    </button>
                </div>
            </form>

            {/* Custom Modal Alert */}
            {alert.show && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className={`p-6 rounded-lg shadow-xl text-center ${alert.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
                        <p className="text-lg font-semibold">{alert.message}</p>
                        <button onClick={closeAlert} className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default RegisterForm;
