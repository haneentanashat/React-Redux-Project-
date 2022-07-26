import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import MovieList from './components/MovieList';
import SinglePage from './components/SinglePage';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (

    <BrowserRouter>
    < Nav />
  <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="About" element={<About />} />
    <Route path="MovieList" element={<MovieList />} />
    <Route path="SinglePage" element={<SinglePage />} />
    <Route path="Login" element={<Login />} />
  </Routes>
  <Footer />
</BrowserRouter>

  );
}

export default App;
