import Header from '../Components/Header.jsx'
import React, { useEffect, useState } from 'react';
import Contacts from './Contacts.jsx';
import Poster from '../Components/Poster.jsx';
import List from '../Components/List.jsx';

export default function Home(props) {
  // console.log(props)

  const {movies, isLoaded, rateMovies, isLoadedRate} = props;
  

        return (
        <>
        <Header />
        <div className='w-full bg-slate-400 '>
          <Poster movies={movies} isLoaded={isLoaded}/> 
        </div>
        <div className='max-w-screen-2xl mx-auto p-4 bg-slate-400 '>
          <List rateMovies={rateMovies} isLoaded={isLoadedRate}/>
        </div>
        
        </>
    );
  }
