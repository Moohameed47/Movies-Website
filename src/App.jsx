import './App.css';
import {useEffect, useState} from 'react';
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

function App() {
    const API = 'https://api.themoviedb.org/3/discover/movie?api_key=1907dd7e22213c1275b820c5455946aa&page=2&sort_by=popularity.desc';

    const [movies, setMovies] = useState([]);

    let GetApi = async () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
        let {data} = await axios.get(API);
        setMovies(data);
        return data;
    };

    useEffect(() => {
        GetApi().then(r => console.log(r)).catch(err => console.log(err))
    }, []);

    const [userData, setUserData] = useState(null)
    useEffect(() => {
        JSON.parse(localStorage.getItem('Token')) !== null ? saveUserData() : console.log()
    }, [])

    function saveUserData() {
        let token = JSON.parse(localStorage.getItem('Token'));
        setUserData(token)
    }

    let routers = createBrowserRouter([
        {
            path: '/',
            element: <Layout setUserData={setUserData} userData={userData}/>,
            children: [
                {index: true, element: <Register saveUserData={saveUserData}/>},
                {path: 'login', element: <Login saveUserData={saveUserData}/>},
                {path: 'profile', element: <Protected><Profile/></Protected>},
                {path: 'movies', element: <Protected><Movies/></Protected>},
                {path: 'people', element: <Protected><People/></Protected>},
                {path: 'about', element: <Protected><About/></Protected>},
                {path: 'home', element: <Protected><Home movies={movies}/></Protected>},
                {path: '*', element: <Protected><Home movies={movies}/></Protected>},
                {path: 'tv', element: <Protected><Tv/></Protected>},
            ],
        },
    ]);

    return <RouterProvider router={routers}/>;
    // return <>
    //     {movies.map((movie) => console.log(movie))}
    // </>
}

export default App;
