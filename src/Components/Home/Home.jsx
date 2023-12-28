import React, {useEffect} from 'react';
import Axios from "axios";
import {Helmet} from "react-helmet";

export default function Home() {

    async function GetApi() {
        let {data} = await Axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=1907dd7e22213c1275b820c5455946aa`);
        console.log(data.results)
    }

    useEffect(() => {
        GetApi();
    }, []);
    return (<div>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <h1 className='text-danger'>Home Component</h1>

    </div>);
}
