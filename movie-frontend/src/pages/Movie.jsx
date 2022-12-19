import React from "react";
import { useLocation } from "react-router-dom";

function Movie() {
const location = useLocation();

const {endYear, isAdult, originalTitle, poster, primaryTitle, runTime, startYear, type, url} = location.state;

console.log(location.state.primaryTitle);

    return (
        <h1>{primaryTitle} og {runTime}</h1>
    );
};

export default Movie;