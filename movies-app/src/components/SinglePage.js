import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SinglePage = () => {
     const [Movies, setMovies] = useState([]);
     const { id } = useParams();

  useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=79d9acfaef8473c486d2f4136e35980c&language=en-US&page=1c`)
            .then((response) => response.json())
            .then(moviesList => {
                setMovies(moviesList);
            });
    });
  return (
        <div>
            <div class="container mt-5 mb-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10 mt-5">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="images p-3">
                                        <div class="text-center p-4">
                                            <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500${Movies.poster_path}`} alt="Card cap" style={{ width: 300 }} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="product p-4">
                                        <div class="d-flex mt-5 justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <a href="/movielist"><i class="fa fa-long-arrow-left">
                                                </i><h5 class="ml-1 d-inline" >Back</h5>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="mt-4 mb-3">
                                            <h2 class="text-uppercase">{Movies.title}</h2>
                                            <h5>{Movies.release_date}</h5>
                                        </div>
                                        <p class="about">{Movies.overview}</p>

                                        <div class="cart mt-4 align-items-center">
                                            <button class="btn btn-primary text-uppercase mr-2 px-4">Watch Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage
