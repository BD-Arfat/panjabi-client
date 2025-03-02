import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Sheard/Navbar/Navbar';
import Footer from '../Sheard/Footer/Footer';
import useTheme from '../hooks/useTheme';

const MainLayout = () => {
    const { theme } = useTheme()
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout; 
