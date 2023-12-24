import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const API = "https://api.themoviedb.org/3/discover/movie?api_key=1907dd7e22213c1275b820c5455946aa&page=2&sort_by=popularity.desc";

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
  }, [])

  return (
    <>

    </>
  );
}

export default App;
