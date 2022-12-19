import React from "react";
import { useLocation } from "react-router-dom";
import MovieComponent from "../Components/MovieComponent";

function Movie() {
    const location = useLocation();

    const { originalTitle, poster, primaryTitle, runTime, startYear, type} = location.state;

    return (
        <>
            <div className="movie-container">
                <div className="movie-wrapper">
                    <h1 className="movie-header">"{primaryTitle}"</h1>
                    <img src={poster} alt={`Poster for ${primaryTitle}`} />
                </div>
                <div className="info-box">
                    <ul>
                        <li>Original Title: {originalTitle}</li>
                        <li>Released in: {startYear}</li>
                        <li>Runtime: {runTime} minutes</li>
                        <li>Type: {type}</li>
                    </ul>
                </div>
            </div>
            <h2 className="Home-movie-header">Other movies you might wanna check out</h2>
      <MovieComponent pagesize={20} page={12} />
        </>
    );
};

export default Movie;