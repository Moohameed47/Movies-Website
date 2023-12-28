import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {Axios} from "axios";
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import People from './Components/People/People';
import Tv from './Components/Tv/Tv';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Movies from './Components/Movies/Movies';
const API = 'https://api.themoviedb.org/3/discover/movie?api_key=1907dd7e22213c1275b820c5455946aa&page=2&sort_by=popularity.desc';

let routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {path: 'home', element: <Home/>},
            {path: 'about', element: <About/>},
            {path: 'people', element: <People/>},
            {path: 'tv', element: <Tv/>},
            {path: 'login', element: <Login/>},
            {index: true, element: <Register/>},
            {path: 'movies', element: <Movies/>},
        ],
    },
]);

function App() {
    const [movies, setMovies] = useState([]);

    let GetApi = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    };

    return <RouterProvider router={routers}/>;
}

export default App;