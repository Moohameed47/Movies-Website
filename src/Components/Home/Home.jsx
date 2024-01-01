import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import MovieCard from "../MovieCard/MovieCard";

export default function Home({movies}) {
    return <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div className="row py-5">
            <div className="col-md-4">
                <div className="border-gray w-25 mb-3"></div>
                <h2 className='h4'>Trending Movies <br/> to Watch Right Now</h2>
                <p className='py-2 text-muted'>Watch Movies Right Now</p>
                <div className="border-gray w-100 mt-3"></div>
            </div>

            {movies.map((movie, index) => <MovieCard key={index} ind={index} Movie={movie}/>)}

        </div>
    </>
}
