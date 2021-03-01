import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific conditions
    useEffect(() => {
        // if [], run once when row loads, don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <div className='row'>
            {/* title example trending now */}
            <h2>{title}</h2>
            <div className={`row_posters ${isLargeRow && "row_postersLarge"}`}>
                {/* posters images of the movies*/}
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className="row_poster"
                        src={`${base_url}${ isLargeRow ?  movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
