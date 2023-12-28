import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="container mb-5 pt-2 pb-5">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
