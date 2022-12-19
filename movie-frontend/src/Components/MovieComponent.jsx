import React, { useState, useEffect } from "react";
import NavLink from 'react-bootstrap/NavLink';
import { Link} from 'react-router-dom';

const MovieComponent = (props) => {
    const [movieData, setmovieData] = useState([])
    const { pagesize, page } = props;

    useEffect(() => {
        const url = `http://localhost:5001/api/showInfos?pagesize=${pagesize}&page=${page}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setmovieData(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [pagesize, page]);

    return (
        <container className="movie-container container">

            <div className="row outer-movie-div">
                {movieData.map((movie) => (
                    <div className="movie col-sm" key={movie.id}>
                        <NavLink as={Link} to="/movie/" state={movie}>
                            <img src={movie.poster} alt={`Poster for ${movie.title}`} />
                            <div className="movie-title">{movie.primaryTitle}</div>
                        </NavLink>
                    </div>
                ))}
            </div>

        </container>

    );
};



export default MovieComponent;