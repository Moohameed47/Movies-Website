import './App.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import People from './Components/People/People';
import Tv from './Components/Tv/Tv';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Movies from './Components/Movies/Movies';
import Profile from "./Components/Profile/profile";
import Protected from "./Components/Protected/Protected";
import {Offline} from "react-detect-offline"
import OfflineImage from './Components/Images/Offline.jpg'
import MovieStream from "./Components/MovieStream/MovieStream";

function App() {
    const API = 'https://api.themoviedb.org/3/discover/movie?api_key=1907dd7e22213c1275b820c5455946aa&page=1&sort_by=popularity.desc';
    const [userData, setUserData] = useState(null)
    const [movies, setMovies] = useState([]);

    let GetApi = async () => {
        let {data} = await axios.get(API);
        setMovies(data.results);
        return data;
    };

    useEffect(() => {
        GetApi().then(r => console.log(r)).catch(err => console.log(err))
        JSON.parse(localStorage.getItem('Token')) !== null ? saveUserData() : console.log()
    }, []);

    function saveUserData() {
        let token = JSON.parse(localStorage.getItem('Token'));
        setUserData(token)
    }

    let routers = createBrowserRouter([
        {
            path: '/',
            element: <Layout setUserData={setUserData} userData={userData}/>,
            children: [
                {index: true, element: <Protected><Home movies={movies}/></Protected>},
                {path: 'profile', element: <Protected><Profile/></Protected>},
                {path: 'movies', element: <Protected><Movies/></Protected>},
                {path: 'people', element: <Protected><People/></Protected>},
                {path: 'about', element: <Protected><About/></Protected>},
                {path: 'tv', element: <Protected><Tv/></Protected>},
                {path: 'login', element: <Login saveUserData={saveUserData}/>},
                {path: '*', element: <Protected><Home movies={movies}/></Protected>},
                {path: 'register', element: <Register saveUserData={saveUserData}/>},
                {path: 'MovieStream/:id', element: <MovieStream/>},
            ],
        },
    ]);
    return <>
            <Offline>
                <div className="OfflineContainer position-fixed top-0 start-0">
                    <div className="Offline">
                        <img src={OfflineImage} className={'w-100'} alt=""/>
                    </div>
                </div>
            </Offline>
        <RouterProvider router={routers}/>
    </>
}

export default App;
