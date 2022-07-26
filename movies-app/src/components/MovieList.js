import React from 'react'
import { useEffect, useState } from "react";

const MovieList = () => {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=79d9acfaef8473c486d2f4136e35980c&language=en-US&page=1c')
          .then((response) => response.json())
          .then(moviesList => {
              setMovies(moviesList.results);
              console.log(moviesList.results)
          });
  }, []);
  return (
    <>    
        <div class="carousel-inner" style={{position: 'relative',overflow: 'visible'}}>
  {Movies.map(data =>(
              <div class="col-sm-4" style={{ display: 'inline-block'}}>
              <div class="card" style={{height:550,width:400, margin:20, marginTop:50}} >
                  <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Card image" style={{height:350 }} />
                  <div class="card-body">
                      <h5 class="card-title">{data.title}</h5>
                      <p class="card-text">{data.overview.substring(0, 80)}...</p>
                  
                          <a href={'/data/'+ data.id} class="btn btn-primary">See More</a>
                    </div>
                  </div>
                  
    </div>
     ))}
    </div>
    </>
  )
}

export default MovieList
