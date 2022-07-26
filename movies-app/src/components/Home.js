import React from 'react'
import './Home.css';
import MovieList from './MovieList'


const Home = () => {

  return (
    <>
      <div className='container-fluid' id='i'>
        <div className="showcase-content"  >
          <h1>Unlimited movies, TV shows and more.</h1>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
      </div>
      <section class="style-cards">
      <MovieList /> 
      </section>
      
       
   
    </>

  )
}

export default Home
