import React from 'react';
import {useParams} from "react-router-dom";
function MovieStream() {
    let Params = useParams()
    let MovieLink = `https://embed.smashystream.com/playere.php?tmdb=${Params.id}`;
    return <>
        <iframe src={MovieLink} width={'100%'} height={'500px'}></iframe>
    </>
}

export default MovieStream;