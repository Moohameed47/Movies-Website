import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

export default function Layout({userData, setUserData}) {
    let navigate = useNavigate();

    function logOut() {
        localStorage.removeItem('Token')
        setUserData(null);
        navigate('/login')
    }

    return (
        <>
            <Navbar userData={userData} logOut={logOut}/>
            <div className="container mb-5 pt-2 pb-5">
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}
