import Header from '../Components/Header.jsx'
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import Poster from '../Components/Poster'


export default function Home() {

  const [arrayMovies, setarrayMovies] = useState([]); 
  const [index, setIndex] = useState(0); 
  const [isLoaded, setisLoaded] = useState(false); 

  useEffect(()=>{

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1')
    .then( response => response.json())   
    .then( answer => {
      setarrayMovies(answer.results);
      setIndex(Math.floor(Math.random() * 19));
      setisLoaded(true); 
      // console.log(Math.floor(Math.random() * 19))
    }) 

    .catch ((error) => {
      console.error('Error:', error)
    })

  },[])


    return (
      <>
        <Header/>
        <div className='w-full'>
          { !isLoaded ? <div>Loading...</div> : <Poster movies={arrayMovies} index={index}/> }
        </div>
      </>
=======
import Contacts from './Contacts.jsx';
import Poster from '../Components/Poster.jsx';

export default function Home() {

  const [arrayMovies, setArrayMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
          

  useEffect(()=>{

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
    .then( response => response.json() )
    .then( answer =>  {
      setArrayMovies(answer.results);
      setIndex(Math.floor(Math.random() * 19))
      setIsLoaded(true);
   
    })
    .catch((error) => {
      console.error('Error:',error);
    })
  },[])



        return (
        <>
        <Header />
        <div className='w-full bg-slate-400 '>
          { !isLoaded ? <div>Loading...</div> : <Poster movies={arrayMovies} index={index}/> }
        </div>
        </>
>>>>>>> 95dddc359d0e1ad6196f6413472d1d851f261579
    );
  }


  