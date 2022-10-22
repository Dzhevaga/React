import Header from './Components/Header.jsx'
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TVShow from './Pages/TVShow';
import Contacts from './Pages/Contacts';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from "react";
import List from './Components/List.jsx';

function App() {
  const [popMovies, setPopMovies] = useState([]); 
  const [isLoaded, setIsLoaded] = useState(false);

  const [rateMovies, setRateMovies] = useState([]);
  const [isLoadedRate, setIsLoadedRate] = useState([]);

  useEffect(()=>{

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
    .then( response => response.json() )
    .then( answer =>  {
      setPopMovies(answer.results);
      setIsLoaded(true);
       })
    .catch((error) => {
      console.error('Error:',error);
    })

  fetch("https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
    .then( response => response.json() )
    .then( answer =>  {
      setRateMovies(answer.results);
      setIsLoadedRate(true);
       })
    .catch((error) => {
      console.error('Error:',error);
    })
  
  },[])


  return (
    <Routes>
      <Route path="/" element={<Home movies={popMovies} isLoaded={isLoaded} rateMovies={rateMovies} isLoadedrate={isLoadedRate}/>}/>
      <Route path="/home" element={<Home movies={popMovies} isLoaded={isLoaded} rateMovies={rateMovies} isLoadedrate={isLoadedRate}/>}/>
      
      <Route path="/movies" element={<Movies />}/>
      <Route path="/tv-show" element={<TVShow />}/>
      <Route path="/contacts" element={<Contacts />}/>
      </Routes>
  );
}

export default App;