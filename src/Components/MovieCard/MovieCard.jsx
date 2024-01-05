import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

export default function MovieCard({Movie, key}) {
    let MovieLink = 'https://embed.smashystream.com/playere.php?tmdb=' + Movie.id;
    return (
        <>
            <div className="col-md-2">
                <div className="movie position-relative">
                    <img src={'https://image.tmdb.org/t/p/w500' + Movie.poster_path} className='w-100' alt=""/>
                    <Link to={MovieLink} className='fs-6 my-2'>{Movie.title} </Link>
                    {Movie.vote_average &&
                        <div
                            className="bg-info vote position-absolute p-2 text-white top-0 end-0">
                            {Movie.vote_average.toFixed(1)}
                        </div>
                    }
                </div>
            </div>
        </>
    )

}
// {
//     "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
//     "id": 346698,
//     "original_language": "en",
//     "original_title": "Barbie",
//     "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
//     "popularity": 501.885,
//     "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
//     "release_date": "2023-07-19",
//     "title": "Barbie",
//     "video": false,
//     "vote_average": 7.2,
//     "vote_count": 6588
// }