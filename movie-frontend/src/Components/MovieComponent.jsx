import React, {useState, useEffect} from "react";


const MovieComponent = (props) => {
    const [movieData, setmovieData] = useState([])
    const { pagesize, page } = props;


    useEffect(()=> {
        const url = `http://localhost:5001/api/showInfos?pagesize=${pagesize}&page=${page}`;

        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setmovieData(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    },[pagesize, page]);
    
    return (
        <container className="movie-container">
          {movieData.map((movie) => (
            <div className="movie" key={movie.id}>
              <img src={movie.poster} alt={`Poster for ${movie.title}`} />
              <div className="movie-title">{movie.primaryTitle}</div>
            </div>
          ))}
        </container>

      );
    };
  
  
  
  export default MovieComponent;